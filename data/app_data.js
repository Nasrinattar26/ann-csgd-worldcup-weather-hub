window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026100800",
  "created_utc": "2026-10-08 13:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026100800/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026100800_with_2yr5yrARI.nc",
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
      "init": "2026100800",
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
            "value": 15.093650817871094,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 17.118844985961914,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 40.1557731628418,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 45.30694580078125,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.54253387451172,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 23.095781326293945,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.99577522277832,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 6.278568267822266,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.158672571182251,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3382434844970703,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5487143993377686,
            "lead_hour": 66,
            "valid_time": "2026-10-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7024109363555908,
            "lead_hour": 84,
            "valid_time": "2026-10-11 12:00 UTC"
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
      "init": "2026100800",
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
            "value": 6.545861721038818,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.834077835083008,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.58758544921875,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 20.40134620666504,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.543166160583496,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.455545425415039,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.7707357406616211,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2077093124389648,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.16408562660217285,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.27005672454833984,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.03694891929626465,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07508993148803711,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
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
      "init": "2026100800",
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
            "value": 2.5412790775299072,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.8820836544036865,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.758362770080566,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.558948516845703,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.665144205093384,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.037923574447632,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.7823765277862549,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8956074714660645,
            "lead_hour": 186,
            "valid_time": "2026-10-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1822829246520996,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.23979544639587402,
            "lead_hour": 186,
            "valid_time": "2026-10-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07506012916564941,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1058042049407959,
            "lead_hour": 186,
            "valid_time": "2026-10-15 18:00 UTC"
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
      "init": "2026100800",
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
            "value": 1.3892003297805786,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7052638530731201,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.1442582607269287,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.8640618324279785,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3296127319335938,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6992270946502686,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.3344535827636719,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.45789480209350586,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.021189451217651367,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.043261051177978516,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.00438690185546875,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01150965690612793,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
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
      "init": "2026100800",
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
            "value": 4.782314300537109,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.360604286193848,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.18776798248291,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 12.658995628356934,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.130332946777344,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.79068660736084,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4374852180480957,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6007661819458008,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.390470027923584,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4231750965118408,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.15119314193725586,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.17561912536621094,
            "lead_hour": 192,
            "valid_time": "2026-10-16 00:00 UTC"
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
      "init": "2026100800",
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
            "value": 11.009194374084473,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.471061706542969,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 31.669925689697266,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 40.36919403076172,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.263633728027344,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 14.623296737670898,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.0768711566925049,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7978012561798096,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.8979082107543945,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.743346691131592,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20830035209655762,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.2854437828063965,
            "lead_hour": 90,
            "valid_time": "2026-10-11 18:00 UTC"
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
      "init": "2026100800",
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
            "value": 5.933835506439209,
            "lead_hour": 30,
            "valid_time": "2026-10-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 12.373558044433594,
            "lead_hour": 24,
            "valid_time": "2026-10-09 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.913429260253906,
            "lead_hour": 30,
            "valid_time": "2026-10-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 29.218923568725586,
            "lead_hour": 24,
            "valid_time": "2026-10-09 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.586879730224609,
            "lead_hour": 30,
            "valid_time": "2026-10-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 15.527158737182617,
            "lead_hour": 24,
            "valid_time": "2026-10-09 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.0782530307769775,
            "lead_hour": 84,
            "valid_time": "2026-10-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.419307708740234,
            "lead_hour": 30,
            "valid_time": "2026-10-09 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.17852783203125,
            "lead_hour": 84,
            "valid_time": "2026-10-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9804308414459229,
            "lead_hour": 30,
            "valid_time": "2026-10-09 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05869865417480469,
            "lead_hour": 84,
            "valid_time": "2026-10-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.41388869285583496,
            "lead_hour": 30,
            "valid_time": "2026-10-09 06:00 UTC"
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
      "init": "2026100800",
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
            "value": 8.579512596130371,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.3154296875,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 22.41132354736328,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 24.5368595123291,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.879738807678223,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.999531745910645,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.6825437545776367,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9731223583221436,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3530442714691162,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4851698875427246,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09707212448120117,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.14934539794921875,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
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
      "init": "2026100800",
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
            "value": 8.680061340332031,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.167119979858398,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 22.76388931274414,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 26.98325538635254,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.948391914367676,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 11.384982109069824,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.6602098941802979,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.3961544036865234,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.42794346809387207,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7434070110321045,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1377880573272705,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2720296382904053,
            "lead_hour": 102,
            "valid_time": "2026-10-12 06:00 UTC"
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
      "init": "2026100800",
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
            "value": 0.15837714076042175,
            "lead_hour": 186,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7918868660926819,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.021004676818847656,
            "lead_hour": 186,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3068079948425293,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.00021457672119140625,
            "lead_hour": 186,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2622365951538086,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.016069412231445312,
            "lead_hour": 114,
            "valid_time": "2026-10-12 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.1920928955078125e-05,
            "lead_hour": 186,
            "valid_time": "2026-10-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.13843178749084473,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-10-08 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.05958080291748047,
            "lead_hour": 108,
            "valid_time": "2026-10-12 12:00 UTC"
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
      "init": "2026100800",
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
            "value": 3.6604437828063965,
            "lead_hour": 150,
            "valid_time": "2026-10-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 9.7520170211792,
            "lead_hour": 48,
            "valid_time": "2026-10-10 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.781767845153809,
            "lead_hour": 150,
            "valid_time": "2026-10-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 27.151321411132812,
            "lead_hour": 48,
            "valid_time": "2026-10-10 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8178939819335938,
            "lead_hour": 150,
            "valid_time": "2026-10-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.989670753479004,
            "lead_hour": 150,
            "valid_time": "2026-10-14 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.13328790664672852,
            "lead_hour": 150,
            "valid_time": "2026-10-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.712275505065918,
            "lead_hour": 156,
            "valid_time": "2026-10-14 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2706944942474365,
            "lead_hour": 150,
            "valid_time": "2026-10-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.256471872329712,
            "lead_hour": 156,
            "valid_time": "2026-10-14 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.06369948387145996,
            "lead_hour": 150,
            "valid_time": "2026-10-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3937244415283203,
            "lead_hour": 156,
            "valid_time": "2026-10-14 12:00 UTC"
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
