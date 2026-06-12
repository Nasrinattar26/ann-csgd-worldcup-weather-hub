#!/usr/bin/env python
import json
import os
import re
from datetime import datetime
from pathlib import Path

INIT = os.environ.get("INIT", "unknown")
repo = Path(".").resolve()
products_root = repo / "products"
data_dir = repo / "data"

STATE_LABELS = {
    "GA": "Georgia",
    "MA": "Massachusetts",
    "TX": "Texas",
    "MO": "Missouri",
    "CA": "California",
    "FL": "Florida",
    "NJ": "New Jersey",
    "PA": "Pennsylvania",
    "WA": "Washington",
    "ALL": "All states / national product",
    "UNKNOWN": "Unknown state"
}

STATE_NAME_TO_CODE = {
    "georgia": "GA",
    "massachusetts": "MA",
    "texas": "TX",
    "missouri": "MO",
    "california": "CA",
    "florida": "FL",
    "new_jersey": "NJ",
    "newjersey": "NJ",
    "pennsylvania": "PA",
    "washington": "WA",
    "atlanta": "GA",
    "boston": "MA",
    "foxborough": "MA",
    "dallas": "TX",
    "arlington": "TX",
    "houston": "TX",
    "kansas_city": "MO",
    "los_angeles": "CA",
    "inglewood": "CA",
    "san_francisco": "CA",
    "santa_clara": "CA",
    "miami": "FL",
    "miami_gardens": "FL",
    "new_york": "NJ",
    "philadelphia": "PA",
    "seattle": "WA"
}

ALLOWED_TOP_DIRS = {
    "state_gifs": "state_gifs",
    "rt7_ero_2x2": "ero_2x2",
    "grib2": "grib2"
}

CATEGORY_LABELS = {
    "state_gifs": "State-cropped ANN-CSGD GIFs",
    "ero_2x2": "ERO 2×2 comparison plots",
    "grib2": "GRIB2 downloads"
}


def file_kind(p: Path):
    name = p.name.lower()
    if name.endswith(".tar.gz") or name.endswith(".tgz"):
        return "archive"
    if p.suffix.lower() == ".gif":
        return "gif"
    if p.suffix.lower() in [".png", ".jpg", ".jpeg", ".webp"]:
        return "image"
    if p.suffix.lower() in [".grib2", ".grb2"]:
        return "grib2"
    if p.suffix.lower() in [".json", ".geojson"]:
        return "json"
    if p.suffix.lower() in [".txt", ".csv", ".md"]:
        return "text"
    return "other"


def infer_state(rel_parts, filename):
    # products/state_gifs/TX/...
    if rel_parts and rel_parts[0] == "state_gifs" and len(rel_parts) > 1:
        maybe = rel_parts[1].upper()
        if maybe in STATE_LABELS:
            return maybe

    text = "_".join(rel_parts).lower() + "_" + filename.lower()

    for token, code in STATE_NAME_TO_CODE.items():
        if token in text:
            return code

    # GRIB2 is a national/grid product, not a state-specific image.
    if rel_parts and rel_parts[0] == "grib2":
        return "ALL"

    return "UNKNOWN"


def include_file(p: Path):
    rel = p.relative_to(products_root)
    parts = rel.parts
    if not parts:
        return False

    top = parts[0]
    if top not in ALLOWED_TOP_DIRS:
        return False

    kind = file_kind(p)

    if top == "state_gifs":
        return kind in ["gif", "image"]

    if top == "rt7_ero_2x2":
        return kind == "image"

    if top == "grib2":
        return kind in ["grib2", "archive", "json", "text"]

    return False


files = []

for p in sorted(products_root.rglob("*")):
    if not p.is_file():
        continue

    if not include_file(p):
        continue

    rel_app = p.relative_to(repo).as_posix()
    rel_products = p.relative_to(products_root)
    parts = rel_products.parts
    top = parts[0]

    category = ALLOWED_TOP_DIRS[top]
    state_code = infer_state(parts, p.name)

    st = p.stat()

    files.append({
        "path": rel_app,
        "name": p.name,
        "category": category,
        "category_label": CATEGORY_LABELS[category],
        "state": state_code,
        "state_label": STATE_LABELS.get(state_code, state_code),
        "kind": file_kind(p),
        "size_bytes": int(st.st_size),
        "size_mb": round(st.st_size / 1024 / 1024, 3),
        "modified_utc": datetime.utcfromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M UTC")
    })

counts_by_category = {}
counts_by_state = {}
counts_by_kind = {}

for f in files:
    counts_by_category[f["category"]] = counts_by_category.get(f["category"], 0) + 1
    counts_by_state[f["state"]] = counts_by_state.get(f["state"], 0) + 1
    counts_by_kind[f["kind"]] = counts_by_kind.get(f["kind"], 0) + 1

manifest = {
    "init": INIT,
    "created_utc": datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
    "products_root": "products",
    "n_files": len(files),
    "allowed_categories": CATEGORY_LABELS,
    "state_labels": STATE_LABELS,
    "counts_by_category": counts_by_category,
    "counts_by_state": counts_by_state,
    "counts_by_kind": counts_by_kind,
    "files": files,
    "note": "Clean public gallery manifest: only state-cropped GIFs, ERO 2x2 comparison plots, and GRIB2 products are included."
}

data_dir.mkdir(parents=True, exist_ok=True)

with open(data_dir / "product_manifest.json", "w") as f:
    json.dump(manifest, f, indent=2)

with open(data_dir / "product_manifest.js", "w") as f:
    f.write("window.WC_PRODUCT_MANIFEST = ")
    json.dump(manifest, f, indent=2)
    f.write(";\n")

print("Wrote data/product_manifest.json")
print("Wrote data/product_manifest.js")
print("n_files:", len(files))
print("counts_by_category:")
for k in sorted(counts_by_category):
    print(" ", k, counts_by_category[k])
print("counts_by_state:")
for k in sorted(counts_by_state):
    print(" ", k, STATE_LABELS.get(k, k), counts_by_state[k])
