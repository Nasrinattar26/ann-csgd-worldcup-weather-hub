#!/usr/bin/env python
import csv
import json
import math
import os
from datetime import datetime
from pathlib import Path

import numpy as np
import pandas as pd
import xarray as xr


INIT = os.environ["INIT"]
NC12 = Path(os.environ["NC12"])
LOCAL_REPO = Path(os.environ["LOCAL_REPO"])

DATA_DIR = LOCAL_REPO / "data"
CITIES_DIR = DATA_DIR / "cities"
CITY_JSON = DATA_DIR / "cities.json"

PRODUCTS = [
    {
        "id": "expected_precip",
        "label": "Expected precipitation",
        "units": "mm per 12h",
        "kind": "amount",
        "source_variable": "expected_precip"
    },
    {
        "id": "prob_gt_0p5inch_percent",
        "label": "Probability > 0.5 inch",
        "units": "%",
        "kind": "probability",
        "source_variable": "prob_gt_0p5inch_percent"
    },
    {
        "id": "prob_gt_1inch_percent",
        "label": "Probability > 1 inch",
        "units": "%",
        "kind": "probability",
        "source_variable": "prob_gt_1inch_percent"
    },
    {
        "id": "prob_gt_2inch_percent",
        "label": "Probability > 2 inch",
        "units": "%",
        "kind": "probability",
        "source_variable": "prob_gt_2inch_percent"
    },
    {
        "id": "prob_gt_2yr12h_ari_percent",
        "label": "Probability > 2-year 12-h ARI",
        "units": "%",
        "kind": "probability",
        "source_variable": "prob_gt_2yr12h_ari_percent"
    },
    {
        "id": "prob_gt_5yr12h_ari_percent",
        "label": "Probability > 5-year 12-h ARI",
        "units": "%",
        "kind": "probability",
        "source_variable": "prob_gt_5yr12h_ari_percent"
    }
]


def clean_float(x):
    try:
        y = float(x)
    except Exception:
        return None
    if not math.isfinite(y):
        return None
    return y


def fmt_time(v):
    ts = pd.to_datetime(v)
    if pd.isna(ts):
        return None
    return ts.strftime("%Y-%m-%d %H:%M UTC")


def nearest_index_1d(values, target):
    arr = np.asarray(values, dtype=float)
    return int(np.nanargmin(np.abs(arr - target)))


def summarize_product(rows, product_id, product_label, units):
    sub = [r for r in rows if r["product_id"] == product_id]

    finite_nearest = [r for r in sub if r["nearest_value"] is not None]
    finite_box = [r for r in sub if r["box_max"] is not None]

    nearest_peak = None
    box_peak = None

    if finite_nearest:
        r = max(finite_nearest, key=lambda x: x["nearest_value"])
        nearest_peak = {
            "value": r["nearest_value"],
            "lead_hour": r["lead_hour"],
            "valid_time": r["valid_time"]
        }

    if finite_box:
        r = max(finite_box, key=lambda x: x["box_max"])
        box_peak = {
            "value": r["box_max"],
            "lead_hour": r["lead_hour"],
            "valid_time": r["valid_time"]
        }

    return {
        "product_id": product_id,
        "product_label": product_label,
        "units": units,
        "nearest_peak": nearest_peak,
        "box_max_peak": box_peak
    }


print(f"[PY] Opening NetCDF: {NC12}")
ds = xr.open_dataset(NC12)

required_dims = ["record", "lat", "lon"]
for d in required_dims:
    if d not in ds.dims:
        raise RuntimeError(f"Missing required dimension: {d}")

for product in PRODUCTS:
    var = product["source_variable"]
    if var not in ds.data_vars:
        raise RuntimeError(f"Missing required product variable: {var}")

for coord in ["valid_time", "lead_hours"]:
    if coord not in ds:
        raise RuntimeError(f"Missing required coordinate/data variable: {coord}")

lat = np.asarray(ds["lat"].values, dtype=float)
lon = np.asarray(ds["lon"].values, dtype=float)
valid_times = list(ds["valid_time"].values)
lead_hours = np.asarray(ds["lead_hours"].values).astype(int)

with open(CITY_JSON) as f:
    city_meta = json.load(f)

cities = city_meta["cities"]

city_summaries = []

print("[PY] Cities:", len(cities))
print("[PY] Products:", len(PRODUCTS))
print("[PY] Records:", int(ds.dims["record"]))

