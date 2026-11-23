window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026112300",
  "created_utc": "2026-11-23 14:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026112300/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026112300_with_2yr5yrARI.nc",
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
      "init": "2026112300",
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
            "value": 10.648392677307129,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.992264747619629,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 29.204124450683594,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          },
          "box_max_peak": {
            "value": 33.609371185302734,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.352216720581055,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.411771774291992,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.913374662399292,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.2781729698181152,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2850651741027832,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.30521154403686523,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.10770559310913086,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.10770559310913086,
            "lead_hour": 84,
            "valid_time": "2026-11-26 12:00 UTC"
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
      "init": "2026112300",
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
            "value": 23.522363662719727,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 23.681262969970703,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 78.01286315917969,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 90.17292022705078,
            "lead_hour": 12,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 37.425018310546875,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 37.82783126831055,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.380821228027344,
            "lead_hour": 108,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.084197998046875,
            "lead_hour": 108,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.048213243484497,
            "lead_hour": 108,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6018688678741455,
            "lead_hour": 108,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.19446611404418945,
            "lead_hour": 108,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.33707618713378906,
            "lead_hour": 108,
            "valid_time": "2026-11-27 12:00 UTC"
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
      "init": "2026112300",
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
            "value": 0.8468897938728333,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1735053062438965,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9369552135467529,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5992462635040283,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.09818077087402344,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.21578073501586914,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0016689300537109375,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.005930662155151367,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 5.9604644775390625e-06,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 6.556510925292969e-05,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.9604644775390625e-06,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
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
      "init": "2026112300",
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
            "value": 2.6972005367279053,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.577625274658203,
            "lead_hour": 12,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.7425737380981445,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 13.64101791381836,
            "lead_hour": 12,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.5111267566680908,
            "lead_hour": 54,
            "valid_time": "2026-11-25 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.235201835632324,
            "lead_hour": 12,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.17367005348205566,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5384743213653564,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0018715858459472656,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.008195638656616211,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.00013113021850585938,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0008344650268554688,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
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
      "init": "2026112300",
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
            "value": 0.5520892143249512,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5796173810958862,
            "lead_hour": 162,
            "valid_time": "2026-11-29 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9066402912139893,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9853541851043701,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.17664432525634766,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.20316243171691895,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.010317564010620117,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01322627067565918,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0004887580871582031,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0008940696716308594,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 4.76837158203125e-05,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.00010728836059570312,
            "lead_hour": 162,
            "valid_time": "2026-11-29 18:00 UTC"
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
      "init": "2026112300",
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
            "value": 0.7709980607032776,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2118170261383057,
            "lead_hour": 12,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4540016651153564,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8315494060516357,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.35253167152404785,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4818141460418701,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.031173229217529297,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04960894584655762,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.025916099548339844,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.10745525360107422,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.006067752838134766,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03396868705749512,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
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
      "init": "2026112300",
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
            "value": 22.694820404052734,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 22.89727783203125,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 54.89151382446289,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 56.76538848876953,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 32.32582092285156,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 32.742225646972656,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.496925354003906,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 11.585587501525879,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.75339674949646,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3923823833465576,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1987159252166748,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.48370957374572754,
            "lead_hour": 66,
            "valid_time": "2026-11-25 18:00 UTC"
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
      "init": "2026112300",
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
            "value": 22.277528762817383,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 25.931421279907227,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 68.8916015625,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 77.54717254638672,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 33.8259391784668,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 42.846343994140625,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.649876594543457,
            "lead_hour": 102,
            "valid_time": "2026-11-27 06:00 UTC"
          },
          "box_max_peak": {
            "value": 8.584708213806152,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.894397497177124,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5009105205535889,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1798570156097412,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3092646598815918,
            "lead_hour": 96,
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
      "init": "2026112300",
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
            "value": 23.604299545288086,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 29.485830307006836,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 70.69140625,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 87.38866424560547,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 36.89213562011719,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 53.35718536376953,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.209837436676025,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 10.283499717712402,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.539522409439087,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9062042236328125,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.38666725158691406,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.42364001274108887,
            "lead_hour": 96,
            "valid_time": "2026-11-27 00:00 UTC"
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
      "init": "2026112300",
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
            "value": 4.714446544647217,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          },
          "box_max_peak": {
            "value": 12.090669631958008,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.852863311767578,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          },
          "box_max_peak": {
            "value": 37.86237335205078,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.7204036712646484,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.899283409118652,
            "lead_hour": 60,
            "valid_time": "2026-11-25 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.4646599292755127,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7459461688995361,
            "lead_hour": 162,
            "valid_time": "2026-11-29 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.3968706130981445,
            "lead_hour": 168,
            "valid_time": "2026-11-30 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.175581455230713,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6515324115753174,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.321631669998169,
            "lead_hour": 174,
            "valid_time": "2026-11-30 06:00 UTC"
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
      "init": "2026112300",
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
            "value": 28.23868179321289,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 40.5302619934082,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 86.61044311523438,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 97.57176971435547,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 50.62852478027344,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 78.9291763305664,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.413553237915039,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 25.275564193725586,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 14.798110961914062,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 37.570518493652344,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 4.46292781829834,
            "lead_hour": 90,
            "valid_time": "2026-11-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 15.809708595275879,
            "lead_hour": 90,
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
