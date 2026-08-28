window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026082800",
  "created_utc": "2026-08-28 13:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026082800/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026082800_with_2yr5yrARI.nc",
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
      "init": "2026082800",
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
            "value": 6.433869361877441,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.990278244018555,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.947937965393066,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 23.101764678955078,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.4932403564453125,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.871112823486328,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4540314674377441,
            "lead_hour": 72,
            "valid_time": "2026-08-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.1961212158203125,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4247725009918213,
            "lead_hour": 72,
            "valid_time": "2026-08-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4427194595336914,
            "lead_hour": 72,
            "valid_time": "2026-08-31 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.23197531700134277,
            "lead_hour": 72,
            "valid_time": "2026-08-31 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.23221969604492188,
            "lead_hour": 72,
            "valid_time": "2026-08-31 00:00 UTC"
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
      "init": "2026082800",
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
            "value": 5.036832809448242,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.448212623596191,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.936372756958008,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.216865539550781,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.329984664916992,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.731844902038574,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4110386371612549,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5617966651916504,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5245864391326904,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6892979145050049,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2097785472869873,
            "lead_hour": 174,
            "valid_time": "2026-09-04 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.29886960983276367,
            "lead_hour": 174,
            "valid_time": "2026-09-04 06:00 UTC"
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
      "init": "2026082800",
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
            "value": 0.18131360411643982,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5413506031036377,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.029718875885009766,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.2993674278259277,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0004112720489501953,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9979546070098877,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.13220906257629395,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01131892204284668,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0022649765014648438,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
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
      "init": "2026082800",
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
            "value": 10.055452346801758,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 12.790778160095215,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 25.2298526763916,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 32.074249267578125,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.806285858154297,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 15.999770164489746,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.144717216491699,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.654627799987793,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1862168312072754,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.25157928466796875,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.035130977630615234,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04992485046386719,
            "lead_hour": 12,
            "valid_time": "2026-08-28 12:00 UTC"
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
      "init": "2026082800",
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
            "value": 1.253038763999939,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4899524450302124,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.829045057296753,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.367072343826294,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.127934455871582,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.478135585784912,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.25463104248046875,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3981292247772217,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05574226379394531,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.11367201805114746,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.018465518951416016,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04448890686035156,
            "lead_hour": 180,
            "valid_time": "2026-09-04 12:00 UTC"
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
      "init": "2026082800",
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
            "value": 3.182603120803833,
            "lead_hour": 138,
            "valid_time": "2026-09-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.775099992752075,
            "lead_hour": 138,
            "valid_time": "2026-09-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.441079616546631,
            "lead_hour": 138,
            "valid_time": "2026-09-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.925968170166016,
            "lead_hour": 138,
            "valid_time": "2026-09-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.003484010696411,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.6679089069366455,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.7006049156188965,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8454322814941406,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6284177303314209,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.7015328407287598,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.26925206184387207,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5160679817199707,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
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
      "init": "2026082800",
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
            "value": 4.202912330627441,
            "lead_hour": 54,
            "valid_time": "2026-08-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.681654453277588,
            "lead_hour": 96,
            "valid_time": "2026-09-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.716218948364258,
            "lead_hour": 54,
            "valid_time": "2026-08-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 12.7774658203125,
            "lead_hour": 96,
            "valid_time": "2026-09-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.517543315887451,
            "lead_hour": 54,
            "valid_time": "2026-08-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 6.494826316833496,
            "lead_hour": 96,
            "valid_time": "2026-09-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.5978455543518066,
            "lead_hour": 162,
            "valid_time": "2026-09-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.2025465965270996,
            "lead_hour": 96,
            "valid_time": "2026-09-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.19835233688354492,
            "lead_hour": 162,
            "valid_time": "2026-09-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.43799877166748047,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07846355438232422,
            "lead_hour": 162,
            "valid_time": "2026-09-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.20349621772766113,
            "lead_hour": 168,
            "valid_time": "2026-09-04 00:00 UTC"
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
      "init": "2026082800",
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
            "value": 5.052578926086426,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.564010143280029,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.847454071044922,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 13.198346138000488,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.447870254516602,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 6.001263618469238,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.5291094779968262,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6895055770874023,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.49616098403930664,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5802333354949951,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20585060119628906,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.24873614311218262,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
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
      "init": "2026082800",
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
            "value": 5.671760559082031,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.096071243286133,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.408994674682617,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 14.4728364944458,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.197154521942139,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.718820571899414,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.740175485610962,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8914878368377686,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6606638431549072,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7980883121490479,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.30010342597961426,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.370633602142334,
            "lead_hour": 132,
            "valid_time": "2026-09-02 12:00 UTC"
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
      "init": "2026082800",
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
            "value": 0.4084966778755188,
            "lead_hour": 24,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0164557695388794,
            "lead_hour": 186,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.1732170581817627,
            "lead_hour": 24,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.2081494331359863,
            "lead_hour": 186,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.005984306335449219,
            "lead_hour": 24,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.734400749206543,
            "lead_hour": 186,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1920928955078125e-05,
            "lead_hour": 24,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.11821985244750977,
            "lead_hour": 186,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0006198883056640625,
            "lead_hour": 24,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12694597244262695,
            "lead_hour": 186,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 4.172325134277344e-05,
            "lead_hour": 24,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.05564689636230469,
            "lead_hour": 186,
            "valid_time": "2026-09-04 18:00 UTC"
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
      "init": "2026082800",
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
            "value": 8.129877090454102,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.094013214111328,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 21.639299392700195,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 28.069931030273438,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.782656669616699,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 9.722625732421875,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.7621288299560547,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2633442878723145,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.389068365097046,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.219599485397339,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4100203514099121,
            "lead_hour": 156,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6983637809753418,
            "lead_hour": 150,
            "valid_time": "2026-09-03 06:00 UTC"
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
