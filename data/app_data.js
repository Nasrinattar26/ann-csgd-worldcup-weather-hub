window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026112400",
  "created_utc": "2026-11-24 14:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026112400/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026112400_with_2yr5yrARI.nc",
  "dimensions": {
    "record": 31,
    "lat": 117,
    "lon": 253
  },
  "products": [
    {
      "id": "expected_precip",
      "label": "Expected precipitation",
      "units": "mm per 12h",
      "kind": "amount",
      "source_variable": "expected_precip"
    },
    {
      "id": "prob_gt_0p5inch_percent",
      "label": "Probability > 0.5 inch",
      "units": "%",
      "kind": "probability",
      "source_variable": "prob_gt_0p5inch_percent"
    },
    {
      "id": "prob_gt_1inch_percent",
      "label": "Probability > 1 inch",
      "units": "%",
      "kind": "probability",
      "source_variable": "prob_gt_1inch_percent"
    },
    {
      "id": "prob_gt_2inch_percent",
      "label": "Probability > 2 inch",
      "units": "%",
      "kind": "probability",
      "source_variable": "prob_gt_2inch_percent"
    },
    {
      "id": "prob_gt_2yr12h_ari_percent",
      "label": "Probability > 2-year 12-h ARI",
      "units": "%",
      "kind": "probability",
      "source_variable": "prob_gt_2yr12h_ari_percent"
    },
    {
      "id": "prob_gt_5yr12h_ari_percent",
      "label": "Probability > 5-year 12-h ARI",
      "units": "%",
      "kind": "probability",
      "source_variable": "prob_gt_5yr12h_ari_percent"
    }
  ],
  "lead_hours": [
    12,
    18,
    24,
    30,
    36,
    42,
    48,
    54,
    60,
    66,
    72,
    78,
    84,
    90,
    96,
    102,
    108,
    114,
    120,
    126,
    132,
    138,
    144,
    150,
    156,
    162,
    168,
    174,
    180,
    186,
    192
  ],
  "cities": [
    {
      "id": "atlanta",
      "market": "Atlanta",
      "display_name": "Atlanta",
      "stadium_area": "Mercedes-Benz Stadium area",
      "state": "GA",
      "lat": 33.7554,
      "lon": -84.4008,
      "state_view": {
        "label": "Georgia",
        "bounds": [
          [
            30.3,
            -85.7
          ],
          [
            35.1,
            -80.7
          ]
        ]
      },
      "timeseries_json": "data/cities/atlanta/timeseries_12h.json",
      "timeseries_csv": "data/cities/atlanta/timeseries_12h.csv",
      "summary_json": "data/cities/atlanta/summary.json"
    },
    {
      "id": "boston_foxborough",
      "market": "Boston / Foxborough",
      "display_name": "Boston / Foxborough",
      "stadium_area": "Gillette Stadium area",
      "state": "MA",
      "lat": 42.0909,
      "lon": -71.2643,
      "state_view": {
        "label": "Massachusetts",
        "bounds": [
          [
            41.2,
            -73.6
          ],
          [
            42.95,
            -69.8
          ]
        ]
      },
      "timeseries_json": "data/cities/boston_foxborough/timeseries_12h.json",
      "timeseries_csv": "data/cities/boston_foxborough/timeseries_12h.csv",
      "summary_json": "data/cities/boston_foxborough/summary.json"
    },
    {
      "id": "dallas_arlington",
      "market": "Dallas / Arlington",
      "display_name": "Dallas / Arlington",
      "stadium_area": "AT&T Stadium area",
      "state": "TX",
      "lat": 32.7473,
      "lon": -97.0945,
      "state_view": {
        "label": "Texas",
        "bounds": [
          [
            25.8,
            -106.7
          ],
          [
            36.6,
            -93.5
          ]
        ]
      },
      "timeseries_json": "data/cities/dallas_arlington/timeseries_12h.json",
      "timeseries_csv": "data/cities/dallas_arlington/timeseries_12h.csv",
      "summary_json": "data/cities/dallas_arlington/summary.json"
    },
    {
      "id": "houston",
      "market": "Houston",
      "display_name": "Houston",
      "stadium_area": "NRG Stadium area",
      "state": "TX",
      "lat": 29.6847,
      "lon": -95.4107,
      "state_view": {
        "label": "Texas",
        "bounds": [
          [
            25.8,
            -106.7
          ],
          [
            36.6,
            -93.5
          ]
        ]
      },
      "timeseries_json": "data/cities/houston/timeseries_12h.json",
      "timeseries_csv": "data/cities/houston/timeseries_12h.csv",
      "summary_json": "data/cities/houston/summary.json"
    },
    {
      "id": "kansas_city",
      "market": "Kansas City",
      "display_name": "Kansas City",
      "stadium_area": "Arrowhead Stadium area",
      "state": "MO",
      "lat": 39.049,
      "lon": -94.4839,
      "state_view": {
        "label": "Missouri",
        "bounds": [
          [
            35.9,
            -95.8
          ],
          [
            40.7,
            -89.0
          ]
        ]
      },
      "timeseries_json": "data/cities/kansas_city/timeseries_12h.json",
      "timeseries_csv": "data/cities/kansas_city/timeseries_12h.csv",
      "summary_json": "data/cities/kansas_city/summary.json"
    },
    {
      "id": "los_angeles_inglewood",
      "market": "Los Angeles / Inglewood",
      "display_name": "Los Angeles / Inglewood",
      "stadium_area": "SoFi Stadium area",
      "state": "CA",
      "lat": 33.9535,
      "lon": -118.3392,
      "state_view": {
        "label": "California",
        "bounds": [
          [
            32.3,
            -124.6
          ],
          [
            42.1,
            -114.0
          ]
        ]
      },
      "timeseries_json": "data/cities/los_angeles_inglewood/timeseries_12h.json",
      "timeseries_csv": "data/cities/los_angeles_inglewood/timeseries_12h.csv",
      "summary_json": "data/cities/los_angeles_inglewood/summary.json"
    },
    {
      "id": "miami_gardens",
      "market": "Miami / Miami Gardens",
      "display_name": "Miami / Miami Gardens",
      "stadium_area": "Hard Rock Stadium area",
      "state": "FL",
      "lat": 25.958,
      "lon": -80.2389,
      "state_view": {
        "label": "Florida",
        "bounds": [
          [
            24.4,
            -87.8
          ],
          [
            31.1,
            -79.8
          ]
        ]
      },
      "timeseries_json": "data/cities/miami_gardens/timeseries_12h.json",
      "timeseries_csv": "data/cities/miami_gardens/timeseries_12h.csv",
      "summary_json": "data/cities/miami_gardens/summary.json"
    },
    {
      "id": "new_york_new_jersey",
      "market": "New York / New Jersey",
      "display_name": "New York / New Jersey",
      "stadium_area": "MetLife Stadium area",
      "state": "NJ",
      "lat": 40.8135,
      "lon": -74.0745,
      "state_view": {
        "label": "New Jersey",
        "bounds": [
          [
            38.9,
            -75.6
          ],
          [
            41.4,
            -73.8
          ]
        ]
      },
      "timeseries_json": "data/cities/new_york_new_jersey/timeseries_12h.json",
      "timeseries_csv": "data/cities/new_york_new_jersey/timeseries_12h.csv",
      "summary_json": "data/cities/new_york_new_jersey/summary.json"
    },
    {
      "id": "philadelphia",
      "market": "Philadelphia",
      "display_name": "Philadelphia",
      "stadium_area": "Lincoln Financial Field area",
      "state": "PA",
      "lat": 39.9008,
      "lon": -75.1675,
      "state_view": {
        "label": "Pennsylvania",
        "bounds": [
          [
            39.6,
            -80.6
          ],
          [
            42.3,
            -74.6
          ]
        ]
      },
      "timeseries_json": "data/cities/philadelphia/timeseries_12h.json",
      "timeseries_csv": "data/cities/philadelphia/timeseries_12h.csv",
      "summary_json": "data/cities/philadelphia/summary.json"
    },
    {
      "id": "san_francisco_santa_clara",
      "market": "San Francisco Bay Area / Santa Clara",
      "display_name": "San Francisco Bay Area / Santa Clara",
      "stadium_area": "Levi's Stadium area",
      "state": "CA",
      "lat": 37.403,
      "lon": -121.97,
      "state_view": {
        "label": "California",
        "bounds": [
          [
            32.3,
            -124.6
          ],
          [
            42.1,
            -114.0
          ]
        ]
      },
      "timeseries_json": "data/cities/san_francisco_santa_clara/timeseries_12h.json",
      "timeseries_csv": "data/cities/san_francisco_santa_clara/timeseries_12h.csv",
      "summary_json": "data/cities/san_francisco_santa_clara/summary.json"
    },
    {
      "id": "seattle",
      "market": "Seattle",
      "display_name": "Seattle",
      "stadium_area": "Lumen Field area",
      "state": "WA",
      "lat": 47.5952,
      "lon": -122.3316,
      "state_view": {
        "label": "Washington",
        "bounds": [
          [
            45.5,
            -124.9
          ],
          [
            49.1,
            -116.8
          ]
        ]
      },
      "timeseries_json": "data/cities/seattle/timeseries_12h.json",
      "timeseries_csv": "data/cities/seattle/timeseries_12h.csv",
      "summary_json": "data/cities/seattle/summary.json"
    }
  ],
  "city_summaries": [
    {
      "init": "2026112400",
      "city": {
        "id": "atlanta",
        "market": "Atlanta",
        "display_name": "Atlanta",
        "stadium_area": "Mercedes-Benz Stadium area",
        "state": "GA",
        "lat": 33.7554,
        "lon": -84.4008,
        "state_view": {
          "label": "Georgia",
          "bounds": [
            [
              30.3,
              -85.7
            ],
            [
              35.1,
              -80.7
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 73,
        "grid_j": 170,
        "grid_lat": 33.75,
        "grid_lon": -84.5
      },
      "box_indices": {
        "i0": 71,
        "i1_exclusive": 76,
        "j0": 168,
        "j1_exclusive": 173
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 6.587806701660156,
            "lead_hour": 54,
            "valid_time": "2026-11-26 06:00 UTC"
          },
          "box_max_peak": {
            "value": 7.971131324768066,
            "lead_hour": 54,
            "valid_time": "2026-11-26 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.22181510925293,
            "lead_hour": 54,
            "valid_time": "2026-11-26 06:00 UTC"
          },
          "box_max_peak": {
            "value": 21.045286178588867,
            "lead_hour": 54,
            "valid_time": "2026-11-26 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.87192964553833,
            "lead_hour": 54,
            "valid_time": "2026-11-26 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.85857629776001,
            "lead_hour": 54,
            "valid_time": "2026-11-26 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.38437843322753906,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6260275840759277,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0921785831451416,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.15044808387756348,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.045680999755859375,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07169842720031738,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/atlanta/timeseries_12h.json",
        "timeseries_csv": "data/cities/atlanta/timeseries_12h.csv",
        "summary_json": "data/cities/atlanta/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "boston_foxborough",
        "market": "Boston / Foxborough",
        "display_name": "Boston / Foxborough",
        "stadium_area": "Gillette Stadium area",
        "state": "MA",
        "lat": 42.0909,
        "lon": -71.2643,
        "state_view": {
          "label": "Massachusetts",
          "bounds": [
            [
              41.2,
              -73.6
            ],
            [
              42.95,
              -69.8
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 40,
        "grid_j": 223,
        "grid_lat": 42.0,
        "grid_lon": -71.25
      },
      "box_indices": {
        "i0": 38,
        "i1_exclusive": 43,
        "j0": 221,
        "j1_exclusive": 226
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 39.56721496582031,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 39.83176803588867,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 98.5325698852539,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 98.85906219482422,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 80.87408447265625,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 81.91338348388672,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 21.999662399291992,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 22.454715728759766,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 3.935760259628296,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.120301246643066,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5140423774719238,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9125053882598877,
            "lead_hour": 78,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/boston_foxborough/timeseries_12h.json",
        "timeseries_csv": "data/cities/boston_foxborough/timeseries_12h.csv",
        "summary_json": "data/cities/boston_foxborough/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "dallas_arlington",
        "market": "Dallas / Arlington",
        "display_name": "Dallas / Arlington",
        "stadium_area": "AT&T Stadium area",
        "state": "TX",
        "lat": 32.7473,
        "lon": -97.0945,
        "state_view": {
          "label": "Texas",
          "bounds": [
            [
              25.8,
              -106.7
            ],
            [
              36.6,
              -93.5
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 77,
        "grid_j": 120,
        "grid_lat": 32.75,
        "grid_lon": -97.0
      },
      "box_indices": {
        "i0": 75,
        "i1_exclusive": 80,
        "j0": 118,
        "j1_exclusive": 123
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 0.2658803164958954,
            "lead_hour": 24,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6625381112098694,
            "lead_hour": 24,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.024181604385375977,
            "lead_hour": 24,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.009887456893921,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.00015497207641601562,
            "lead_hour": 24,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.21172165870666504,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-11-24 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.014233589172363281,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-11-24 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0003814697265625,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-11-24 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.5762786865234375e-05,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/dallas_arlington/timeseries_12h.json",
        "timeseries_csv": "data/cities/dallas_arlington/timeseries_12h.csv",
        "summary_json": "data/cities/dallas_arlington/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "houston",
        "market": "Houston",
        "display_name": "Houston",
        "stadium_area": "NRG Stadium area",
        "state": "TX",
        "lat": 29.6847,
        "lon": -95.4107,
        "state_view": {
          "label": "Texas",
          "bounds": [
            [
              25.8,
              -106.7
            ],
            [
              36.6,
              -93.5
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 89,
        "grid_j": 126,
        "grid_lat": 29.75,
        "grid_lon": -95.5
      },
      "box_indices": {
        "i0": 87,
        "i1_exclusive": 92,
        "j0": 124,
        "j1_exclusive": 129
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 0.9221491813659668,
            "lead_hour": 30,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7479318380355835,
            "lead_hour": 36,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.7923831939697266,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.1007111072540283,
            "lead_hour": 36,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5451083183288574,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9250104427337646,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.07428526878356934,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.18270611763000488,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0011682510375976562,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.006616115570068359,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.00010132789611816406,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0009059906005859375,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/houston/timeseries_12h.json",
        "timeseries_csv": "data/cities/houston/timeseries_12h.csv",
        "summary_json": "data/cities/houston/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "kansas_city",
        "market": "Kansas City",
        "display_name": "Kansas City",
        "stadium_area": "Arrowhead Stadium area",
        "state": "MO",
        "lat": 39.049,
        "lon": -94.4839,
        "state_view": {
          "label": "Missouri",
          "bounds": [
            [
              35.9,
              -95.8
            ],
            [
              40.7,
              -89.0
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 52,
        "grid_j": 130,
        "grid_lat": 39.0,
        "grid_lon": -94.5
      },
      "box_indices": {
        "i0": 50,
        "i1_exclusive": 55,
        "j0": 128,
        "j1_exclusive": 133
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 1.4803297519683838,
            "lead_hour": 174,
            "valid_time": "2026-12-01 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.1042020320892334,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.152090311050415,
            "lead_hour": 174,
            "valid_time": "2026-12-01 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.722589492797852,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9624719619750977,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5996813774108887,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.13636350631713867,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2704799175262451,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.017571449279785156,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03993511199951172,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0038802623748779297,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01131296157836914,
            "lead_hour": 180,
            "valid_time": "2026-12-01 12:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/kansas_city/timeseries_12h.json",
        "timeseries_csv": "data/cities/kansas_city/timeseries_12h.csv",
        "summary_json": "data/cities/kansas_city/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "los_angeles_inglewood",
        "market": "Los Angeles / Inglewood",
        "display_name": "Los Angeles / Inglewood",
        "stadium_area": "SoFi Stadium area",
        "state": "CA",
        "lat": 33.9535,
        "lon": -118.3392,
        "state_view": {
          "label": "California",
          "bounds": [
            [
              32.3,
              -124.6
            ],
            [
              42.1,
              -114.0
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 72,
        "grid_j": 35,
        "grid_lat": 34.0,
        "grid_lon": -118.25
      },
      "box_indices": {
        "i0": 70,
        "i1_exclusive": 75,
        "j0": 33,
        "j1_exclusive": 38
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 6.496921062469482,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.151747226715088,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.15113639831543,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 17.971080780029297,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.443995475769043,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.291656494140625,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3175547122955322,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5199005603790283,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.167285442352295,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.473477363586426,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4504740238189697,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.402263879776001,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/los_angeles_inglewood/timeseries_12h.json",
        "timeseries_csv": "data/cities/los_angeles_inglewood/timeseries_12h.csv",
        "summary_json": "data/cities/los_angeles_inglewood/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "miami_gardens",
        "market": "Miami / Miami Gardens",
        "display_name": "Miami / Miami Gardens",
        "stadium_area": "Hard Rock Stadium area",
        "state": "FL",
        "lat": 25.958,
        "lon": -80.2389,
        "state_view": {
          "label": "Florida",
          "bounds": [
            [
              24.4,
              -87.8
            ],
            [
              31.1,
              -79.8
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 104,
        "grid_j": 187,
        "grid_lat": 26.0,
        "grid_lon": -80.25
      },
      "box_indices": {
        "i0": 102,
        "i1_exclusive": 107,
        "j0": 185,
        "j1_exclusive": 190
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 27.621065139770508,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 28.469053268432617,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 72.66059112548828,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 75.53043365478516,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 43.918399810791016,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 45.815040588378906,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.272773742675781,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.94328498840332,
            "lead_hour": 42,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.49828290939331055,
            "lead_hour": 48,
            "valid_time": "2026-11-26 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1973142623901367,
            "lead_hour": 48,
            "valid_time": "2026-11-26 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.15262365341186523,
            "lead_hour": 162,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3853738307952881,
            "lead_hour": 156,
            "valid_time": "2026-11-30 12:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/miami_gardens/timeseries_12h.json",
        "timeseries_csv": "data/cities/miami_gardens/timeseries_12h.csv",
        "summary_json": "data/cities/miami_gardens/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "new_york_new_jersey",
        "market": "New York / New Jersey",
        "display_name": "New York / New Jersey",
        "stadium_area": "MetLife Stadium area",
        "state": "NJ",
        "lat": 40.8135,
        "lon": -74.0745,
        "state_view": {
          "label": "New Jersey",
          "bounds": [
            [
              38.9,
              -75.6
            ],
            [
              41.4,
              -73.8
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 45,
        "grid_j": 212,
        "grid_lat": 40.75,
        "grid_lon": -74.0
      },
      "box_indices": {
        "i0": 43,
        "i1_exclusive": 48,
        "j0": 210,
        "j1_exclusive": 215
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 29.148761749267578,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 37.34750747680664,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 85.8708724975586,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 95.74861145019531,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 51.922142028808594,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 72.34957122802734,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.44563102722168,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 20.286256790161133,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.4413654804229736,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.5314083099365234,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2294003963470459,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7548332214355469,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/new_york_new_jersey/timeseries_12h.json",
        "timeseries_csv": "data/cities/new_york_new_jersey/timeseries_12h.csv",
        "summary_json": "data/cities/new_york_new_jersey/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "philadelphia",
        "market": "Philadelphia",
        "display_name": "Philadelphia",
        "stadium_area": "Lincoln Financial Field area",
        "state": "PA",
        "lat": 39.9008,
        "lon": -75.1675,
        "state_view": {
          "label": "Pennsylvania",
          "bounds": [
            [
              39.6,
              -80.6
            ],
            [
              42.3,
              -74.6
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 48,
        "grid_j": 207,
        "grid_lat": 40.0,
        "grid_lon": -75.25
      },
      "box_indices": {
        "i0": 46,
        "i1_exclusive": 51,
        "j0": 205,
        "j1_exclusive": 210
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 26.625164031982422,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 37.909122467041016,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 79.36441040039062,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 95.19003295898438,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 44.72724151611328,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 71.52056884765625,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.903688430786133,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 22.035736083984375,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.7911672592163086,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.649298667907715,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.41481852531433105,
            "lead_hour": 72,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5657424926757812,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/philadelphia/timeseries_12h.json",
        "timeseries_csv": "data/cities/philadelphia/timeseries_12h.csv",
        "summary_json": "data/cities/philadelphia/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "san_francisco_santa_clara",
        "market": "San Francisco Bay Area / Santa Clara",
        "display_name": "San Francisco Bay Area / Santa Clara",
        "stadium_area": "Levi's Stadium area",
        "state": "CA",
        "lat": 37.403,
        "lon": -121.97,
        "state_view": {
          "label": "California",
          "bounds": [
            [
              32.3,
              -124.6
            ],
            [
              42.1,
              -114.0
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 58,
        "grid_j": 20,
        "grid_lat": 37.5,
        "grid_lon": -122.0
      },
      "box_indices": {
        "i0": 56,
        "i1_exclusive": 61,
        "j0": 18,
        "j1_exclusive": 23
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 9.922625541687012,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 11.522209167480469,
            "lead_hour": 36,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 25.199270248413086,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 35.839115142822266,
            "lead_hour": 36,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.549901962280273,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 14.00889778137207,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.9358088970184326,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.8621127605438232,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 6.9654645919799805,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.01780891418457,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 3.8332700729370117,
            "lead_hour": 186,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.515171051025391,
            "lead_hour": 192,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/san_francisco_santa_clara/timeseries_12h.json",
        "timeseries_csv": "data/cities/san_francisco_santa_clara/timeseries_12h.csv",
        "summary_json": "data/cities/san_francisco_santa_clara/summary.json"
      },
      "is_sample_data": false
    },
    {
      "init": "2026112400",
      "city": {
        "id": "seattle",
        "market": "Seattle",
        "display_name": "Seattle",
        "stadium_area": "Lumen Field area",
        "state": "WA",
        "lat": 47.5952,
        "lon": -122.3316,
        "state_view": {
          "label": "Washington",
          "bounds": [
            [
              45.5,
              -124.9
            ],
            [
              49.1,
              -116.8
            ]
          ]
        }
      },
      "nearest_grid": {
        "grid_i": 18,
        "grid_j": 19,
        "grid_lat": 47.5,
        "grid_lon": -122.25
      },
      "box_indices": {
        "i0": 16,
        "i1_exclusive": 21,
        "j0": 17,
        "j1_exclusive": 22
      },
      "n_records": 186,
      "n_lead_records": 31,
      "products": [
        {
          "product_id": "expected_precip",
          "product_label": "Expected precipitation",
          "units": "mm per 12h",
          "nearest_peak": {
            "value": 33.75425338745117,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 42.904090881347656,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 95.13314056396484,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 98.87308502197266,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 66.98857879638672,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 84.70772552490234,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.442915916442871,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 28.937387466430664,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 23.036426544189453,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 42.84135055541992,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 7.2007060050964355,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 17.974090576171875,
            "lead_hour": 66,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        }
      ],
      "files": {
        "timeseries_json": "data/cities/seattle/timeseries_12h.json",
        "timeseries_csv": "data/cities/seattle/timeseries_12h.csv",
        "summary_json": "data/cities/seattle/summary.json"
      },
      "is_sample_data": false
    }
  ],
  "notes": [
    "Values are extracted from the nearest ANN12-v4 grid point and a 5x5 grid-cell box centered on that grid point.",
    "Probability products use percent variables from the ANN12-v4 NetCDF.",
    "This file is generated offline from the selected INIT/run and committed to GitHub Pages."
  ]
};
