#!/usr/bin/env python
import json
import os
from datetime import datetime
from pathlib import Path

INIT = os.environ.get("INIT", "unknown")

repo = Path(".").resolve()
products_root = repo / "products"
data_dir = repo / "data"

ALLOWED = {
    "state_gifs": "State-cropped ANN-CSGD GIFs",
    "rt7_ero_2x2": "ERO 2×2 comparison plots",
    "grib2": "GRIB2 downloads"
}

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
    "ALL": "All states / CONUS",
    "UNKNOWN": "Unknown"
}

STATE_KEYWORDS = {
    "georgia": "GA", "atlanta": "GA", "_ga_": "GA", "/ga/": "GA",
    "massachusetts": "MA", "boston": "MA", "foxborough": "MA", "_ma_": "MA", "/ma/": "MA",
    "texas": "TX", "dallas": "TX", "arlington": "TX", "houston": "TX", "_tx_": "TX", "/tx/": "TX",
    "missouri": "MO", "kansas_city": "MO", "_mo_": "MO", "/mo/": "MO",
    "california": "CA", "los_angeles": "CA", "inglewood": "CA", "san_francisco": "CA", "santa_clara": "CA", "_ca_": "CA", "/ca/": "CA",
    "florida": "FL", "miami": "FL", "_fl_": "FL", "/fl/": "FL",
    "new_jersey": "NJ", "new_york": "NJ", "_nj_": "NJ", "/nj/": "NJ",
    "pennsylvania": "PA", "philadelphia": "PA", "_pa_": "PA", "/pa/": "PA",
    "washington": "WA", "seattle": "WA", "_wa_": "WA", "/wa/": "WA"
}

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
    if suffix in [".json", ".geojson"]:
        return "json"
    if suffix in [".txt", ".csv", ".md"]:
        return "text"
    return "other"

def infer_state(rel_parts, filename):
    if len(rel_parts) >= 2 and rel_parts[0] == "state_gifs":
        code = rel_parts[1].upper()
        if code in STATE_LABELS:
            return code

    if rel_parts and rel_parts[0] == "grib2":
        return "ALL"

    text = "/" + "/".join(rel_parts).lower() + "/" + filename.lower()

    for key, code in STATE_KEYWORDS.items():
        if key in text:
            return code

    return "UNKNOWN"

files = []

for p in sorted(products_root.rglob("*")):
    if not p.is_file():
        continue

    rel_products = p.relative_to(products_root)
    parts = rel_products.parts

    if not parts:
        continue

    top = parts[0]
    if top not in ALLOWED:
        continue

    kind = kind_for_file(p)

    if top == "state_gifs" and kind not in ["gif", "image"]:
        continue

    if top == "rt7_ero_2x2" and kind != "image":
        continue

    if top == "grib2" and kind not in ["grib2", "archive", "json", "text"]:
        continue

    st = p.stat()
    state = infer_state(parts, p.name)

    files.append({
        "path": p.relative_to(repo).as_posix(),
        "name": p.name,
        "category": top,
        "category_label": ALLOWED[top],
        "state": state,
        "state_label": STATE_LABELS.get(state, state),
        "kind": kind,
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
    "allowed_categories": ALLOWED,
    "state_labels": STATE_LABELS,
    "counts_by_category": counts_by_category,
    "counts_by_state": counts_by_state,
    "counts_by_kind": counts_by_kind,
    "files": files,
    "note": "Clean public gallery: state-cropped ANN-CSGD GIFs, ERO 2x2 comparison plots, and GRIB2 downloads only."
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
print("counts_by_state:")
for k, v in sorted(counts_by_state.items()):
    print(f"  {k}: {STATE_LABELS.get(k, k)} = {v}")
