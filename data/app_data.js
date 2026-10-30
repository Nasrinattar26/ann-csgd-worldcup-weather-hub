window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026102900",
  "created_utc": "2026-10-30 13:05 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026102900/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026102900_with_2yr5yrARI.nc",
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
      "init": "2026102900",
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
            "value": 7.034219741821289,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
          },
          "box_max_peak": {
            "value": 7.849417209625244,
            "lead_hour": 168,
            "valid_time": "2026-11-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.204959869384766,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
          },
          "box_max_peak": {
            "value": 18.1520938873291,
            "lead_hour": 168,
            "valid_time": "2026-11-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.162879943847656,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
          },
          "box_max_peak": {
            "value": 9.236001968383789,
            "lead_hour": 168,
            "valid_time": "2026-11-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.67372727394104,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
          },
          "box_max_peak": {
            "value": 3.0541181564331055,
            "lead_hour": 168,
            "valid_time": "2026-11-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.9003162384033203,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9858131408691406,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5276143550872803,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5888521671295166,
            "lead_hour": 174,
            "valid_time": "2026-11-05 06:00 UTC"
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
      "init": "2026102900",
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
            "value": 2.8213322162628174,
            "lead_hour": 186,
            "valid_time": "2026-11-05 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.496422529220581,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.541323661804199,
            "lead_hour": 186,
            "valid_time": "2026-11-05 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.222782135009766,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.4647772312164307,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.273218870162964,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.49834251403808594,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7090270519256592,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.15058517456054688,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2876102924346924,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04875063896179199,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1064002513885498,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
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
      "init": "2026102900",
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
            "value": 10.999283790588379,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.557170867919922,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 26.954252243041992,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 33.08305740356445,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.453495025634766,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 17.3426513671875,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.0528178215026855,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.564933776855469,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.8977055549621582,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.202458143234253,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3494441509246826,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.44100284576416016,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
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
      "init": "2026102900",
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
            "value": 10.794387817382812,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 12.539924621582031,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 25.564987182617188,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 30.29450798034668,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.250946998596191,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 15.801048278808594,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.363995552062988,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.138116836547852,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.43317675590515137,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6845593452453613,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.11299848556518555,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.20042061805725098,
            "lead_hour": 138,
            "valid_time": "2026-11-03 18:00 UTC"
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
      "init": "2026102900",
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
            "value": 12.037002563476562,
            "lead_hour": 120,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 14.383121490478516,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 33.755313873291016,
            "lead_hour": 120,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 39.449127197265625,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.623744010925293,
            "lead_hour": 120,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 18.185239791870117,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.8801798820495605,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.0814104080200195,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5142450332641602,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7432818412780762,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1471996307373047,
            "lead_hour": 132,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.23415684700012207,
            "lead_hour": 126,
            "valid_time": "2026-11-03 06:00 UTC"
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
      "init": "2026102900",
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
            "value": 2.8998141288757324,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.386673927307129,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.645030975341797,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.54161262512207,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1572539806365967,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.140134572982788,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.06717443466186523,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1390993595123291,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05386471748352051,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7313728332519531,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.009369850158691406,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2447664737701416,
            "lead_hour": 90,
            "valid_time": "2026-11-01 18:00 UTC"
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
      "init": "2026102900",
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
            "value": 12.018244743347168,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.740157127380371,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 27.075529098510742,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 30.6917667388916,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.978033065795898,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 17.42173957824707,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.597263336181641,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.729245185852051,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5777359008789062,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.413869857788086,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20333528518676758,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6385564804077148,
            "lead_hour": 96,
            "valid_time": "2026-11-02 00:00 UTC"
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
      "init": "2026102900",
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
            "value": 4.874638557434082,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.693141460418701,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.561793327331543,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.660526275634766,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.090141296386719,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.071800231933594,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.31378173828125,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5748798847198486,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.39270520210266113,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6090879440307617,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.14833807945251465,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.26046037673950195,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
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
      "init": "2026102900",
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
            "value": 4.908102989196777,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.784933567047119,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.533832550048828,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 16.132265090942383,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.243682861328125,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.660466194152832,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4419376850128174,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.232074737548828,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5401372909545898,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9293258190155029,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2429187297821045,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.44777989387512207,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
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
      "init": "2026102900",
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
            "value": 1.0096805095672607,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4924196004867554,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3892710208892822,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.3396670818328857,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.19449591636657715,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.47084689140319824,
            "lead_hour": 150,
            "valid_time": "2026-11-04 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0058650970458984375,
            "lead_hour": 150,
            "valid_time": "2026-11-04 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04115104675292969,
            "lead_hour": 150,
            "valid_time": "2026-11-04 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05363821983337402,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3196597099304199,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.01156926155090332,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1316368579864502,
            "lead_hour": 84,
            "valid_time": "2026-11-01 12:00 UTC"
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
      "init": "2026102900",
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
            "value": 2.9968338012695312,
            "lead_hour": 54,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.245548725128174,
            "lead_hour": 54,
            "valid_time": "2026-10-31 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.4536898136138916,
            "lead_hour": 54,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.358099937438965,
            "lead_hour": 54,
            "valid_time": "2026-10-31 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.2412259578704834,
            "lead_hour": 54,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.33996105194091797,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.005125999450683594,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.023877620697021484,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.012177228927612305,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04869699478149414,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.002086162567138672,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.011408329010009766,
            "lead_hour": 192,
            "valid_time": "2026-11-06 00:00 UTC"
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
