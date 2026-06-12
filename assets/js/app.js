(function () {
  const DATA = window.WC_CITIES;
  const cities = DATA.cities || [];

  let map = null;
  let markers = {};
  let selectedCityId = cities.length ? cities[0].id : null;

  const citySelect = document.getElementById("city-select");
  const selectedCard = document.getElementById("selected-city-card");
  const cityGrid = document.getElementById("city-grid");

  function cityById(id) {
    return cities.find(c => c.id === id) || cities[0];
  }

  function fmtCoord(x) {
    return Number(x).toFixed(4);
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

  function setSelectedCity(cityId, shouldFocusMap) {
    selectedCityId = cityId;
    citySelect.value = selectedCityId;

    renderSelectedCity();
    updateCityGridActive();

    if (shouldFocusMap) {
      focusMap(cityId);
    }
  }

  function setupProductButtons() {
    document.querySelectorAll(".product-button").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".product-button").forEach(b => b.classList.remove("active"));
        button.classList.add("active");
      });
    });
  }

  function init() {
    if (!DATA || !cities.length) {
      selectedCard.textContent = "No city metadata was loaded.";
      return;
    }

    renderCitySelect();
    renderCityGrid();
    renderSelectedCity();
    initMap();
    updateCityGridActive();
    setupProductButtons();
  }

  init();
})();
