(function () {
  function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[c];
    });
  }

  function isVisual(kind) {
    return kind === "image" || kind === "gif";
  }

  function humanCategory(category) {
    const labels = {
      gifs: "GIF products",
      rt6_quicklooks_full: "RT6 full-domain quicklooks",
      rt6_quicklooks_ero: "RT6 ERO quicklooks",
      rt7_ero_2x2: "RT7 2×2 ERO comparison plots",
      ero_geojson: "Clean ERO GeoJSON",
      grib2: "GRIB2 products"
    };
    return labels[category] || category;
  }

  function setupGalleryCategorySelect() {
    const manifest = window.WC_PRODUCT_MANIFEST || { files: [], counts_by_category: {} };
    const select = document.getElementById("gallery-category");

    if (!select) return;

    select.innerHTML = "";

    const all = document.createElement("option");
    all.value = "all";
    all.textContent = `All products (${manifest.n_files || 0})`;
    select.appendChild(all);

    const categories = Object.keys(manifest.counts_by_category || {}).sort();

    for (const category of categories) {
      const opt = document.createElement("option");
      opt.value = category;
      opt.textContent = `${humanCategory(category)} (${manifest.counts_by_category[category]})`;
      select.appendChild(opt);
    }
  }

  function renderGallery() {
    const manifest = window.WC_PRODUCT_MANIFEST || { files: [] };
    const gallery = document.getElementById("product-gallery");
    const summary = document.getElementById("gallery-summary");
    const categorySelect = document.getElementById("gallery-category");
    const searchInput = document.getElementById("gallery-search");

    if (!gallery) return;

    const category = categorySelect ? categorySelect.value : "all";
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    let files = manifest.files || [];

    if (category !== "all") {
      files = files.filter(f => f.category === category);
    }

    if (query) {
      files = files.filter(f =>
        String(f.name).toLowerCase().includes(query) ||
        String(f.path).toLowerCase().includes(query) ||
        String(f.kind).toLowerCase().includes(query)
      );
    }

    const maxShow = 180;
    const shown = files.slice(0, maxShow);

    if (summary) {
      if (!files.length) {
        summary.textContent = "No product files are in the manifest yet. The next step will copy ANN12-v4 products into the GitHub site.";
      } else {
        summary.textContent = `Showing ${shown.length} of ${files.length} matching product files.`;
      }
    }

    gallery.innerHTML = "";

    if (!shown.length) {
      gallery.innerHTML = `
        <div class="empty-gallery-card">
          <h3>Product gallery is ready</h3>
          <p>
            No product files have been copied yet. Next, we will populate this section with
            GIFs, RT6 quicklooks, RT7 2×2 plots, ERO GeoJSON, and safe GRIB2 links/manifests.
          </p>
        </div>
      `;
      return;
    }

    for (const f of shown) {
      const card = document.createElement("div");
      card.className = "product-card";

      let preview = "";
      if (isVisual(f.kind)) {
        preview = `
          <a href="${escapeHtml(f.path)}" target="_blank" rel="noopener">
            <img src="${escapeHtml(f.path)}" alt="${escapeHtml(f.name)}">
          </a>
        `;
      } else {
        preview = `
          <div class="file-preview">
            <div class="file-kind">${escapeHtml(f.kind)}</div>
          </div>
        `;
      }

      card.innerHTML = `
        ${preview}
        <div class="product-card-body">
          <a class="product-name" href="${escapeHtml(f.path)}" target="_blank" rel="noopener">
            ${escapeHtml(f.name)}
          </a>
          <div class="product-meta">
            <span>${escapeHtml(humanCategory(f.category))}</span>
            <span>${escapeHtml(f.size_mb)} MB</span>
          </div>
        </div>
      `;

      gallery.appendChild(card);
    }
  }

  window.initProductGallery = function () {
    setupGalleryCategorySelect();
    renderGallery();

    const categorySelect = document.getElementById("gallery-category");
    const searchInput = document.getElementById("gallery-search");

    if (categorySelect) {
      categorySelect.addEventListener("change", renderGallery);
    }

    if (searchInput) {
      searchInput.addEventListener("input", renderGallery);
    }
  };
})();
