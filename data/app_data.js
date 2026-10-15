window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026101500",
  "created_utc": "2026-10-15 13:20 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026101500/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026101500_with_2yr5yrARI.nc",
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
      "init": "2026101500",
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
            "value": 0.07977286726236343,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.20854789018630981,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.00019073486328125,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.06828904151916504,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0018715858459472656,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-15 12:00 UTC"
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
      "init": "2026101500",
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
            "value": 6.81234073638916,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.635536193847656,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.350061416625977,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 23.10692596435547,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.1248748302459717,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.863464832305908,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.12071728706359863,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.20244121551513672,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.012165307998657227,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.041997432708740234,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0027179718017578125,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01329183578491211,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
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
      "init": "2026101500",
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
            "value": 5.180878639221191,
            "lead_hour": 36,
            "valid_time": "2026-10-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.778759002685547,
            "lead_hour": 30,
            "valid_time": "2026-10-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 12.596040725708008,
            "lead_hour": 36,
            "valid_time": "2026-10-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 37.27608871459961,
            "lead_hour": 30,
            "valid_time": "2026-10-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.864799976348877,
            "lead_hour": 36,
            "valid_time": "2026-10-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 17.104393005371094,
            "lead_hour": 30,
            "valid_time": "2026-10-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9583950042724609,
            "lead_hour": 36,
            "valid_time": "2026-10-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.915971517562866,
            "lead_hour": 30,
            "valid_time": "2026-10-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.12549161911010742,
            "lead_hour": 36,
            "valid_time": "2026-10-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5991458892822266,
            "lead_hour": 30,
            "valid_time": "2026-10-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.035184621810913086,
            "lead_hour": 36,
            "valid_time": "2026-10-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.17420053482055664,
            "lead_hour": 30,
            "valid_time": "2026-10-16 06:00 UTC"
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
      "init": "2026101500",
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
            "value": 1.7498732805252075,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.438671112060547,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.7779271602630615,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.06456184387207,
            "lead_hour": 42,
            "valid_time": "2026-10-16 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3234376907348633,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.575289249420166,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.3319740295410156,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0806679725646973,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.020903348922729492,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.10834336280822754,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.004309415817260742,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.030797719955444336,
            "lead_hour": 138,
            "valid_time": "2026-10-20 18:00 UTC"
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
      "init": "2026101500",
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
            "value": 18.361574172973633,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 25.00437355041504,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 61.37312698364258,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 82.15399932861328,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 23.481338500976562,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 41.816593170166016,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.115577459335327,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.109238624572754,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09383559226989746,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.22889375686645508,
            "lead_hour": 18,
            "valid_time": "2026-10-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.031763315200805664,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.06083846092224121,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
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
      "init": "2026101500",
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
            "value": 6.288346767425537,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.112356662750244,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.580534934997559,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 17.919021606445312,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.182456016540527,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.177323341369629,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.2558579444885254,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4904201030731201,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.1121690273284912,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.447742223739624,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.427931547164917,
            "lead_hour": 162,
            "valid_time": "2026-10-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2256503105163574,
            "lead_hour": 168,
            "valid_time": "2026-10-22 00:00 UTC"
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
      "init": "2026101500",
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
            "value": 13.658541679382324,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 14.042929649353027,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 29.699499130249023,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 30.48355484008789,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 17.153709411621094,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 17.686420440673828,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.9108428955078125,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.163882255554199,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.8573532104492188,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1737942695617676,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.32933950424194336,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5759775638580322,
            "lead_hour": 90,
            "valid_time": "2026-10-18 18:00 UTC"
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
      "init": "2026101500",
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
            "value": 6.779845714569092,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 7.287313938140869,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.27069091796875,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 17.745054244995117,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.1294286251068115,
            "lead_hour": 54,
            "valid_time": "2026-10-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 3.5013556480407715,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.19341111183166504,
            "lead_hour": 180,
            "valid_time": "2026-10-22 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2220630645751953,
            "lead_hour": 180,
            "valid_time": "2026-10-22 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.041353702545166016,
            "lead_hour": 180,
            "valid_time": "2026-10-22 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04878044128417969,
            "lead_hour": 180,
            "valid_time": "2026-10-22 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.01189112663269043,
            "lead_hour": 180,
            "valid_time": "2026-10-22 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01589059829711914,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
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
      "init": "2026101500",
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
            "value": 6.014946460723877,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.858935356140137,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.252578735351562,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 16.83851432800293,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.1853139400482178,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.6251485347747803,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.18651485443115234,
            "lead_hour": 60,
            "valid_time": "2026-10-17 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2062380313873291,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.031632184982299805,
            "lead_hour": 180,
            "valid_time": "2026-10-22 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.06694197654724121,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.010353326797485352,
            "lead_hour": 180,
            "valid_time": "2026-10-22 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.02510547637939453,
            "lead_hour": 186,
            "valid_time": "2026-10-22 18:00 UTC"
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
      "init": "2026101500",
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
            "value": 1.4459211826324463,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.3982791900634766,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.008699417114258,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.346006393432617,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8469998836517334,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.69677734375,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.09786486625671387,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.24138689041137695,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.37950873374938965,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9341239929199219,
            "lead_hour": 174,
            "valid_time": "2026-10-22 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.14848113059997559,
            "lead_hour": 144,
            "valid_time": "2026-10-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5507707595825195,
            "lead_hour": 174,
            "valid_time": "2026-10-22 06:00 UTC"
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
      "init": "2026101500",
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
            "value": 2.3884782791137695,
            "lead_hour": 66,
            "valid_time": "2026-10-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.687132835388184,
            "lead_hour": 66,
            "valid_time": "2026-10-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.017836809158325,
            "lead_hour": 66,
            "valid_time": "2026-10-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 11.051929473876953,
            "lead_hour": 66,
            "valid_time": "2026-10-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.6411135196685791,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7557144165039062,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.054383277893066406,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1836240291595459,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.10538697242736816,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.33690929412841797,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.02740025520324707,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09783506393432617,
            "lead_hour": 192,
            "valid_time": "2026-10-23 00:00 UTC"
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