for city in cities:
    city_id = city["id"]
    city_dir = CITIES_DIR / city_id
    city_dir.mkdir(parents=True, exist_ok=True)

    ilat = nearest_index_1d(lat, float(city["lat"]))
    ilon = nearest_index_1d(lon, float(city["lon"]))

    grid_lat = clean_float(lat[ilat])
    grid_lon = clean_float(lon[ilon])

    i0 = max(0, ilat - 2)
    i1 = min(len(lat), ilat + 3)
    j0 = max(0, ilon - 2)
    j1 = min(len(lon), ilon + 3)

    rows = []

    for product in PRODUCTS:
        var = product["source_variable"]
        da = ds[var]

        for rec in range(ds.dims["record"]):
            arr = np.asarray(da.isel(record=rec).values, dtype=float)

            nearest = arr[ilat, ilon]
            box = arr[i0:i1, j0:j1]
            finite = box[np.isfinite(box)]

            if finite.size:
                box_min = np.nanmin(finite)
                box_mean = np.nanmean(finite)
                box_median = np.nanmedian(finite)
                box_max = np.nanmax(finite)
                box_p90 = np.nanpercentile(finite, 90)
            else:
                box_min = box_mean = box_median = box_max = box_p90 = np.nan

            rows.append({
                "init": INIT,
                "city_id": city_id,
                "city_name": city["display_name"],
                "market": city["market"],
                "stadium_area": city["stadium_area"],
                "city_lat": clean_float(city["lat"]),
                "city_lon": clean_float(city["lon"]),
                "grid_i": int(ilat),
                "grid_j": int(ilon),
                "grid_lat": grid_lat,
                "grid_lon": grid_lon,
                "record": int(rec),
                "lead_hour": int(lead_hours[rec]),
                "valid_time": fmt_time(valid_times[rec]),
                "product_id": product["id"],
                "product_label": product["label"],
                "units": product["units"],
                "nearest_value": clean_float(nearest),
                "box_min": clean_float(box_min),
                "box_mean": clean_float(box_mean),
                "box_median": clean_float(box_median),
                "box_max": clean_float(box_max),
                "box_p90": clean_float(box_p90),
                "n_finite_5x5": int(finite.size),
                "is_sample_data": False
            })

    product_summaries = [
        summarize_product(rows, p["id"], p["label"], p["units"])
        for p in PRODUCTS
    ]

    summary = {
        "init": INIT,
        "city": city,
        "nearest_grid": {
            "grid_i": int(ilat),
            "grid_j": int(ilon),
            "grid_lat": grid_lat,
            "grid_lon": grid_lon
        },
        "box_indices": {
            "i0": int(i0),
            "i1_exclusive": int(i1),
            "j0": int(j0),
            "j1_exclusive": int(j1)
        },
        "n_records": len(rows),
        "n_lead_records": int(ds.dims["record"]),
        "products": product_summaries,
        "files": {
            "timeseries_json": f"data/cities/{city_id}/timeseries_12h.json",
            "timeseries_csv": f"data/cities/{city_id}/timeseries_12h.csv",
            "summary_json": f"data/cities/{city_id}/summary.json"
        },
        "is_sample_data": False
    }

    with open(city_dir / "timeseries_12h.json", "w") as f:
        json.dump({
            "init": INIT,
            "city": city,
            "nearest_grid": summary["nearest_grid"],
            "box_indices": summary["box_indices"],
            "products": PRODUCTS,
            "records": rows,
            "is_sample_data": False
        }, f, indent=2)

    csv_path = city_dir / "timeseries_12h.csv"
    with open(csv_path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)

    with open(city_dir / "summary.json", "w") as f:
        json.dump(summary, f, indent=2)

    city_summaries.append(summary)

    print(
        f"[PY] {city_id:30s} "
        f"city=({city['lat']:.4f},{city['lon']:.4f}) "
        f"grid=({grid_lat:.4f},{grid_lon:.4f}) "
        f"i/j=({ilat},{ilon}) rows={len(rows)}"
    )

app_data = {
    "title": "ANN-CSGD World Cup Weather Hub",
    "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
    "init": INIT,
    "created_utc": datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
    "mode": "real_ann12_v4",
    "is_sample_data": False,
    "source_netcdf": str(NC12),
    "dimensions": {
        "record": int(ds.dims["record"]),
        "lat": int(ds.dims["lat"]),
        "lon": int(ds.dims["lon"])
    },
    "products": PRODUCTS,
    "lead_hours": [int(x) for x in lead_hours.tolist()],
    "cities": [
        {
            **city,
            "timeseries_json": f"data/cities/{city['id']}/timeseries_12h.json",
            "timeseries_csv": f"data/cities/{city['id']}/timeseries_12h.csv",
            "summary_json": f"data/cities/{city['id']}/summary.json"
        }
        for city in cities
    ],
    "city_summaries": city_summaries,
    "notes": [
        "Values are extracted from the nearest ANN12-v4 grid point and a 5x5 grid-cell box centered on that grid point.",
        "Probability products use percent variables from the ANN12-v4 NetCDF.",
        "This file is generated offline from the selected INIT/run and committed to GitHub Pages."
    ]
}

with open(DATA_DIR / "app_data.json", "w") as f:
    json.dump(app_data, f, indent=2)

with open(DATA_DIR / "app_data.js", "w") as f:
    f.write("window.WC_APP_DATA = ")
    json.dump(app_data, f, indent=2)
    f.write(";\n")

print("[PY] Wrote data/app_data.json")
print("[PY] Wrote data/app_data.js")
print("[PY] Done.")
