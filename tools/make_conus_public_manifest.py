#!/usr/bin/env python
import json
import os
from datetime import datetime
from pathlib import Path

INIT = os.environ.get("INIT", "unknown")

repo = Path(".").resolve()
products_root = repo / "products"
data_dir = repo / "data"

CATEGORY_LABELS = {
    "conus_gifs": "CONUS ANN-CSGD GIFs",
    "conus_ero_2x2": "CONUS ERO comparison plots",
    "grib2": "ANN-CSGD GRIB2 downloads"
}

PRODUCT_ORDER = [
    "prob_gt_0p5inch",
    "prob_gt_1inch",
    "prob_gt_2inch",
    "prob_gt_2yr",
    "prob_gt_5yr"
]

def kind_for_file(p):
    name = p.name.lower()
    suffix = p.suffix.lower()

    if name.endswith(".tar.gz") or name.endswith(".tgz"):
        return "archive"
    if suffix == ".gif":
        return "gif"
    if suffix in [".png", ".jpg", ".jpeg", ".webp"]:
        return "image"
    if suffix in [".grib2", ".grb2"]:
        return "grib2"
    if suffix in [".json", ".csv", ".txt", ".md"]:
        return "text"
    return "other"

def infer_product(name):
    low = name.lower()

    if "expected" in low:
        return "excluded_expected_precip"

    if "0p5inch" in low or "0.5" in low or "12p7" in low:
        return "prob_gt_0p5inch"

    if "1inch" in low or "25p4" in low:
        return "prob_gt_1inch"

    if "2inch" in low or "50p8" in low:
        return "prob_gt_2inch"

    if "2yr" in low:
        return "prob_gt_2yr"

    if "5yr" in low:
        return "prob_gt_5yr"

    return "support_file"

def product_label(pid):
    return {
        "prob_gt_0p5inch": "Probability > 0.5 inch",
        "prob_gt_1inch": "Probability > 1 inch",
        "prob_gt_2inch": "Probability > 2 inch",
        "prob_gt_2yr": "Probability > 2-year ARI",
        "prob_gt_5yr": "Probability > 5-year ARI",
        "support_file": "Supporting file"
    }.get(pid, pid)

files = []

for p in sorted(products_root.rglob("*")):
    if not p.is_file():
        continue

    rel_products = p.relative_to(products_root)
    parts = rel_products.parts
    if not parts:
        continue

    category = parts[0]
    if category not in CATEGORY_LABELS:
        continue

    product_id = infer_product(p.name)

    if product_id == "excluded_expected_precip":
        continue

    st = p.stat()

    files.append({
        "path": p.relative_to(repo).as_posix(),
        "name": p.name,
        "category": category,
        "category_label": CATEGORY_LABELS[category],
        "product_id": product_id,
        "product_label": product_label(product_id),
        "domain": "CONUS",
        "kind": kind_for_file(p),
        "size_bytes": int(st.st_size),
        "size_mb": round(st.st_size / 1024 / 1024, 3),
        "modified_utc": datetime.utcfromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M UTC")
    })

def sort_key(f):
    cat_rank = {"conus_gifs": 0, "conus_ero_2x2": 1, "grib2": 2}.get(f["category"], 9)
    try:
        prod_rank = PRODUCT_ORDER.index(f["product_id"])
    except ValueError:
        prod_rank = 99
    return (cat_rank, prod_rank, f["name"])

files = sorted(files, key=sort_key)

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
    "domain": "CONUS",
    "n_files": len(files),
    "allowed_categories": CATEGORY_LABELS,
    "allowed_products": {
        "prob_gt_0p5inch": "Probability > 0.5 inch",
        "prob_gt_1inch": "Probability > 1 inch",
        "prob_gt_2inch": "Probability > 2 inch",
        "prob_gt_2yr": "Probability > 2-year ARI",
        "prob_gt_5yr": "Probability > 5-year ARI"
    },
    "excluded_public_product": "expected_precip",
    "counts_by_category": counts_by_category,
    "counts_by_product": counts_by_product,
    "counts_by_kind": counts_by_kind,
    "files": files,
    "note": "Curated public gallery: CONUS ANN-CSGD GIFs, CONUS ERO comparison plots, and ANN-CSGD GRIB2 downloads. Expected precipitation is excluded from public plots."
}

data_dir.mkdir(parents=True, exist_ok=True)

(data_dir / "product_manifest.json").write_text(json.dumps(manifest, indent=2))
(data_dir / "product_manifest.js").write_text(
    "window.WC_PRODUCT_MANIFEST = " + json.dumps(manifest, indent=2) + ";\n"
)

print("n_files:", len(files))
print("counts_by_category:")
for k, v in sorted(counts_by_category.items()):
    print(f"  {k}: {v}")
print("counts_by_product:")
for k, v in sorted(counts_by_product.items()):
    print(f"  {k}: {v}")
