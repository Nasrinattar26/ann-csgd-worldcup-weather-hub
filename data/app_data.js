window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026102600",
  "created_utc": "2026-10-26 13:20 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026102600/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026102600_with_2yr5yrARI.nc",
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
      "init": "2026102600",
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
            "value": 8.068076133728027,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.724976539611816,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 18.421024322509766,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 22.369796752929688,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.570133209228516,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 11.82396411895752,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.292858600616455,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.122442245483398,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.1633455753326416,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3951241970062256,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.698089599609375,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8103907108306885,
            "lead_hour": 162,
            "valid_time": "2026-11-01 18:00 UTC"
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
      "init": "2026102600",
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
            "value": 3.517345666885376,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.885364055633545,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.277440071105957,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.200662612915039,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.271561861038208,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.6924123764038086,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.6985306739807129,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8068382740020752,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.21960139274597168,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.32848119735717773,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07376670837402344,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12192130088806152,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
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
      "init": "2026102600",
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
            "value": 3.7280805110931396,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.424235820770264,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.66069221496582,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          },
          "box_max_peak": {
            "value": 10.531801223754883,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.8873910903930664,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.51585054397583,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.0599076747894287,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2612640857696533,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.22115707397460938,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.29508471488952637,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.08453130722045898,
            "lead_hour": 138,
            "valid_time": "2026-10-31 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.11985301971435547,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
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
      "init": "2026102600",
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
            "value": 3.397465944290161,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.846987247467041,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.932281494140625,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 11.52631664276123,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.3802032470703125,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.031972885131836,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8376061916351318,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2794256210327148,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04913806915283203,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07804632186889648,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.00959634780883789,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.016874074935913086,
            "lead_hour": 120,
            "valid_time": "2026-10-31 00:00 UTC"
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
      "init": "2026102600",
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
            "value": 2.5757837295532227,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.4420454502105713,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.950945854187012,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.020030975341797,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.4336934089660645,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.4750640392303467,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5645275115966797,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8887887001037598,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.12589693069458008,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.20987391471862793,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04214644432067871,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.08269548416137695,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
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
      "init": "2026102600",
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
            "value": 11.7186279296875,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 12.42055606842041,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 31.49118423461914,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 33.27992630004883,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.66894245147705,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 14.908581733703613,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.9094576835632324,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.354179859161377,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.5772154331207275,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.845628261566162,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.9830355644226074,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.164653778076172,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
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
      "init": "2026102600",
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
            "value": 7.3256754875183105,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.99169921875,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 17.82009506225586,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 22.142379760742188,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.132112503051758,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 10.409235954284668,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.1661460399627686,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.862107753753662,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09692907333374023,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.21396279335021973,
            "lead_hour": 72,
            "valid_time": "2026-10-29 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.02288222312927246,
            "lead_hour": 18,
            "valid_time": "2026-10-26 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07449984550476074,
            "lead_hour": 72,
            "valid_time": "2026-10-29 00:00 UTC"
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
      "init": "2026102600",
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
            "value": 3.943042755126953,
            "lead_hour": 174,
            "valid_time": "2026-11-02 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.510543346405029,
            "lead_hour": 174,
            "valid_time": "2026-11-02 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.331083297729492,
            "lead_hour": 174,
            "valid_time": "2026-11-02 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.792219161987305,
            "lead_hour": 174,
            "valid_time": "2026-11-02 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.8017332553863525,
            "lead_hour": 174,
            "valid_time": "2026-11-02 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.36936616897583,
            "lead_hour": 174,
            "valid_time": "2026-11-02 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.912928581237793,
            "lead_hour": 192,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.028120517730713,
            "lead_hour": 192,
            "valid_time": "2026-11-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2577662467956543,
            "lead_hour": 192,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.32871365547180176,
            "lead_hour": 174,
            "valid_time": "2026-11-02 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09303689002990723,
            "lead_hour": 192,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12580156326293945,
            "lead_hour": 180,
            "valid_time": "2026-11-02 12:00 UTC"
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
      "init": "2026102600",
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
            "value": 4.338376522064209,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.401777267456055,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.341620445251465,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 10.533798217773438,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.210042953491211,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.210042953491211,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9385049343109131,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.009225845336914,
            "lead_hour": 192,
            "valid_time": "2026-11-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.30899643898010254,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.37058591842651367,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1284778118133545,
            "lead_hour": 192,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.15877485275268555,
            "lead_hour": 186,
            "valid_time": "2026-11-02 18:00 UTC"
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
      "init": "2026102600",
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
            "value": 1.4877994060516357,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.7679028511047363,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.2106757164001465,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.378573417663574,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9965896606445312,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.275240421295166,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.13896822929382324,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4033207893371582,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4777371883392334,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0390102863311768,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20302534103393555,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6087660789489746,
            "lead_hour": 168,
            "valid_time": "2026-11-02 00:00 UTC"
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
      "init": "2026102600",
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
            "value": 5.749276638031006,
            "lead_hour": 72,
            "valid_time": "2026-10-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 14.128988265991211,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.896337509155273,
            "lead_hour": 72,
            "valid_time": "2026-10-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 47.13011932373047,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.0840535163879395,
            "lead_hour": 72,
            "valid_time": "2026-10-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 12.378316879272461,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.013059377670288086,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.507664680480957,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04448890686035156,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2869775295257568,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.004845857620239258,
            "lead_hour": 114,
            "valid_time": "2026-10-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.18588900566101074,
            "lead_hour": 66,
            "valid_time": "2026-10-28 18:00 UTC"
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
