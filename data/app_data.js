window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026102700",
  "created_utc": "2026-10-27 13:20 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026102700/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026102700_with_2yr5yrARI.nc",
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
      "init": "2026102700",
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
            "value": 24.249231338500977,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 25.050365447998047,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 57.44864273071289,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 58.91646194458008,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 34.81524658203125,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 36.11884307861328,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 12.965226173400879,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.718342781066895,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 4.391515254974365,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.846930503845215,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.511286735534668,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.8274059295654297,
            "lead_hour": 138,
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
      "init": "2026102700",
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
            "value": 6.664461135864258,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.8759379386901855,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.629791259765625,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 17.256385803222656,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.835288047790527,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.060587406158447,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4769315719604492,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5385210514068604,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.45782923698425293,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5826056003570557,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.15017390251159668,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.20627379417419434,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
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
      "init": "2026102700",
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
            "value": 7.260461330413818,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 8.64052963256836,
            "lead_hour": 96,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 18.051761627197266,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 22.263504028320312,
            "lead_hour": 96,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.765698432922363,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 9.331446647644043,
            "lead_hour": 96,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8266856670379639,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.0019114017486572,
            "lead_hour": 96,
            "valid_time": "2026-10-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3479421138763428,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.35376548767089844,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.14382600784301758,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1469433307647705,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
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
      "init": "2026102700",
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
            "value": 5.923669815063477,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 6.960054397583008,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.263981819152832,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 16.968273162841797,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.27107048034668,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 7.594281196594238,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.5867769718170166,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9549906253814697,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09230971336364746,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.18818974494934082,
            "lead_hour": 102,
            "valid_time": "2026-10-31 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.021964311599731445,
            "lead_hour": 180,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0490725040435791,
            "lead_hour": 108,
            "valid_time": "2026-10-31 12:00 UTC"
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
      "init": "2026102700",
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
            "value": 6.0440754890441895,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.669809818267822,
            "lead_hour": 174,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.898347854614258,
            "lead_hour": 168,
            "valid_time": "2026-11-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 16.46417999267578,
            "lead_hour": 174,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.191581726074219,
            "lead_hour": 174,
            "valid_time": "2026-11-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 7.106781005859375,
            "lead_hour": 174,
            "valid_time": "2026-11-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.482158899307251,
            "lead_hour": 174,
            "valid_time": "2026-11-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7008185386657715,
            "lead_hour": 180,
            "valid_time": "2026-11-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.346297025680542,
            "lead_hour": 180,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.464630126953125,
            "lead_hour": 180,
            "valid_time": "2026-11-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1267075538635254,
            "lead_hour": 180,
            "valid_time": "2026-11-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1766800880432129,
            "lead_hour": 180,
            "valid_time": "2026-11-03 12:00 UTC"
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
      "init": "2026102700",
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
            "value": 4.353697299957275,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.260310649871826,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.353940963745117,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 12.815457344055176,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.482908010482788,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.4180989265441895,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5278825759887695,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6868898868560791,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.45700669288635254,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8918931484222412,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.14696121215820312,
            "lead_hour": 138,
            "valid_time": "2026-11-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8838474750518799,
            "lead_hour": 138,
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
      "init": "2026102700",
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
            "value": 2.7471210956573486,
            "lead_hour": 30,
            "valid_time": "2026-10-28 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.494946002960205,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.338101387023926,
            "lead_hour": 30,
            "valid_time": "2026-10-28 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.260701179504395,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.7483880519866943,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.965001106262207,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8335649967193604,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5503168106079102,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05893111228942871,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.24110674858093262,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.01779794692993164,
            "lead_hour": 144,
            "valid_time": "2026-11-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09695887565612793,
            "lead_hour": 144,
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
      "init": "2026102700",
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
            "value": 8.54941177368164,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.702523231506348,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 21.669281005859375,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 22.232330322265625,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.538555145263672,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.667271614074707,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.2819578647613525,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.381044626235962,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6109476089477539,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.777512788772583,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20755529403686523,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3008842468261719,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
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
      "init": "2026102700",
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
            "value": 8.098640441894531,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.590766906738281,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 20.283061981201172,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 21.614063262939453,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.996761322021484,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.689021110534668,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.2134900093078613,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.446293830871582,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7496893405914307,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9131371974945068,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.31186938285827637,
            "lead_hour": 162,
            "valid_time": "2026-11-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.39007067680358887,
            "lead_hour": 156,
            "valid_time": "2026-11-02 12:00 UTC"
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
      "init": "2026102700",
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
            "value": 2.2963364124298096,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.2558724880218506,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.252254009246826,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.635921478271484,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.907789707183838,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.969592809677124,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.3538191318511963,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6170749664306641,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.014852523803711,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7800331115722656,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4886150360107422,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1173546314239502,
            "lead_hour": 186,
            "valid_time": "2026-11-03 18:00 UTC"
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
      "init": "2026102700",
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
            "value": 7.71990966796875,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          },
          "box_max_peak": {
            "value": 16.720760345458984,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 17.671113967895508,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          },
          "box_max_peak": {
            "value": 61.29429244995117,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.766955852508545,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          },
          "box_max_peak": {
            "value": 16.317337036132812,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.02612471580505371,
            "lead_hour": 96,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4278242588043213,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07048845291137695,
            "lead_hour": 96,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2763798236846924,
            "lead_hour": 42,
            "valid_time": "2026-10-28 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.009226799011230469,
            "lead_hour": 96,
            "valid_time": "2026-10-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12916922569274902,
            "lead_hour": 42,
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
