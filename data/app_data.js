window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026112700",
  "created_utc": "2026-11-27 14:05 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026112700/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026112700_with_2yr5yrARI.nc",
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
      "init": "2026112700",
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
            "value": 10.757574081420898,
            "lead_hour": 186,
            "valid_time": "2026-12-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.653555870056152,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 25.297481536865234,
            "lead_hour": 186,
            "valid_time": "2026-12-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 30.635541915893555,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.259625434875488,
            "lead_hour": 186,
            "valid_time": "2026-12-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 17.338430404663086,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.467063903808594,
            "lead_hour": 186,
            "valid_time": "2026-12-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 6.650245189666748,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.5350282192230225,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.456486225128174,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.9299814701080322,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4584541320800781,
            "lead_hour": 180,
            "valid_time": "2026-12-04 12:00 UTC"
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
      "init": "2026112700",
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
            "value": 34.217586517333984,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 36.54368209838867,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 98.42837524414062,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 99.23661041259766,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 74.03388977050781,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 80.36835479736328,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.277616500854492,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.451253890991211,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7865428924560547,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.756894588470459,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04083514213562012,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09848475456237793,
            "lead_hour": 12,
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
      "init": "2026112700",
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
            "value": 2.2725563049316406,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.4644598960876465,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.223345756530762,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.101469039916992,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.0554065704345703,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.4346282482147217,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.4450798034667969,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8418142795562744,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07037520408630371,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.13774633407592773,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.02294778823852539,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04401803016662598,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
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
      "init": "2026112700",
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
            "value": 6.094059467315674,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.203579425811768,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.467185974121094,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 17.080556869506836,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.689935684204102,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.203768730163574,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8698275089263916,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.434694766998291,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.15023350715637207,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.18150806427001953,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.03732442855834961,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.05043745040893555,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
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
      "init": "2026112700",
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
            "value": 5.923273086547852,
            "lead_hour": 60,
            "valid_time": "2026-11-29 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.889811038970947,
            "lead_hour": 60,
            "valid_time": "2026-11-29 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.732464790344238,
            "lead_hour": 60,
            "valid_time": "2026-11-29 12:00 UTC"
          },
          "box_max_peak": {
            "value": 14.870941162109375,
            "lead_hour": 60,
            "valid_time": "2026-11-29 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.224898338317871,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.0735254287719727,
            "lead_hour": 174,
            "valid_time": "2026-12-04 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.35080909729003906,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5356490612030029,
            "lead_hour": 174,
            "valid_time": "2026-12-04 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0500798225402832,
            "lead_hour": 168,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.10300874710083008,
            "lead_hour": 174,
            "valid_time": "2026-12-04 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.011980533599853516,
            "lead_hour": 174,
            "valid_time": "2026-12-04 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.028759241104125977,
            "lead_hour": 174,
            "valid_time": "2026-12-04 06:00 UTC"
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
      "init": "2026112700",
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
            "value": 26.713123321533203,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 29.068708419799805,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 74.43862915039062,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 79.92428588867188,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 43.31620788574219,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 48.80310821533203,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.093539237976074,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.137763977050781,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 9.850591659545898,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 39.572261810302734,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 3.676861524581909,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 23.749006271362305,
            "lead_hour": 120,
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
      "init": "2026112700",
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
            "value": 3.6420350074768066,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.96153450012207,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.493781089782715,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 11.60525131225586,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.700321912765503,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.351406097412109,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9537816047668457,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5123963356018066,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04310011863708496,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.17952919006347656,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.010412931442260742,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.06389021873474121,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
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
      "init": "2026112700",
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
            "value": 10.81442928314209,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 15.006477355957031,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 32.16202926635742,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 57.94306945800781,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.0257368087768555,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.118963241577148,
            "lead_hour": 12,
            "valid_time": "2026-11-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.787198543548584,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1579692363739014,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.19212961196899414,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3380715847015381,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.06123781204223633,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12290477752685547,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
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
      "init": "2026112700",
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
            "value": 9.755911827087402,
            "lead_hour": 84,
            "valid_time": "2026-11-30 12:00 UTC"
          },
          "box_max_peak": {
            "value": 10.881318092346191,
            "lead_hour": 84,
            "valid_time": "2026-11-30 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 27.604412078857422,
            "lead_hour": 84,
            "valid_time": "2026-11-30 12:00 UTC"
          },
          "box_max_peak": {
            "value": 32.25954818725586,
            "lead_hour": 84,
            "valid_time": "2026-11-30 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.78022575378418,
            "lead_hour": 84,
            "valid_time": "2026-11-30 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.896268367767334,
            "lead_hour": 84,
            "valid_time": "2026-11-30 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3061940670013428,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4624714851379395,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.43120384216308594,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5371928215026855,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.17383694648742676,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.22035837173461914,
            "lead_hour": 192,
            "valid_time": "2026-12-05 00:00 UTC"
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
      "init": "2026112700",
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
            "value": 8.239596366882324,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 12.065587043762207,
            "lead_hour": 114,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 22.035438537597656,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 34.87166213989258,
            "lead_hour": 114,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.378120422363281,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 12.718147277832031,
            "lead_hour": 114,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5909562110900879,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7001926898956299,
            "lead_hour": 114,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.708357572555542,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.463326930999756,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.9515583515167236,
            "lead_hour": 120,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.312326431274414,
            "lead_hour": 120,
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
      "init": "2026112700",
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
            "value": 15.577589988708496,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 18.90761947631836,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 52.64529037475586,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 63.759063720703125,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.0031681060791,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 24.738656997680664,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.880277156829834,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.17093825340271,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.0570576190948486,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.466390609741211,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.39436817169189453,
            "lead_hour": 162,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9889781475067139,
            "lead_hour": 90,
            "valid_time": "2026-11-30 18:00 UTC"
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
