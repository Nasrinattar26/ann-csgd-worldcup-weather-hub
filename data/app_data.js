window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026110500",
  "created_utc": "2026-11-05 14:05 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026110500/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026110500_with_2yr5yrARI.nc",
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
      "init": "2026110500",
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
            "value": 9.608658790588379,
            "lead_hour": 12,
            "valid_time": "2026-11-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.798248291015625,
            "lead_hour": 12,
            "valid_time": "2026-11-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 26.976221084594727,
            "lead_hour": 12,
            "valid_time": "2026-11-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 27.722686767578125,
            "lead_hour": 12,
            "valid_time": "2026-11-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.551194190979004,
            "lead_hour": 12,
            "valid_time": "2026-11-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.1564435958862305,
            "lead_hour": 12,
            "valid_time": "2026-11-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5352556705474854,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6411731243133545,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1390993595123291,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.16335844993591309,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07179379463195801,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.08611679077148438,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
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
      "init": "2026110500",
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
            "value": 33.41328811645508,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 35.190364837646484,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 94.17374420166016,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 96.64131164550781,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 65.24368286132812,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 71.3506851196289,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.567119598388672,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 14.936166763305664,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.2877633571624756,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.922266721725464,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.31179189682006836,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4806399345397949,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
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
      "init": "2026110500",
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
            "value": 0.7014634609222412,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.2397494316101074,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.350492238998413,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.084437370300293,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.3431856632232666,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7990827560424805,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0332951545715332,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.31768083572387695,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0017881393432617188,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03936886787414551,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.000286102294921875,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01010894775390625,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
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
      "init": "2026110500",
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
            "value": 4.607456207275391,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.62425422668457,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.001110076904297,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.543807983398438,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.558032989501953,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.847292900085449,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.0474741458892822,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4335036277770996,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05002617835998535,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.08761286735534668,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.008541345596313477,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01818537712097168,
            "lead_hour": 90,
            "valid_time": "2026-11-08 18:00 UTC"
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
      "init": "2026110500",
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
            "value": 0.6365141272544861,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9220138192176819,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1580169200897217,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9286692142486572,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.26604533195495605,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5791187286376953,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.02130270004272461,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0768899917602539,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0014483928680419922,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.008547306060791016,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.00019669532775878906,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0020384788513183594,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
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
      "init": "2026110500",
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
            "value": 6.189652442932129,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.323721885681152,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.277743339538574,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 15.66341495513916,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.120854377746582,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.241220474243164,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.271820068359375,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2780964374542236,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.1284589767456055,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.3410966396331787,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.44106245040893555,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8234491348266602,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
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
      "init": "2026110500",
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
            "value": 3.226816415786743,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.226816415786743,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.239878177642822,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.239878177642822,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.522622585296631,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.522622585296631,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1274099349975586,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1274099349975586,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09049177169799805,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.15505552291870117,
            "lead_hour": 162,
            "valid_time": "2026-11-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.029009580612182617,
            "lead_hour": 192,
            "valid_time": "2026-11-13 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.06494522094726562,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
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
      "init": "2026110500",
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
            "value": 24.196809768676758,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 31.96558380126953,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 75.39695739746094,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 91.38201141357422,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 38.79788589477539,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 60.24806594848633,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.350338459014893,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 12.676125526428223,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7885277271270752,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7140865325927734,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.13693571090698242,
            "lead_hour": 54,
            "valid_time": "2026-11-07 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.25451183319091797,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
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
      "init": "2026110500",
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
            "value": 15.36841106414795,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 28.07087516784668,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 44.57164001464844,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 85.35546875,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.175832748413086,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 49.70314407348633,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.4231185913085938,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.744460105895996,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7800400257110596,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6550302505493164,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.21870732307434082,
            "lead_hour": 48,
            "valid_time": "2026-11-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5371272563934326,
            "lead_hour": 48,
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
      "init": "2026110500",
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
            "value": 6.910055160522461,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.768464088439941,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 17.180269241333008,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 22.191083908081055,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.221031188964844,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.800827026367188,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.6296327114105225,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.357661724090576,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 4.154128074645996,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.588282108306885,
            "lead_hour": 186,
            "valid_time": "2026-11-12 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.173495292663574,
            "lead_hour": 180,
            "valid_time": "2026-11-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.0386030673980713,
            "lead_hour": 186,
            "valid_time": "2026-11-12 18:00 UTC"
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
      "init": "2026110500",
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
            "value": 13.43117904663086,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 15.80945873260498,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 42.97673797607422,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 51.77518081665039,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 12.209468841552734,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 17.64633560180664,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.7068336009979248,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.613706350326538,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.6044676303863525,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.936398983001709,
            "lead_hour": 84,
            "valid_time": "2026-11-08 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.33669471740722656,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9625852108001709,
            "lead_hour": 156,
            "valid_time": "2026-11-11 12:00 UTC"
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
