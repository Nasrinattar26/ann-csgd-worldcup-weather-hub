window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026112800",
  "created_utc": "2026-11-28 14:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026112800/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026112800_with_2yr5yrARI.nc",
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
      "init": "2026112800",
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
            "value": 16.41573143005371,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 20.57048797607422,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 48.70411682128906,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 62.22484588623047,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 21.00387191772461,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          },
          "box_max_peak": {
            "value": 29.78412437438965,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.512946128845215,
            "lead_hour": 168,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.667667388916016,
            "lead_hour": 168,
            "valid_time": "2026-12-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.0094752311706543,
            "lead_hour": 168,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.1538078784942627,
            "lead_hour": 168,
            "valid_time": "2026-12-05 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.1098504066467285,
            "lead_hour": 168,
            "valid_time": "2026-12-05 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.195138692855835,
            "lead_hour": 168,
            "valid_time": "2026-12-05 00:00 UTC"
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
      "init": "2026112800",
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
            "value": 17.818010330200195,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 19.426111221313477,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 67.49140930175781,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 74.40628814697266,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 18.449480056762695,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 23.1238956451416,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9837627410888672,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0542690753936768,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2780616283416748,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.36437511444091797,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.08352994918823242,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.11678934097290039,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
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
      "init": "2026112800",
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
            "value": 6.031211853027344,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 6.718883514404297,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.71574878692627,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 16.432512283325195,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.243806838989258,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.226103782653809,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.464611291885376,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8003582954406738,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.241851806640625,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.28926730155944824,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07875561714172363,
            "lead_hour": 138,
            "valid_time": "2026-12-03 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.08854269981384277,
            "lead_hour": 138,
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
      "init": "2026112800",
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
            "value": 12.654563903808594,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.520414352416992,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 31.559276580810547,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 33.60585021972656,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.8935546875,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 17.244976043701172,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.723173141479492,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 5.3732099533081055,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3438293933868408,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4768252372741699,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07274150848388672,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.12329220771789551,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
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
      "init": "2026112800",
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
            "value": 8.41457462310791,
            "lead_hour": 36,
            "valid_time": "2026-11-29 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.566571235656738,
            "lead_hour": 36,
            "valid_time": "2026-11-29 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.016170501708984,
            "lead_hour": 36,
            "valid_time": "2026-11-29 12:00 UTC"
          },
          "box_max_peak": {
            "value": 24.942434310913086,
            "lead_hour": 36,
            "valid_time": "2026-11-29 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.304379463195801,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.68829870223999,
            "lead_hour": 144,
            "valid_time": "2026-12-04 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.581580400466919,
            "lead_hour": 150,
            "valid_time": "2026-12-04 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6582558155059814,
            "lead_hour": 150,
            "valid_time": "2026-12-04 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.07271766662597656,
            "lead_hour": 150,
            "valid_time": "2026-12-04 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09372234344482422,
            "lead_hour": 150,
            "valid_time": "2026-12-04 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.015395879745483398,
            "lead_hour": 150,
            "valid_time": "2026-12-04 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.024825334548950195,
            "lead_hour": 150,
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
      "init": "2026112800",
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
            "value": 27.886009216308594,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 31.12934684753418,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 81.38868713378906,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 87.46114349365234,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 47.742820739746094,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 56.07126998901367,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.253399848937988,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 13.28931999206543,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 8.915239334106445,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 45.86656188964844,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.7457356452941895,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          },
          "box_max_peak": {
            "value": 27.001142501831055,
            "lead_hour": 96,
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
      "init": "2026112800",
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
            "value": 4.038042068481445,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.3746137619018555,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.577149391174316,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.132465362548828,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.4586966037750244,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.067336559295654,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.6106317043304443,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0105133056640625,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.014215707778930664,
            "lead_hour": 186,
            "valid_time": "2026-12-05 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07719993591308594,
            "lead_hour": 96,
            "valid_time": "2026-12-02 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.003415346145629883,
            "lead_hour": 186,
            "valid_time": "2026-12-05 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.024586915969848633,
            "lead_hour": 192,
            "valid_time": "2026-12-06 00:00 UTC"
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
      "init": "2026112800",
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
            "value": 16.746856689453125,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 18.096071243286133,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 62.03794479370117,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 67.67160034179688,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.952330589294434,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 19.76078224182129,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9281754493713379,
            "lead_hour": 174,
            "valid_time": "2026-12-05 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0005950927734375,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.20728111267089844,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.27333498001098633,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.061708688735961914,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09456872940063477,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
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
      "init": "2026112800",
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
            "value": 17.015199661254883,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 17.93128776550293,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 63.290489196777344,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 66.36266326904297,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.632688522338867,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          },
          "box_max_peak": {
            "value": 19.67896270751953,
            "lead_hour": 66,
            "valid_time": "2026-11-30 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.0282039642333984,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0310828685760498,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3029048442840576,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3471672534942627,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.11078715324401855,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.13273954391479492,
            "lead_hour": 180,
            "valid_time": "2026-12-05 12:00 UTC"
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
      "init": "2026112800",
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
            "value": 5.019721031188965,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.45738410949707,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.226302146911621,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 17.592561721801758,
            "lead_hour": 54,
            "valid_time": "2026-11-30 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.42728590965271,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.3101260662078857,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.1403212547302246,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2206861972808838,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.8626043796539307,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3242840766906738,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.24712681770324707,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6024479866027832,
            "lead_hour": 90,
            "valid_time": "2026-12-01 18:00 UTC"
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
      "init": "2026112800",
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
            "value": 14.154874801635742,
            "lead_hour": 78,
            "valid_time": "2026-12-01 06:00 UTC"
          },
          "box_max_peak": {
            "value": 21.691545486450195,
            "lead_hour": 72,
            "valid_time": "2026-12-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 48.421268463134766,
            "lead_hour": 72,
            "valid_time": "2026-12-01 00:00 UTC"
          },
          "box_max_peak": {
            "value": 76.10185241699219,
            "lead_hour": 72,
            "valid_time": "2026-12-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.255389213562012,
            "lead_hour": 78,
            "valid_time": "2026-12-01 06:00 UTC"
          },
          "box_max_peak": {
            "value": 31.869829177856445,
            "lead_hour": 72,
            "valid_time": "2026-12-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.41444897651672363,
            "lead_hour": 192,
            "valid_time": "2026-12-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.3246049880981445,
            "lead_hour": 72,
            "valid_time": "2026-12-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.8777916431427002,
            "lead_hour": 78,
            "valid_time": "2026-12-01 06:00 UTC"
          },
          "box_max_peak": {
            "value": 5.187118053436279,
            "lead_hour": 72,
            "valid_time": "2026-12-01 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.2197861671447754,
            "lead_hour": 192,
            "valid_time": "2026-12-06 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9556889533996582,
            "lead_hour": 72,
            "valid_time": "2026-12-01 00:00 UTC"
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
