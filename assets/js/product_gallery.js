(function () {
  let initialized = false;

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

  function humanCategory(category) {
    const labels = {
      conus_gifs: "Forecast animations",
      conus_ero_2x2: "Forecast comparison maps",
      grib2: "Downloadable forecast data"
    };
    return labels[category] || category || "Unknown";
  }

  function isVisual(kind) {
    return kind === "image" || kind === "gif";
  }

  function getManifest() {
    return window.WC_PRODUCT_MANIFEST || {
      init: "unknown",
      n_files: 0,
      counts_by_category: {},
      counts_by_kind: {},
      files: []
    };
  }

  function setupGalleryCategorySelect() {
    const manifest = getManifest();
    const select = document.getElementById("gallery-category");

    if (!select) {
      console.warn("[ProductGallery] gallery-category select not found.");
      return;
    }

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
    const manifest = getManifest();

    const gallery = document.getElementById("product-gallery");
    const summary = document.getElementById("gallery-summary");
    const categorySelect = document.getElementById("gallery-category");
    const searchInput = document.getElementById("gallery-search");

    if (!gallery) {
      console.warn("[ProductGallery] product-gallery container not found.");
      return;
    }

    const category = categorySelect ? categorySelect.value : "all";
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    let files = manifest.files || [];

    if (category && category !== "all") {
      files = files.filter(f => f.category === category);
    }

    if (query) {
      files = files.filter(f =>
        String(f.name || "").toLowerCase().includes(query) ||
        String(f.path || "").toLowerCase().includes(query) ||
        String(f.kind || "").toLowerCase().includes(query) ||
        String(f.category || "").toLowerCase().includes(query)
      );
    }

    const maxShow = 180;
    const shown = files.slice(0, maxShow);

    if (summary) {
      if (!manifest.files || !manifest.files.length) {
        summary.textContent = "No product files are available in the manifest yet.";
      } else {
        summary.textContent =
          `Manifest INIT ${manifest.init}: showing ${shown.length} of ${files.length} matching files. Total files: ${manifest.n_files}.`;
      }
    }

    gallery.innerHTML = "";

    if (!shown.length) {
      gallery.innerHTML = `
        <div class="empty-gallery-card">
          <h3>Product gallery is ready, but no matching files are selected</h3>
          <p>
            Try selecting “All products” or clearing the search box. If this message appears with
            an empty manifest, the product manifest did not load correctly.
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
            <img src="${escapeHtml(f.path)}" alt="${escapeHtml(f.display_name || f.product_label || f.name)}">
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
            ${escapeHtml(f.display_name || f.product_label || f.name)}
          </a>
          <div class="product-meta">
            <span>${escapeHtml(f.category_label || humanCategory(f.category))}</span>
            <span>${escapeHtml(f.size_mb)} MB</span>
          </div>
        </div>
      `;

      gallery.appendChild(card);
    }
  }

  function attachListeners() {
    const categorySelect = document.getElementById("gallery-category");
    const searchInput = document.getElementById("gallery-search");

    if (categorySelect && !categorySelect.dataset.galleryListenerAttached) {
      categorySelect.addEventListener("change", renderGallery);
      categorySelect.dataset.galleryListenerAttached = "true";
    }

    if (searchInput && !searchInput.dataset.galleryListenerAttached) {
      searchInput.addEventListener("input", renderGallery);
      searchInput.dataset.galleryListenerAttached = "true";
    }
  }

  window.initProductGallery = function () {
    const manifest = getManifest();

    console.log("[ProductGallery] Initializing. Files:", manifest.n_files);

    setupGalleryCategorySelect();
    attachListeners();
    renderGallery();

    initialized = true;
  };

  function autoInit() {
    if (initialized) return;

    const gallery = document.getElementById("product-gallery");
    const manifest = window.WC_PRODUCT_MANIFEST;

    if (gallery && manifest) {
      window.initProductGallery();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }
})();
