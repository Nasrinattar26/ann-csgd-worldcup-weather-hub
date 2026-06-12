#!/usr/bin/env python
import json
import os
from datetime import datetime
from pathlib import Path

INIT = os.environ.get("INIT", "unknown")

repo = Path(".").resolve()
products_root = repo / "products"
data_dir = repo / "data"

manifest_json = data_dir / "product_manifest.json"
manifest_js = data_dir / "product_manifest.js"

def kind_for_file(p):
    name = p.name.lower()

    if name.endswith(".tar.gz") or name.endswith(".tgz"):
        return "archive"

    suffix = p.suffix.lower()

    if suffix == ".gif":
        return "gif"

    if suffix in [".png", ".jpg", ".jpeg", ".webp"]:
        return "image"

    if suffix in [".geojson", ".json"]:
        return "geojson_or_json"

    if suffix in [".grib2", ".grb2"]:
        return "grib2"

    if suffix in [".txt", ".csv", ".md"]:
        return "text"

    return "other"

files = []

for p in sorted(products_root.rglob("*")):
    if not p.is_file():
        continue

    rel_app = p.relative_to(repo).as_posix()
    rel_products = p.relative_to(products_root)
    parts = rel_products.parts
    category = parts[0] if parts else "products"

    st = p.stat()

    files.append({
        "path": rel_app,
        "name": p.name,
        "category": category,
        "kind": kind_for_file(p),
        "size_bytes": int(st.st_size),
        "size_mb": round(st.st_size / 1024 / 1024, 3),
        "modified_utc": datetime.utcfromtimestamp(st.st_mtime).strftime("%Y-%m-%d %H:%M UTC")
    })

counts_by_category = {}
counts_by_kind = {}

for f in files:
    counts_by_category[f["category"]] = counts_by_category.get(f["category"], 0) + 1
    counts_by_kind[f["kind"]] = counts_by_kind.get(f["kind"], 0) + 1

manifest = {
    "init": INIT,
    "created_utc": datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
    "products_root": "products",
    "n_files": len(files),
    "counts_by_category": counts_by_category,
    "counts_by_kind": counts_by_kind,
    "files": files,
    "note": "Manifest generated from copied ANN12-v4 website products. Large files >95 MB are excluded before GitHub commit."
}

data_dir.mkdir(parents=True, exist_ok=True)

with open(manifest_json, "w") as f:
    json.dump(manifest, f, indent=2)

with open(manifest_js, "w") as f:
    f.write("window.WC_PRODUCT_MANIFEST = ")
    json.dump(manifest, f, indent=2)
    f.write(";\n")

print("Wrote:", manifest_json)
print("Wrote:", manifest_js)
print("n_files:", len(files))
print("counts_by_category:")
for k in sorted(counts_by_category):
    print(f"  {k}: {counts_by_category[k]}")
print("counts_by_kind:")
for k in sorted(counts_by_kind):
    print(f"  {k}: {counts_by_kind[k]}")
