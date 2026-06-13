#!/usr/bin/env python
import json
import os
from datetime import datetime
from pathlib import Path

INIT = os.environ["INIT"]

repo = Path(".").resolve()
products_root = repo / "products"
data_dir = repo / "data"

CATEGORY_LABELS = {
    "conus_gifs": "Forecast animations",
    "conus_ero_2x2": "Forecast comparison maps",
    "grib2": "Downloadable forecast data"
}

PRODUCT_LABELS = {
    "prob_gt_0p5inch": "Chance of 0.5+ inch rainfall",
    "prob_gt_1inch": "Chance of 1+ inch rainfall",
    "prob_gt_2inch": "Chance of 2+ inch rainfall",
    "prob_gt_2yr": "Chance of exceeding a 2-year rainfall threshold",
    "prob_gt_5yr": "Chance of exceeding a 5-year rainfall threshold"
}

def kind_for_file(p):
    suffix = p.suffix.lower()
    if suffix == ".gif":
        return "gif"
    if suffix in [".png", ".jpg", ".jpeg", ".webp"]:
        return "image"
    if suffix in [".grib2", ".grb2"]:
        return "grib2"
    return "other"

def infer_product(name):
    low = name.lower()
    if "expected" in low:
        return None
    if "0p5inch" in low or "0.5" in low:
        return "prob_gt_0p5inch"
    if "1inch" in low:
        return "prob_gt_1inch"
    if "2inch" in low:
        return "prob_gt_2inch"
    if "2yr" in low:
        return "prob_gt_2yr"
    if "5yr" in low:
        return "prob_gt_5yr"
    return None

def display_name(category, product_id):
    label = PRODUCT_LABELS.get(product_id, "Forecast product")
    if category == "conus_gifs":
        return f"{label} animation"
    if category == "conus_ero_2x2":
        return f"{label} comparison map"
    if category == "grib2":
        return f"{label} forecast data"
    return label

files = []

for p in sorted(products_root.rglob("*")):
    if not p.is_file():
        continue

    rel = p.relative_to(products_root)
    parts = rel.parts
    if not parts:
        continue

    category = parts[0]
    if category not in CATEGORY_LABELS:
        continue

    product_id = infer_product(p.name)
    if not product_id:
        continue

    kind = kind_for_file(p)
    if category == "conus_gifs" and kind != "gif":
        continue
    if category == "conus_ero_2x2" and kind != "image":
        continue
    if category == "grib2" and kind != "grib2":
        continue

    st = p.stat()

    files.append({
        "path": p.relative_to(repo).as_posix(),
        "name": p.name,
        "display_name": display_name(category, product_id),
        "category": category,
        "category_label": CATEGORY_LABELS[category],
        "product_id": product_id,
        "product_label": PRODUCT_LABELS[product_id],
        "domain": "CONUS",
        "kind": kind,
        "size_bytes": int(st.st_size),
        "size_mb": round(st.st_size / 1024 / 1024, 3),
        "modified_utc": datetime.utcfromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M UTC")
    })

order_cat = {"conus_gifs": 0, "conus_ero_2x2": 1, "grib2": 2}
order_prod = {
    "prob_gt_0p5inch": 0,
    "prob_gt_1inch": 1,
    "prob_gt_2inch": 2,
    "prob_gt_2yr": 3,
    "prob_gt_5yr": 4
}

files = sorted(files, key=lambda f: (order_cat.get(f["category"], 9), order_prod.get(f["product_id"], 9), f["name"]))

counts_by_category = {}
counts_by_product = {}
counts_by_kind = {}

for f in files:
    counts_by_category[f["category"]] = counts_by_category.get(f["category"], 0) + 1
    counts_by_product[f["product_id"]] = counts_by_product.get(f["product_id"], 0) + 1
    counts_by_kind[f["kind"]] = counts_by_kind.get(f["kind"], 0) + 1

manifest = {
    "init": INIT,
    "created_utc": datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
    "products_root": "products",
    "public_title": "Forecast Products and Downloads",
    "n_files": len(files),
    "allowed_categories": CATEGORY_LABELS,
    "allowed_products": PRODUCT_LABELS,
    "counts_by_category": counts_by_category,
    "counts_by_product": counts_by_product,
    "counts_by_kind": counts_by_kind,
    "files": files,
    "note": "Public-facing gallery with forecast animations, comparison maps, and individual GRIB2 forecast data files only."
}

data_dir.mkdir(parents=True, exist_ok=True)

(data_dir / "product_manifest.json").write_text(json.dumps(manifest, indent=2))
(data_dir / "product_manifest.js").write_text(
    "window.WC_PRODUCT_MANIFEST = " + json.dumps(manifest, indent=2) + ";\n"
)

print("n_files:", len(files))
print("counts_by_category:", counts_by_category)
print("counts_by_product:", counts_by_product)
