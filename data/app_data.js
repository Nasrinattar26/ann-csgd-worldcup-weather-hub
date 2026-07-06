window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026070600",
  "created_utc": "2026-07-06 13:20 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026070600/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026070600_with_2yr5yrARI.nc",
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
      "init": "2026070600",
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
            "value": 6.35793924331665,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 9.638778686523438,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.349245071411133,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 23.876262664794922,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.873744964599609,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 11.324893951416016,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.9694805145263672,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.1328558921813965,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.8411765098571777,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9261131286621094,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5586743354797363,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5889832973480225,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 10.885979652404785,
            "lead_hour": 36,
            "valid_time": "2026-07-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 15.114946365356445,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 31.071847915649414,
            "lead_hour": 36,
            "valid_time": "2026-07-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 43.16468048095703,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.413533210754395,
            "lead_hour": 36,
            "valid_time": "2026-07-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 18.920045852661133,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.6873061656951904,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.607785701751709,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5623042583465576,
            "lead_hour": 186,
            "valid_time": "2026-07-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8625268936157227,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.24042129516601562,
            "lead_hour": 186,
            "valid_time": "2026-07-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.36602020263671875,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 4.345967769622803,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.050441265106201,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.375177383422852,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 12.189316749572754,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.10693883895874,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.902953147888184,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9412765502929688,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.218348741531372,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.29390454292297363,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3864169120788574,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1461625099182129,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.19851326942443848,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 4.404315948486328,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 6.2956461906433105,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.626113891601562,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.931549072265625,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.005556106567383,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.307344436645508,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.7957687377929688,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.6184022426605225,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.24347901344299316,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.28855204582214355,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07919073104858398,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0976264476776123,
            "lead_hour": 138,
            "valid_time": "2026-07-11 18:00 UTC"
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
      "init": "2026070600",
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
            "value": 5.573271751403809,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.860116958618164,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 12.916988372802734,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 16.46083641052246,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.209874153137207,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.633316516876221,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8898487091064453,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.119016647338867,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.561290979385376,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6426870822906494,
            "lead_hour": 108,
            "valid_time": "2026-07-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2327442169189453,
            "lead_hour": 132,
            "valid_time": "2026-07-11 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.26767849922180176,
            "lead_hour": 132,
            "valid_time": "2026-07-11 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 0.08292374014854431,
            "lead_hour": 192,
            "valid_time": "2026-07-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1565265655517578,
            "lead_hour": 192,
            "valid_time": "2026-07-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.940696716308594e-05,
            "lead_hour": 192,
            "valid_time": "2026-07-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0199735164642334,
            "lead_hour": 192,
            "valid_time": "2026-07-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.00019669532775878906,
            "lead_hour": 192,
            "valid_time": "2026-07-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.152557373046875e-05,
            "lead_hour": 192,
            "valid_time": "2026-07-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 11.08357048034668,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.438071250915527,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 24.656469345092773,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 29.67584800720215,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.634342193603516,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 16.92439842224121,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.1580610275268555,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.641727447509766,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5620896816253662,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4243721961975098,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20402073860168457,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6578326225280762,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
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
      "init": "2026070600",
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
            "value": 12.9595947265625,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 18.132341384887695,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 38.0357551574707,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 54.61743927001953,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.076316833496094,
            "lead_hour": 24,
            "valid_time": "2026-07-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 24.386167526245117,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.102065086364746,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.1826066970825195,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6288886070251465,
            "lead_hour": 174,
            "valid_time": "2026-07-13 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9145677089691162,
            "lead_hour": 18,
            "valid_time": "2026-07-06 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2783775329589844,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.38849711418151855,
            "lead_hour": 180,
            "valid_time": "2026-07-13 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 17.823040008544922,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 20.43153190612793,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 49.422462463378906,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 58.60437774658203,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 24.27732276916504,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 29.447959899902344,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.744928359985352,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.881075859069824,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.674962043762207,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.3766040802001953,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5813896656036377,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9951293468475342,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 0.02606012672185898,
            "lead_hour": 186,
            "valid_time": "2026-07-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.05201128497719765,
            "lead_hour": 42,
            "valid_time": "2026-07-07 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-07-06 12:00 UTC"
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
      "init": "2026070600",
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
            "value": 0.39667508006095886,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.325191855430603,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.2479076385498047,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6885817050933838,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.013655424118041992,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.19978880882263184,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.556510925292969e-05,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.004178285598754883,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.000286102294921875,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.011962652206420898,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.1920928955078125e-05,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0013947486877441406,
            "lead_hour": 78,
            "valid_time": "2026-07-09 06:00 UTC"
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
