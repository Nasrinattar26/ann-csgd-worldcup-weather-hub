#!/usr/bin/env python
import json
import os
import shutil
from pathlib import Path

import numpy as np
import pandas as pd
import xarray as xr

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import BoundaryNorm
from PIL import Image


INIT = os.environ["INIT"]
NC12 = Path(os.environ["NC12"])
LOCAL_REPO = Path(os.environ["LOCAL_REPO"])

CITY_JSON = LOCAL_REPO / "data" / "cities.json"
OUTROOT = LOCAL_REPO / "products" / "state_gifs"

PRODUCTS = [
    {
        "var": "expected_precip",
        "id": "expected_precip",
        "label": "Expected precipitation",
        "units": "mm per 12h",
        "levels": [0, 1, 2.5, 5, 10, 15, 25, 40, 60, 90],
        "cmap": "YlGnBu"
    },
    {
        "var": "prob_gt_0p5inch_percent",
        "id": "prob_gt_0p5inch",
        "label": "Probability > 0.5 inch",
        "units": "%",
        "levels": [0, 1, 2, 5, 10, 20, 30, 40, 50, 70, 90, 100],
        "cmap": "YlOrRd"
    },
    {
        "var": "prob_gt_1inch_percent",
        "id": "prob_gt_1inch",
        "label": "Probability > 1 inch",
        "units": "%",
        "levels": [0, 1, 2, 5, 10, 20, 30, 40, 50, 70, 90, 100],
        "cmap": "YlOrRd"
    },
    {
        "var": "prob_gt_2inch_percent",
        "id": "prob_gt_2inch",
        "label": "Probability > 2 inch",
        "units": "%",
        "levels": [0, 0.5, 1, 2, 5, 10, 15, 20, 30, 40, 60],
        "cmap": "YlOrRd"
    },
    {
        "var": "prob_gt_2yr12h_ari_percent",
        "id": "prob_gt_2yr12h_ari",
        "label": "Probability > 2-year 12-h ARI",
        "units": "%",
        "levels": [0, 0.5, 1, 2, 5, 10, 15, 20, 30, 40, 60],
        "cmap": "PuRd"
    },
    {
        "var": "prob_gt_5yr12h_ari_percent",
        "id": "prob_gt_5yr12h_ari",
        "label": "Probability > 5-year 12-h ARI",
        "units": "%",
        "levels": [0, 0.25, 0.5, 1, 2, 5, 10, 15, 20, 30, 40],
        "cmap": "PuRd"
    }
]

STATE_BOUNDS = {
    "GA": {"label": "Georgia", "bounds": [[30.30, -85.70], [35.10, -80.70]]},
    "MA": {"label": "Massachusetts", "bounds": [[41.20, -73.60], [42.95, -69.80]]},
    "TX": {"label": "Texas", "bounds": [[25.80, -106.70], [36.60, -93.50]]},
    "MO": {"label": "Missouri", "bounds": [[35.90, -95.80], [40.70, -89.00]]},
    "CA": {"label": "California", "bounds": [[32.30, -124.60], [42.10, -114.00]]},
    "FL": {"label": "Florida", "bounds": [[24.40, -87.80], [31.10, -79.80]]},
    "NJ": {"label": "New Jersey", "bounds": [[38.90, -75.60], [41.40, -73.80]]},
    "PA": {"label": "Pennsylvania", "bounds": [[39.60, -80.60], [42.30, -74.60]]},
    "WA": {"label": "Washington", "bounds": [[45.50, -124.90], [49.10, -116.80]]}
}


def safe_time(v):
    return pd.to_datetime(v).strftime("%Y-%m-%d %H:%M UTC")


def crop_indices(lat, lon, bounds):
    south, west = bounds[0]
    north, east = bounds[1]

    ilats = np.where((lat >= south) & (lat <= north))[0]
    ilons = np.where((lon >= west) & (lon <= east))[0]

    if len(ilats) == 0 or len(ilons) == 0:
        raise RuntimeError(f"No grid points inside bounds {bounds}")

    return ilats, ilons


