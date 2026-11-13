window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026111300",
  "created_utc": "2026-11-13 14:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026111300/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026111300_with_2yr5yrARI.nc",
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
      "init": "2026111300",
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
            "value": 0.9197222590446472,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.87112557888031,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8847107887268066,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.202776908874512,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5380570888519287,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4680266380310059,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.06485581398010254,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.25481581687927246,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.007748603820800781,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03539323806762695,
            "lead_hour": 162,
            "valid_time": "2026-11-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.002688169479370117,
            "lead_hour": 114,
            "valid_time": "2026-11-17 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.014477968215942383,
            "lead_hour": 162,
            "valid_time": "2026-11-19 18:00 UTC"
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
      "init": "2026111300",
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
            "value": 8.497066497802734,
            "lead_hour": 12,
            "valid_time": "2026-11-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 10.012331008911133,
            "lead_hour": 12,
            "valid_time": "2026-11-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 17.625534057617188,
            "lead_hour": 12,
            "valid_time": "2026-11-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 26.348590850830078,
            "lead_hour": 12,
            "valid_time": "2026-11-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.6006002426147461,
            "lead_hour": 12,
            "valid_time": "2026-11-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.263338327407837,
            "lead_hour": 12,
            "valid_time": "2026-11-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.06989836692810059,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12423992156982422,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.014322996139526367,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.025510787963867188,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0031888484954833984,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.006777048110961914,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
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
      "init": "2026111300",
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
            "value": 17.1373233795166,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 19.176311492919922,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 50.46117401123047,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 55.744110107421875,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 22.611183166503906,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 26.926528930664062,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.4611334800720215,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.182408332824707,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5458354949951172,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.673896074295044,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.13846158981323242,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1522541046142578,
            "lead_hour": 72,
            "valid_time": "2026-11-16 00:00 UTC"
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
      "init": "2026111300",
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
            "value": 21.677837371826172,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          },
          "box_max_peak": {
            "value": 23.644023895263672,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 56.5582160949707,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          },
          "box_max_peak": {
            "value": 62.184654235839844,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 31.418174743652344,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          },
          "box_max_peak": {
            "value": 35.38575744628906,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.414094924926758,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.55927848815918,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.515437126159668,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.615990161895752,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09316802024841309,
            "lead_hour": 84,
            "valid_time": "2026-11-16 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12142062187194824,
            "lead_hour": 78,
            "valid_time": "2026-11-16 06:00 UTC"
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
      "init": "2026111300",
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
            "value": 0.880691409111023,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3868441581726074,
            "lead_hour": 168,
            "valid_time": "2026-11-20 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8352210521697998,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.9443204402923584,
            "lead_hour": 168,
            "valid_time": "2026-11-20 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5475640296936035,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8834481239318848,
            "lead_hour": 168,
            "valid_time": "2026-11-20 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.07189512252807617,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.11571645736694336,
            "lead_hour": 168,
            "valid_time": "2026-11-20 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.008565187454223633,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.018721818923950195,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0017821788787841797,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0046312808990478516,
            "lead_hour": 192,
            "valid_time": "2026-11-21 00:00 UTC"
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
      "init": "2026111300",
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
            "value": 5.400916576385498,
            "lead_hour": 168,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.921499729156494,
            "lead_hour": 108,
            "valid_time": "2026-11-17 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.214349746704102,
            "lead_hour": 168,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 17.5943603515625,
            "lead_hour": 108,
            "valid_time": "2026-11-17 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.747003555297852,
            "lead_hour": 168,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.60433292388916,
            "lead_hour": 174,
            "valid_time": "2026-11-20 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8148074150085449,
            "lead_hour": 174,
            "valid_time": "2026-11-20 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0090351104736328,
            "lead_hour": 174,
            "valid_time": "2026-11-20 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7155239582061768,
            "lead_hour": 174,
            "valid_time": "2026-11-20 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.6801884174346924,
            "lead_hour": 174,
            "valid_time": "2026-11-20 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2577841281890869,
            "lead_hour": 174,
            "valid_time": "2026-11-20 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3774514198303223,
            "lead_hour": 174,
            "valid_time": "2026-11-20 06:00 UTC"
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
      "init": "2026111300",
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
            "value": 10.625509262084961,
            "lead_hour": 120,
            "valid_time": "2026-11-18 00:00 UTC"
          },
          "box_max_peak": {
            "value": 11.058553695678711,
            "lead_hour": 120,
            "valid_time": "2026-11-18 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 24.05942726135254,
            "lead_hour": 120,
            "valid_time": "2026-11-18 00:00 UTC"
          },
          "box_max_peak": {
            "value": 25.1704158782959,
            "lead_hour": 120,
            "valid_time": "2026-11-18 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.056307792663574,
            "lead_hour": 120,
            "valid_time": "2026-11-18 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.664955139160156,
            "lead_hour": 120,
            "valid_time": "2026-11-18 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.762273788452148,
            "lead_hour": 120,
            "valid_time": "2026-11-18 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.996204376220703,
            "lead_hour": 126,
            "valid_time": "2026-11-18 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5218684673309326,
            "lead_hour": 132,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9656906127929688,
            "lead_hour": 126,
            "valid_time": "2026-11-18 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20396113395690918,
            "lead_hour": 132,
            "valid_time": "2026-11-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.44878721237182617,
            "lead_hour": 126,
            "valid_time": "2026-11-18 06:00 UTC"
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
      "init": "2026111300",
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
            "value": 7.686604976654053,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.071971893310547,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.78736114501953,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 44.76741409301758,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.375889778137207,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 6.651020050048828,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.03699660301208496,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.08872151374816895,
            "lead_hour": 24,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.004601478576660156,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.014263391494750977,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0008404254913330078,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0035643577575683594,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
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
      "init": "2026111300",
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
            "value": 13.704421043395996,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 15.07667350769043,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 47.624290466308594,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 55.88033676147461,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.632081985473633,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 10.497045516967773,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.10920166969299316,
            "lead_hour": 18,
            "valid_time": "2026-11-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.16099810600280762,
            "lead_hour": 24,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.018966197967529297,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03476142883300781,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.005412101745605469,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.011217594146728516,
            "lead_hour": 180,
            "valid_time": "2026-11-20 12:00 UTC"
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
      "init": "2026111300",
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
            "value": 17.567623138427734,
            "lead_hour": 30,
            "valid_time": "2026-11-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 20.811691284179688,
            "lead_hour": 24,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 63.87513732910156,
            "lead_hour": 30,
            "valid_time": "2026-11-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 77.0057601928711,
            "lead_hour": 24,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.144386291503906,
            "lead_hour": 30,
            "valid_time": "2026-11-14 06:00 UTC"
          },
          "box_max_peak": {
            "value": 28.39807891845703,
            "lead_hour": 24,
            "valid_time": "2026-11-14 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.068596124649048,
            "lead_hour": 144,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.044527053833008,
            "lead_hour": 144,
            "valid_time": "2026-11-19 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 9.111517906188965,
            "lead_hour": 144,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.073569297790527,
            "lead_hour": 150,
            "valid_time": "2026-11-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 4.319375991821289,
            "lead_hour": 144,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.304184913635254,
            "lead_hour": 150,
            "valid_time": "2026-11-19 06:00 UTC"
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
      "init": "2026111300",
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
            "value": 11.91385269165039,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 15.901451110839844,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 37.77204132080078,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 54.73031997680664,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.9673357009887695,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 16.2233943939209,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.13163089752197266,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7772922515869141,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.41596293449401855,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9006609916687012,
            "lead_hour": 66,
            "valid_time": "2026-11-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04903674125671387,
            "lead_hour": 138,
            "valid_time": "2026-11-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2944767475128174,
            "lead_hour": 66,
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
