window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026110600",
  "created_utc": "2026-11-06 14:05 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026110600/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026110600_with_2yr5yrARI.nc",
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
      "init": "2026110600",
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
            "value": 0.9578962326049805,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1121842861175537,
            "lead_hour": 12,
            "valid_time": "2026-11-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.0777463912963867,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.4403154850006104,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.6916463375091553,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8937180042266846,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.11167526245117188,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.17241239547729492,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.018298625946044922,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.026905536651611328,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.007468461990356445,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.010991096496582031,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
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
      "init": "2026110600",
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
            "value": 31.094818115234375,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 32.47502899169922,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 95.79582214355469,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 97.20881652832031,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 63.206756591796875,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 68.09959411621094,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.642924785614014,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.916729927062988,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7683694362640381,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0217845439910889,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.06459951400756836,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.16876459121704102,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
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
      "init": "2026110600",
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
            "value": 1.7472041845321655,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.8713955879211426,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.627413511276245,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.073966979980469,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.344132423400879,
            "lead_hour": 150,
            "valid_time": "2026-11-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 3.047388792037964,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.2728283405303955,
            "lead_hour": 150,
            "valid_time": "2026-11-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.48166513442993164,
            "lead_hour": 150,
            "valid_time": "2026-11-12 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.03916025161743164,
            "lead_hour": 150,
            "valid_time": "2026-11-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0821530818939209,
            "lead_hour": 150,
            "valid_time": "2026-11-12 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.011819601058959961,
            "lead_hour": 150,
            "valid_time": "2026-11-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.026220083236694336,
            "lead_hour": 150,
            "valid_time": "2026-11-12 06:00 UTC"
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
      "init": "2026110600",
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
            "value": 4.845035076141357,
            "lead_hour": 72,
            "valid_time": "2026-11-09 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.608187675476074,
            "lead_hour": 72,
            "valid_time": "2026-11-09 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.697846412658691,
            "lead_hour": 72,
            "valid_time": "2026-11-09 00:00 UTC"
          },
          "box_max_peak": {
            "value": 16.492647171020508,
            "lead_hour": 72,
            "valid_time": "2026-11-09 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.416233062744141,
            "lead_hour": 72,
            "valid_time": "2026-11-09 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.551509857177734,
            "lead_hour": 72,
            "valid_time": "2026-11-09 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.2380123138427734,
            "lead_hour": 162,
            "valid_time": "2026-11-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.661241054534912,
            "lead_hour": 162,
            "valid_time": "2026-11-12 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.11776089668273926,
            "lead_hour": 162,
            "valid_time": "2026-11-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.17140507698059082,
            "lead_hour": 162,
            "valid_time": "2026-11-12 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.03090500831604004,
            "lead_hour": 162,
            "valid_time": "2026-11-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04894137382507324,
            "lead_hour": 162,
            "valid_time": "2026-11-12 18:00 UTC"
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
      "init": "2026110600",
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
            "value": 0.17836739122867584,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6018592715263367,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.036150217056274414,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0548830032348633,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0005841255187988281,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.22773146629333496,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-11-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.016188621520996094,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-11-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0010192394256591797,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-11-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.00014901161193847656,
            "lead_hour": 132,
            "valid_time": "2026-11-11 12:00 UTC"
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
      "init": "2026110600",
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
            "value": 0.7514206171035767,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7981191277503967,
            "lead_hour": 174,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4980554580688477,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6094207763671875,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.4070162773132324,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4576265811920166,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.04482865333557129,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.054931640625,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.037926435470581055,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.17462372779846191,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.010216236114501953,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.06306171417236328,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
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
      "init": "2026110600",
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
            "value": 1.8753894567489624,
            "lead_hour": 138,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9597723484039307,
            "lead_hour": 144,
            "valid_time": "2026-11-12 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.266434669494629,
            "lead_hour": 144,
            "valid_time": "2026-11-12 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.477369785308838,
            "lead_hour": 144,
            "valid_time": "2026-11-12 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8631517887115479,
            "lead_hour": 138,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8760859966278076,
            "lead_hour": 144,
            "valid_time": "2026-11-12 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.4953324794769287,
            "lead_hour": 138,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.49700140953063965,
            "lead_hour": 138,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.02530217170715332,
            "lead_hour": 138,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.042939186096191406,
            "lead_hour": 138,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.006544589996337891,
            "lead_hour": 138,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01443028450012207,
            "lead_hour": 144,
            "valid_time": "2026-11-12 00:00 UTC"
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
      "init": "2026110600",
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
            "value": 15.524764060974121,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 22.3215274810791,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 48.96601486206055,
            "lead_hour": 18,
            "valid_time": "2026-11-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 75.30004119873047,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 17.963838577270508,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 33.91987609863281,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.963186264038086,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.414374589920044,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.19307732582092285,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.24654865264892578,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.025779008865356445,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.049239397048950195,
            "lead_hour": 30,
            "valid_time": "2026-11-07 06:00 UTC"
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
      "init": "2026110600",
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
            "value": 9.538006782531738,
            "lead_hour": 18,
            "valid_time": "2026-11-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 20.09957504272461,
            "lead_hour": 18,
            "valid_time": "2026-11-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 26.708614349365234,
            "lead_hour": 18,
            "valid_time": "2026-11-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 72.14069366455078,
            "lead_hour": 18,
            "valid_time": "2026-11-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.560373306274414,
            "lead_hour": 18,
            "valid_time": "2026-11-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 27.123958587646484,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.373154878616333,
            "lead_hour": 18,
            "valid_time": "2026-11-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.923107147216797,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05517005920410156,
            "lead_hour": 186,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4540383815765381,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.018024444580078125,
            "lead_hour": 186,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09446144104003906,
            "lead_hour": 24,
            "valid_time": "2026-11-07 00:00 UTC"
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
      "init": "2026110600",
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
            "value": 5.573547840118408,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.785000801086426,
            "lead_hour": 186,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.60749626159668,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 16.716712951660156,
            "lead_hour": 186,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.4842529296875,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.203507423400879,
            "lead_hour": 186,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1685967445373535,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.717984676361084,
            "lead_hour": 186,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 3.0839085578918457,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.8403213024139404,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.5746653079986572,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.412271499633789,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
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
      "init": "2026110600",
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
            "value": 15.510632514953613,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 17.425249099731445,
            "lead_hour": 120,
            "valid_time": "2026-11-11 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 54.25083541870117,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 60.000492095947266,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.505934715270996,
            "lead_hour": 60,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 22.17654037475586,
            "lead_hour": 120,
            "valid_time": "2026-11-11 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1259377002716064,
            "lead_hour": 120,
            "valid_time": "2026-11-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.674698829650879,
            "lead_hour": 120,
            "valid_time": "2026-11-11 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.289837598800659,
            "lead_hour": 120,
            "valid_time": "2026-11-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.933631420135498,
            "lead_hour": 120,
            "valid_time": "2026-11-11 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5269944667816162,
            "lead_hour": 120,
            "valid_time": "2026-11-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4008164405822754,
            "lead_hour": 192,
            "valid_time": "2026-11-14 00:00 UTC"
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
