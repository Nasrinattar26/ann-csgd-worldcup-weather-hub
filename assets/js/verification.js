(function () {
  "use strict";

  var state = {
    items: []
  };

  var initSelect =
    document.getElementById("verification-init");

  var validSelect =
    document.getElementById("verification-valid");

  var daySelect =
    document.getElementById("verification-day");

  var domainSelect =
    document.getElementById("verification-domain");

  var familySelect =
    document.getElementById("verification-family");

  var thresholdSelect =
    document.getElementById("verification-threshold");

  var countElement =
    document.getElementById("verification-count");

  var statusElement =
    document.getElementById("verification-status");

  var galleryElement =
    document.getElementById("verification-gallery");

  var thresholdLabels = {
    amount: "Amount verification",
    "0p5inch": "0.5-inch exceedance",
    "1inch": "1-inch exceedance",
    "2inch": "2-inch exceedance",
    "2yr24h_ari": "2-year 24-hour ARI exceedance",
    "5yr24h_ari": "5-year 24-hour ARI exceedance"
  };

  function unique(values) {
    return Array.from(new Set(values));
  }

  function descendingText(a, b) {
    return String(b).localeCompare(String(a));
  }

  function dayNumber(value) {
    var match = String(value || "").match(/\d+/);
    return match ? Number(match[0]) : 0;
  }

  function ascendingDay(a, b) {
    return dayNumber(a) - dayNumber(b);
  }

  function validPeriodLabel(item) {
    return (
      item.valid_start_utc +
      " to " +
      item.valid_end_utc
    );
  }

  function replaceOptions(
    select,
    values,
    labelFunction
  ) {
    select.innerHTML = "";

    values.forEach(function (value) {
      var option =
        document.createElement("option");

      option.value = value;

      option.textContent = labelFunction
        ? labelFunction(value)
        : value;

      select.appendChild(option);
    });
  }

  function updateLeadDays() {
    var selectedInit = initSelect.value;
    var previousDay = daySelect.value || "all";

    var days = unique(
      state.items
        .filter(function (item) {
          return item.init === selectedInit;
        })
        .map(function (item) {
          return item.day;
        })
    ).sort(ascendingDay);

    replaceOptions(
      daySelect,
      ["all"].concat(days),
      function (value) {
        return value === "all" ? "All days" : value;
      }
    );

    if (days.indexOf(previousDay) >= 0 || previousDay === "all") {
      daySelect.value = previousDay;
    }
  }

  function updateValidPeriods() {
    var selectedInit = initSelect.value;
    var selectedDay = daySelect.value || "all";
    var previousValid = validSelect.value;

    var periods = unique(
      state.items
        .filter(function (item) {
          if (item.init !== selectedInit) {
            return false;
          }

          if (
            selectedDay !== "all" &&
            item.day !== selectedDay
          ) {
            return false;
          }

          return true;
        })
        .map(validPeriodLabel)
    ).sort(descendingText);

    replaceOptions(
      validSelect,
      periods
    );

    if (periods.indexOf(previousValid) >= 0) {
      validSelect.value = previousValid;
    }
  }

  function selectedItems() {
    var selectedInit = initSelect.value;
    var selectedDay = daySelect.value || "all";
    var selectedValid = validSelect.value;
    var selectedDomain = domainSelect.value;
    var selectedFamily = familySelect.value;
    var selectedThreshold =
      thresholdSelect.value;

    return state.items.filter(function (item) {
      if (item.init !== selectedInit) {
        return false;
      }

      if (
        selectedDay !== "all" &&
        item.day !== selectedDay
      ) {
        return false;
      }

      if (
        validPeriodLabel(item) !== selectedValid
      ) {
        return false;
      }

      if (
        selectedDomain !== "all" &&
        item.domain !== selectedDomain
      ) {
        return false;
      }

      if (
        selectedFamily !== "all" &&
        item.family !== selectedFamily
      ) {
        return false;
      }

      if (
        selectedThreshold !== "all" &&
        item.family === "threshold" &&
        item.threshold !== selectedThreshold
      ) {
        return false;
      }

      if (
        selectedThreshold !== "all" &&
        selectedFamily === "threshold" &&
        item.threshold !== selectedThreshold
      ) {
        return false;
      }

      return true;
    });
  }

  function productTitle(item) {
    if (item.family === "amount") {
      return "24-hour Amount Verification";
    }

    return (
      thresholdLabels[item.threshold] ||
      item.threshold
    );
  }

  function createMetadataItem(text) {
    var span = document.createElement("span");
    span.textContent = text;
    return span;
  }

  function createCard(item) {
    var card =
      document.createElement("article");

    card.className = "verification-card";

    var header =
      document.createElement("div");

    header.className =
      "verification-card-header";

    var heading =
      document.createElement("h3");

    heading.textContent = productTitle(item);

    var metadata =
      document.createElement("div");

    metadata.className =
      "verification-card-metadata";

    metadata.appendChild(
      createMetadataItem(
        "Init " + item.init
      )
    );

    metadata.appendChild(
      createMetadataItem(item.day)
    );

    metadata.appendChild(
      createMetadataItem(item.domain)
    );

    metadata.appendChild(
      createMetadataItem(
        validPeriodLabel(item)
      )
    );

    header.appendChild(heading);
    header.appendChild(metadata);

    var imageLink =
      document.createElement("a");

    imageLink.className =
      "verification-card-image-link";

    imageLink.href = item.image;
    imageLink.target = "_blank";
    imageLink.rel = "noopener";

    var image =
      document.createElement("img");

    image.src = item.image;
    image.loading = "lazy";

    image.alt = (
      productTitle(item) +
      ", " +
      item.domain +
      ", initialized " +
      item.init +
      ", valid " +
      validPeriodLabel(item)
    );

    imageLink.appendChild(image);

    var footer =
      document.createElement("div");

    footer.className =
      "verification-card-footer";

    var familyLabel =
      document.createElement("span");

    familyLabel.textContent =
      item.family === "amount"
        ? "Amount product"
        : "Probability product";

    var fullImageLink =
      document.createElement("a");

    fullImageLink.href = item.image;
    fullImageLink.target = "_blank";
    fullImageLink.rel = "noopener";
    fullImageLink.textContent = "Open full image";

    footer.appendChild(familyLabel);
    footer.appendChild(fullImageLink);

    card.appendChild(header);
    card.appendChild(imageLink);
    card.appendChild(footer);

    return card;
  }

  function render() {
    var items = selectedItems();

    galleryElement.innerHTML = "";

    statusElement.textContent =
      items.length +
      " verification product" +
      (items.length === 1 ? "" : "s") +
      " for the current selection.";

    if (!items.length) {
      var empty =
        document.createElement("div");

      empty.className =
        "verification-empty";

      var heading =
        document.createElement("h3");

      heading.textContent =
        "No matching verification product";

      var paragraph =
        document.createElement("p");

      paragraph.textContent =
        "Choose another initialization, lead day, valid period, domain, product family, or threshold.";

      empty.appendChild(heading);
      empty.appendChild(paragraph);
      galleryElement.appendChild(empty);

      return;
    }

    items
      .slice()
      .sort(function (a, b) {
        return (
          a.domain.localeCompare(b.domain) ||
          a.family.localeCompare(b.family) ||
          a.threshold.localeCompare(b.threshold)
        );
      })
      .forEach(function (item) {
        galleryElement.appendChild(
          createCard(item)
        );
      });
  }

  function attachEvents() {
    initSelect.addEventListener(
      "change",
      function () {
        updateLeadDays();
        updateValidPeriods();
        render();
      }
    );

    daySelect.addEventListener(
      "change",
      function () {
        updateValidPeriods();
        render();
      }
    );

    [
      validSelect,
      domainSelect,
      familySelect,
      thresholdSelect
    ].forEach(function (select) {
      select.addEventListener(
        "change",
        render
      );
    });
  }

  function initialize(catalog) {
    state.items = Array.isArray(catalog.items)
      ? catalog.items
      : [];

    countElement.textContent =
      state.items.length +
      " published plot" +
      (state.items.length === 1 ? "" : "s");

    if (!state.items.length) {
      statusElement.textContent =
        "No completed verification products are currently available.";

      galleryElement.innerHTML =
        '<div class="verification-empty">' +
        "<h3>No completed verification periods</h3>" +
        "<p>The page will update after MRMS-GC observations become available.</p>" +
        "</div>";

      return;
    }

    var initializations = unique(
      state.items.map(function (item) {
        return item.init;
      })
    ).sort(descendingText);

    replaceOptions(
      initSelect,
      initializations,
      function (value) {
        return "INIT " + value;
      }
    );

    updateLeadDays();
    updateValidPeriods();
    attachEvents();
    render();
  }

  fetch(
    "data/verification_catalog.json",
    {
      cache: "no-store"
    }
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error(
          "Catalog request failed with HTTP " +
          response.status
        );
      }

      return response.json();
    })
    .then(initialize)
    .catch(function (error) {
      console.error(error);

      countElement.textContent =
        "Catalog unavailable";

      statusElement.textContent =
        "The verification catalog could not be loaded.";

      galleryElement.innerHTML =
        '<div class="verification-empty">' +
        "<h3>Unable to load verification products</h3>" +
        "<p>" +
        String(error.message || error) +
        "</p>" +
        "</div>";
    });
})();