def draw_frame(data, lat_crop, lon_crop, product, state_label, city_points, valid_time, lead_hour, out_png):
    levels = product["levels"]
    cmap = plt.get_cmap(product["cmap"])
    norm = BoundaryNorm(levels, cmap.N, clip=True)

    fig, ax = plt.subplots(figsize=(7.8, 6.0), dpi=120)

    mesh = ax.pcolormesh(
        lon_crop,
        lat_crop,
        data,
        cmap=cmap,
        norm=norm,
        shading="auto"
    )

    cbar = fig.colorbar(mesh, ax=ax, shrink=0.86, pad=0.02)
    cbar.set_label(product["units"])

    for city in city_points:
        ax.scatter(
            float(city["lon"]),
            float(city["lat"]),
            s=48,
            marker="o",
            edgecolor="black",
            linewidth=0.8,
            facecolor="white",
            zorder=4
        )
        ax.text(
            float(city["lon"]) + 0.12,
            float(city["lat"]) + 0.10,
            city["display_name"].split("/")[0].strip(),
            fontsize=7,
            weight="bold",
            zorder=5
        )

    ax.set_title(
        f"ANN-CSGD Model | {state_label}\n"
        f"{product['label']} | Lead {int(lead_hour)} h | Valid {valid_time}",
        fontsize=11,
        weight="bold"
    )

    ax.set_xlabel("Longitude")
    ax.set_ylabel("Latitude")
    ax.grid(True, linewidth=0.35, alpha=0.45)

    markets = ", ".join([c["display_name"] for c in city_points])

    ax.text(
        0.01,
        0.01,
        f"INIT {INIT} | Host market(s): {markets}",
        transform=ax.transAxes,
        fontsize=7.5,
        color="#334155",
        bbox=dict(facecolor="white", alpha=0.75, edgecolor="none", boxstyle="round,pad=0.25")
    )

    fig.tight_layout()
    fig.savefig(out_png, bbox_inches="tight")
    plt.close(fig)


print(f"[PY] Opening {NC12}")
ds = xr.open_dataset(NC12)

lat = np.asarray(ds["lat"].values, dtype=float)
lon = np.asarray(ds["lon"].values, dtype=float)
valid_times = list(ds["valid_time"].values)
lead_hours = np.asarray(ds["lead_hours"].values).astype(int)

with open(CITY_JSON) as f:
    city_meta = json.load(f)

cities = city_meta["cities"]

states = {}

for city in cities:
    st = city["state"]
    if st not in STATE_BOUNDS:
        continue

    states.setdefault(st, {
        "state": st,
        "label": STATE_BOUNDS[st]["label"],
        "bounds": STATE_BOUNDS[st]["bounds"],
        "cities": []
    })

    states[st]["cities"].append(city)

print("[PY] Host states:", ", ".join(sorted(states)))

if OUTROOT.exists():
    shutil.rmtree(OUTROOT)

OUTROOT.mkdir(parents=True, exist_ok=True)

total_gifs = 0
total_preview_pngs = 0

for st in sorted(states):
    info = states[st]
    state_label = info["label"]
    bounds = info["bounds"]
    state_dir = OUTROOT / st
    state_dir.mkdir(parents=True, exist_ok=True)

    ilats, ilons = crop_indices(lat, lon, bounds)
    lat_crop = lat[ilats]
    lon_crop = lon[ilons]

    print(f"[PY] State {st} / {state_label}: lat_n={len(ilats)} lon_n={len(ilons)} markets={[c['display_name'] for c in info['cities']]}")

    for product in PRODUCTS:
        var = product["var"]

        if var not in ds:
            print(f"[WARN] Missing variable {var}; skipping.")
            continue

        product_dir = state_dir / product["id"]
        frame_dir = product_dir / "_tmp_frames"
        preview_dir = product_dir / "preview_frames"

        product_dir.mkdir(parents=True, exist_ok=True)
        frame_dir.mkdir(parents=True, exist_ok=True)
        preview_dir.mkdir(parents=True, exist_ok=True)

        frame_paths = []

        for rec in range(ds.sizes["record"]):
            arr = np.asarray(ds[var].isel(record=rec).values, dtype=float)
            crop = arr[np.ix_(ilats, ilons)]

            valid_time = safe_time(valid_times[rec])
            lead_hour = int(lead_hours[rec])

            png = frame_dir / f"{INIT}_{st}_{product['id']}_lead{lead_hour:03d}.png"

            draw_frame(
                crop,
                lat_crop,
                lon_crop,
                product,
                state_label,
                info["cities"],
                valid_time,
                lead_hour,
                png
            )

            frame_paths.append(png)

        gif_path = product_dir / f"{INIT}_{st}_{product['id']}_state_crop.gif"

        images = []
        for png in frame_paths:
            images.append(Image.open(png).convert("P", palette=Image.ADAPTIVE))

        images[0].save(
            gif_path,
            save_all=True,
            append_images=images[1:],
            duration=450,
            loop=0,
            optimize=True
        )

        keep = [frame_paths[0], frame_paths[len(frame_paths)//2], frame_paths[-1]]

        for png in keep:
            shutil.copy2(png, preview_dir / png.name)
            total_preview_pngs += 1

        shutil.rmtree(frame_dir)

        total_gifs += 1

        print(f"[PY]   wrote {gif_path.relative_to(LOCAL_REPO)}")

print("[PY] Total state-cropped GIFs:", total_gifs)
print("[PY] Total preview PNGs:", total_preview_pngs)
print("[PY] Done.")
