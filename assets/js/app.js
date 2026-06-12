(function () {
  const CITY_META = window.WC_CITIES;
  const APP_DATA = window.WC_APP_DATA;

  const cities = (APP_DATA && APP_DATA.cities) || (CITY_META && CITY_META.cities) || [];
  const products = (APP_DATA && APP_DATA.products) || [];

  let map = null;
  let markers = {};
  let selectedCityId = cities.length ? cities[0].id : null;
  let selectedProductId = products.length ? products[0].id : null;
  let selectedCityPayload = null;

  const citySelect = document.getElementById("city-select");
  const selectedCard = document.getElementById("selected-city-card");
  const cityGrid = document.getElementById("city-grid");

  function cityById(id) {
    return cities.find(c => c.id === id) || cities[0];
  }

  function productById(id) {
    return products.find(p => p.id === id) || products[0];
  }

  function fmtCoord(x) {
    return Number(x).toFixed(4);
  }

  function fmtValue(x, units) {
    if (x === null || x === undefined || Number.isNaN(Number(x))) return "NA";

    const v = Number(x);
    let s;

    if (Math.abs(v) >= 100) {
      s = v.toFixed(1);
    } else if (Math.abs(v) >= 10) {
      s = v.toFixed(2);
    } else {
      s = v.toFixed(3);
    }

    return units ? `${s} ${units}` : s;
  }

  function renderCitySelect() {
    citySelect.innerHTML = "";

    cities.forEach(city => {
      const opt = document.createElement("option");
      opt.value = city.id;
      opt.textContent = city.display_name;
      citySelect.appendChild(opt);
    });

    citySelect.value = selectedCityId;

    citySelect.addEventListener("change", () => {
      setSelectedCity(citySelect.value, true);
    });
  }

  function renderSelectedCity() {
    const city = cityById(selectedCityId);

    selectedCard.innerHTML = `
      <strong>${city.display_name}</strong><br>
      ${city.stadium_area}<br>
      State: ${city.state}<br>
      Latitude: ${fmtCoord(city.lat)}<br>
      Longitude: ${fmtCoord(city.lon)}
    `;

    document.getElementById("metric-market").textContent = city.display_name;
    document.getElementById("metric-stadium").textContent = city.stadium_area;
    document.getElementById("metric-coords").textContent = `${fmtCoord(city.lat)}, ${fmtCoord(city.lon)}`;
  }

  function renderCityGrid() {
    cityGrid.innerHTML = "";

    cities.forEach(city => {
      const card = document.createElement("div");
      card.className = "city-card";
      card.dataset.cityId = city.id;

      card.innerHTML = `
        <h3>${city.display_name}</h3>
        <p>${city.stadium_area}</p>
        <p>${fmtCoord(city.lat)}, ${fmtCoord(city.lon)}</p>
      `;

      card.addEventListener("click", () => {
        setSelectedCity(city.id, true);
      });

      cityGrid.appendChild(card);
    });
  }

  function updateCityGridActive() {
    document.querySelectorAll(".city-card").forEach(card => {
      card.classList.toggle("active", card.dataset.cityId === selectedCityId);
    });
  }

  function initMap() {
    document.getElementById("city-count").textContent = `${cities.length} host markets`;

    if (!window.L) {
      document.getElementById("map").innerHTML = "Map library did not load.";
      return;
    }

    map = L.map("map", {
      scrollWheelZoom: true
    }).setView([39.5, -98.35], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    cities.forEach(city => {
      const marker = L.marker([city.lat, city.lon]).addTo(map);

      marker.bindPopup(`
        <strong>${city.display_name}</strong><br>
        ${city.stadium_area}<br>
        ${fmtCoord(city.lat)}, ${fmtCoord(city.lon)}
      `);

      marker.on("click", () => {
        setSelectedCity(city.id, false);
      });

      markers[city.id] = marker;
    });
  }

  function focusMap(cityId) {
    const city = cityById(cityId);

    if (map && city) {
      map.setView([city.lat, city.lon], 7);
      if (markers[cityId]) {
        markers[cityId].openPopup();
      }
    }
  }

  function setupProductButtons() {
    const productList = document.querySelector(".product-list");
    productList.innerHTML = "";

    if (!products.length) {
      productList.innerHTML = "<p class='muted'>No products found in app_data.js.</p>";
      return;
    }

    products.forEach(product => {
      const button = document.createElement("button");
      button.className = "product-button";
      button.dataset.productId = product.id;
      button.textContent = product.units ? `${product.label} [${product.units}]` : product.label;

      button.addEventListener("click", () => {
        setSelectedProduct(product.id);
      });

      productList.appendChild(button);
    });

    updateProductButtonActive();
  }

  function updateProductButtonActive() {
    document.querySelectorAll(".product-button").forEach(button => {
      button.classList.toggle("active", button.dataset.productId === selectedProductId);
    });
  }

  function setSelectedProduct(productId) {
    selectedProductId = productId;
    updateProductButtonActive();
    renderDataPanel();
  }

  async function loadCityPayload(cityId) {
    const city = cityById(cityId);

    selectedCityPayload = null;
    document.getElementById("data-status").textContent = `Loading ${city.display_name} time series...`;

    if (!city.timeseries_json) {
      document.getElementById("data-status").textContent = `No time-series path found for ${city.display_name}.`;
      return;
    }

    try {
      
      const cacheVersion = (APP_DATA && APP_DATA.init) ? `${APP_DATA.init}_real_v1` : Date.now();
      const sep = city.timeseries_json.includes("?") ? "&" : "?";
      const response = await fetch(`${city.timeseries_json}${sep}v=${cacheVersion}`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      selectedCityPayload = await response.json();
      renderDataPanel();

    } catch (err) {
      document.getElementById("data-status").textContent = `Could not load ${city.timeseries_json}: ${err}`;
      renderEmptyDataPanel();
    }
  }

  function getSelectedRecords() {
    if (!selectedCityPayload || !selectedCityPayload.records) return [];

    return selectedCityPayload.records.filter(r => r.product_id === selectedProductId);
  }

  function renderRunInfo() {
    const runBadge = document.getElementById("run-badge");
    const sampleWarning = document.getElementById("sample-warning");

    if (!APP_DATA) {
      runBadge.textContent = "No app_data";
      return;
    }

    runBadge.textContent = `INIT ${APP_DATA.init || "—"}`;

    if (APP_DATA.is_sample_data) {
      sampleWarning.style.display = "block";
    } else {
      sampleWarning.style.display = "none";
    }
  }

  function renderDataPanel() {
    renderRunInfo();

    const city = cityById(selectedCityId);
    const product = productById(selectedProductId);
    const records = getSelectedRecords();

    if (!records.length || !product) {
      renderEmptyDataPanel();
      return;
    }

    document.getElementById("data-status").textContent =
      `${records.length} lead times loaded for ${city.display_name} / ${product.label}.`;

    document.getElementById("chart-title").textContent = `${city.display_name}: ${product.label}`;
    document.getElementById("chart-subtitle").textContent =
      `Nearest grid point and 5×5 grid-cell statistics. Units: ${product.units || "value"}.`;

    renderPeakCards(records, product);
    renderChart(records, product);
    renderTable(records, product);
  }

  function renderEmptyDataPanel() {
    document.getElementById("peak-nearest").textContent = "—";
    document.getElementById("peak-box").textContent = "—";
    document.getElementById("peak-lead").textContent = "—";
    document.getElementById("peak-valid").textContent = "—";
    document.getElementById("chart").innerHTML = "<div class='chart-empty'>No data available.</div>";
    document.querySelector("#timeseries-table tbody").innerHTML = "";
  }

  function renderPeakCards(records, product) {
    const nearestRecords = records.filter(r => r.nearest_value !== null && r.nearest_value !== undefined);
    const boxRecords = records.filter(r => r.box_max !== null && r.box_max !== undefined);

    const nearestPeak = nearestRecords.reduce(
      (best, r) => Number(r.nearest_value) > Number(best.nearest_value) ? r : best,
      nearestRecords[0]
    );

    const boxPeak = boxRecords.reduce(
      (best, r) => Number(r.box_max) > Number(best.box_max) ? r : best,
      boxRecords[0]
    );

    document.getElementById("peak-nearest").textContent = fmtValue(nearestPeak.nearest_value, product.units);
    document.getElementById("peak-box").textContent = fmtValue(boxPeak.box_max, product.units);
    document.getElementById("peak-lead").textContent = `${boxPeak.lead_hour} h`;
    document.getElementById("peak-valid").textContent = boxPeak.valid_time;
  }

  function renderChart(records, product) {
    const chart = document.getElementById("chart");
    const metric = document.getElementById("metric-select").value;

    const points = records
      .filter(r => r[metric] !== null && r[metric] !== undefined && !Number.isNaN(Number(r[metric])))
      .map(r => ({
        x: Number(r.lead_hour),
        y: Number(r[metric]),
        validTime: r.valid_time
      }));

    if (!points.length) {
      chart.innerHTML = "<div class='chart-empty'>No finite values for selected metric.</div>";
      return;
    }

    const w = 920;
    const h = 270;
    const padL = 62;
    const padR = 28;
    const padT = 28;
    const padB = 52;

    const xs = points.map(p => p.x);
    const ys = points.map(p => p.y);

    const xmin = Math.min(...xs);
    const xmax = Math.max(...xs);
    const ymin = Math.min(0, Math.min(...ys));
    const ymaxRaw = Math.max(...ys);
    const ymax = ymaxRaw === ymin ? ymin + 1 : ymaxRaw;

    const sx = x => padL + (x - xmin) / (xmax - xmin || 1) * (w - padL - padR);
    const sy = y => h - padB - (y - ymin) / (ymax - ymin || 1) * (h - padT - padB);

    const path = points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x).toFixed(1)} ${sy(p.y).toFixed(1)}`)
      .join(" ");

    const circles = points.map(p => `
      <circle cx="${sx(p.x).toFixed(1)}" cy="${sy(p.y).toFixed(1)}" r="4">
        <title>Lead ${p.x} h | ${p.validTime} | ${fmtValue(p.y, product.units)}</title>
      </circle>
    `).join("");

    const yTicks = [ymin, ymin + 0.5 * (ymax - ymin), ymax];

    const yGrid = yTicks.map(t => `
      <line x1="${padL}" y1="${sy(t).toFixed(1)}" x2="${w - padR}" y2="${sy(t).toFixed(1)}" stroke="#e2e8f0" />
      <text x="10" y="${(sy(t) + 4).toFixed(1)}" font-size="12" fill="#64748b">${fmtValue(t, "")}</text>
    `).join("");

    chart.innerHTML = `
      <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="ANN12-v4 city time-series chart">
        ${yGrid}

        <line x1="${padL}" y1="${h - padB}" x2="${w - padR}" y2="${h - padB}" stroke="#94a3b8" />
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h - padB}" stroke="#94a3b8" />

        <text x="${padL}" y="${h - 16}" font-size="12" fill="#64748b">Lead hour</text>
        <text x="${w - padR - 52}" y="${h - 16}" font-size="12" fill="#64748b">${xmax} h</text>
        <text x="${padL}" y="${h - padB + 22}" font-size="12" fill="#64748b">${xmin} h</text>

        <path d="${path}" fill="none" stroke="#174ea6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <g fill="#0f766e" stroke="white" stroke-width="1.5">
          ${circles}
        </g>
      </svg>
    `;
  }

  function renderTable(records, product) {
    const tbody = document.querySelector("#timeseries-table tbody");
    tbody.innerHTML = "";

    records.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${r.lead_hour}</td>
        <td>${r.valid_time}</td>
        <td>${fmtValue(r.nearest_value, product.units)}</td>
        <td>${fmtValue(r.box_mean, product.units)}</td>
        <td>${fmtValue(r.box_max, product.units)}</td>
        <td>${fmtValue(r.box_p90, product.units)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function setSelectedCity(cityId, shouldFocusMap) {
    selectedCityId = cityId;
    citySelect.value = selectedCityId;

    renderSelectedCity();
    updateCityGridActive();

    if (shouldFocusMap) {
      focusMap(cityId);
    }

    loadCityPayload(cityId);
  }

  function setupMetricSelect() {
    const metricSelect = document.getElementById("metric-select");
    if (metricSelect) {
      metricSelect.addEventListener("change", () => {
        renderDataPanel();
      });
    }
  }

  function init() {
    if (!cities.length) {
      selectedCard.textContent = "No city metadata was loaded.";
      return;
    }

    renderCitySelect();
    renderCityGrid();
    renderSelectedCity();
    initMap();
    updateCityGridActive();
    setupProductButtons();
    setupMetricSelect();
    renderRunInfo();

    if (window.initProductGallery) {
      window.initProductGallery();
    }

    loadCityPayload(selectedCityId);
  }

  init();
})();
