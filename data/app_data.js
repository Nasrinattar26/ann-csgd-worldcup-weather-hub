window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026111200",
  "created_utc": "2026-11-12 14:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026111200/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026111200_with_2yr5yrARI.nc",
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
      "init": "2026111200",
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
            "value": 1.795596718788147,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.0086708068847656,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.010706901550293,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.540061950683594,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3750433921813965,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6095638275146484,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.2306222915649414,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.28664469718933105,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.03899335861206055,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04001259803771973,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.01614093780517578,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01614093780517578,
            "lead_hour": 126,
            "valid_time": "2026-11-17 06:00 UTC"
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
      "init": "2026111200",
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
            "value": 17.797950744628906,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 19.969287872314453,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 69.77961730957031,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 77.27870178222656,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 17.061424255371094,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 24.549896240234375,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.2176046371459961,
            "lead_hour": 36,
            "valid_time": "2026-11-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5533993244171143,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.005841255187988281,
            "lead_hour": 36,
            "valid_time": "2026-11-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.010544061660766602,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0001430511474609375,
            "lead_hour": 36,
            "valid_time": "2026-11-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.00029206275939941406,
            "lead_hour": 36,
            "valid_time": "2026-11-13 12:00 UTC"
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
      "init": "2026111200",
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
            "value": 10.393041610717773,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 11.429586410522461,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 27.7313289642334,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 30.914997100830078,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.583548545837402,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.13363265991211,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.3399949073791504,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.6681840419769287,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2887904644012451,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3460526466369629,
            "lead_hour": 102,
            "valid_time": "2026-11-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07593631744384766,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09510517120361328,
            "lead_hour": 102,
            "valid_time": "2026-11-16 06:00 UTC"
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
      "init": "2026111200",
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
            "value": 11.840739250183105,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.313057899475098,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 29.474294662475586,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 32.5418586730957,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.631152153015137,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 16.926855087280273,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.281658172607422,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.369919776916504,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.30646324157714844,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3839075565338135,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.06448030471801758,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09517669677734375,
            "lead_hour": 108,
            "valid_time": "2026-11-16 12:00 UTC"
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
      "init": "2026111200",
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
            "value": 0.9302242994308472,
            "lead_hour": 180,
            "valid_time": "2026-11-19 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.3429999351501465,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.9492149353027344,
            "lead_hour": 180,
            "valid_time": "2026-11-19 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.788351058959961,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5930721759796143,
            "lead_hour": 186,
            "valid_time": "2026-11-19 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.179271936416626,
            "lead_hour": 96,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0813901424407959,
            "lead_hour": 186,
            "valid_time": "2026-11-19 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.14197826385498047,
            "lead_hour": 186,
            "valid_time": "2026-11-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.010186433792114258,
            "lead_hour": 186,
            "valid_time": "2026-11-19 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.024259090423583984,
            "lead_hour": 186,
            "valid_time": "2026-11-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.002205371856689453,
            "lead_hour": 186,
            "valid_time": "2026-11-19 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.006210803985595703,
            "lead_hour": 186,
            "valid_time": "2026-11-19 18:00 UTC"
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
      "init": "2026111200",
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
            "value": 7.888312339782715,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.371521949768066,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 20.605606079101562,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 25.348466873168945,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.228094100952148,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.143036842346191,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.0684549808502197,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3582170009613037,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.9205102920532227,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.438251495361328,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2821922302246094,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.093750238418579,
            "lead_hour": 138,
            "valid_time": "2026-11-17 18:00 UTC"
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
      "init": "2026111200",
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
            "value": 6.318238735198975,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.673108100891113,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.729971885681152,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 14.641982078552246,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.364833354949951,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.804059982299805,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.75610089302063,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.908158302307129,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3162264823913574,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5887746810913086,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.11953115463256836,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.27817487716674805,
            "lead_hour": 156,
            "valid_time": "2026-11-18 12:00 UTC"
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
      "init": "2026111200",
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
            "value": 12.660783767700195,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 16.518796920776367,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 41.324310302734375,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 58.57293701171875,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.153295516967773,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 16.87818717956543,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.17020702362060547,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8800327777862549,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0026345252990722656,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03947615623474121,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 6.556510925292969e-05,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0025272369384765625,
            "lead_hour": 30,
            "valid_time": "2026-11-13 06:00 UTC"
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
      "init": "2026111200",
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
            "value": 8.149069786071777,
            "lead_hour": 42,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.613343238830566,
            "lead_hour": 24,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.724761962890625,
            "lead_hour": 42,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 26.157337188720703,
            "lead_hour": 24,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.271026372909546,
            "lead_hour": 42,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.051745891571045,
            "lead_hour": 24,
            "valid_time": "2026-11-13 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.06878376007080078,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1263737678527832,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.013363361358642578,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.031012296676635742,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0034689903259277344,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.008827447891235352,
            "lead_hour": 162,
            "valid_time": "2026-11-18 18:00 UTC"
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
      "init": "2026111200",
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
            "value": 17.60394287109375,
            "lead_hour": 54,
            "valid_time": "2026-11-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 20.953594207763672,
            "lead_hour": 48,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 60.78997802734375,
            "lead_hour": 54,
            "valid_time": "2026-11-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 73.82758331298828,
            "lead_hour": 48,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 20.78951072692871,
            "lead_hour": 54,
            "valid_time": "2026-11-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 29.657257080078125,
            "lead_hour": 48,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.1651923656463623,
            "lead_hour": 168,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.98420786857605,
            "lead_hour": 114,
            "valid_time": "2026-11-16 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 8.268869400024414,
            "lead_hour": 54,
            "valid_time": "2026-11-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 8.268869400024414,
            "lead_hour": 54,
            "valid_time": "2026-11-14 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.979302406311035,
            "lead_hour": 168,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.029292106628418,
            "lead_hour": 168,
            "valid_time": "2026-11-19 00:00 UTC"
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
      "init": "2026111200",
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
            "value": 14.070476531982422,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 20.648958206176758,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 45.643287658691406,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 68.97282409667969,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.425951957702637,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 29.412752151489258,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8055746555328369,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.035229444503784,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.8153131008148193,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.985772609710693,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.33617615699768066,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.443415880203247,
            "lead_hour": 90,
            "valid_time": "2026-11-15 18:00 UTC"
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
