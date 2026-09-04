window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026090400",
  "created_utc": "2026-09-04 13:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026090400/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026090400_with_2yr5yrARI.nc",
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
      "init": "2026090400",
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
            "value": 3.8547890186309814,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.321860313415527,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.818000793457031,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 12.248409271240234,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.170215129852295,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.948382377624512,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.2554407119750977,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8519699573516846,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.39345622062683105,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5678236484527588,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.22307038307189941,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.30745863914489746,
            "lead_hour": 84,
            "valid_time": "2026-09-07 12:00 UTC"
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
      "init": "2026090400",
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
            "value": 4.015612602233887,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.808648109436035,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.503639221191406,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.450100898742676,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.9602041244506836,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.398637771606445,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9409487247467041,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1305809020996094,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3307342529296875,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4154324531555176,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.12391209602355957,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.16283392906188965,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
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
      "init": "2026090400",
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
            "value": 2.351820230484009,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.519993782043457,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.282866954803467,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 10.834151268005371,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.7397046089172363,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.958052396774292,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.2663552761077881,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7072925567626953,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.025773048400878906,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.08602738380432129,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.006002187728881836,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.021594762802124023,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
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
      "init": "2026090400",
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
            "value": 6.342381954193115,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.572288513183594,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.611696243286133,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 21.631580352783203,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.45674467086792,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.480786323547363,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.4288246631622314,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.2572338581085205,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.06386637687683105,
            "lead_hour": 66,
            "valid_time": "2026-09-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.17927289009094238,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.013804435729980469,
            "lead_hour": 66,
            "valid_time": "2026-09-06 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03668665885925293,
            "lead_hour": 18,
            "valid_time": "2026-09-04 18:00 UTC"
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
      "init": "2026090400",
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
            "value": 1.0892552137374878,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4925037622451782,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.423793077468872,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.3881843090057373,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8841633796691895,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3994455337524414,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.1693248748779297,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.33632516860961914,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.03084540367126465,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09095072746276855,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.008887052536010742,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03376007080078125,
            "lead_hour": 132,
            "valid_time": "2026-09-09 12:00 UTC"
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
      "init": "2026090400",
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
            "value": 1.9216821193695068,
            "lead_hour": 72,
            "valid_time": "2026-09-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.225940227508545,
            "lead_hour": 72,
            "valid_time": "2026-09-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.896772861480713,
            "lead_hour": 72,
            "valid_time": "2026-09-07 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.009732723236084,
            "lead_hour": 72,
            "valid_time": "2026-09-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1023342609405518,
            "lead_hour": 114,
            "valid_time": "2026-09-08 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8253803253173828,
            "lead_hour": 72,
            "valid_time": "2026-09-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.1806318759918213,
            "lead_hour": 168,
            "valid_time": "2026-09-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2658367156982422,
            "lead_hour": 168,
            "valid_time": "2026-09-11 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.15915632247924805,
            "lead_hour": 168,
            "valid_time": "2026-09-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.375824213027954,
            "lead_hour": 72,
            "valid_time": "2026-09-07 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.059282779693603516,
            "lead_hour": 168,
            "valid_time": "2026-09-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5458354949951172,
            "lead_hour": 72,
            "valid_time": "2026-09-07 00:00 UTC"
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
      "init": "2026090400",
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
            "value": 4.551751613616943,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          },
          "box_max_peak": {
            "value": 8.550665855407715,
            "lead_hour": 48,
            "valid_time": "2026-09-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.389745712280273,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          },
          "box_max_peak": {
            "value": 19.9608154296875,
            "lead_hour": 48,
            "valid_time": "2026-09-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.034923553466797,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.127991676330566,
            "lead_hour": 48,
            "valid_time": "2026-09-06 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.575636863708496,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          },
          "box_max_peak": {
            "value": 3.3525466918945312,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.11635422706604004,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6139516830444336,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.035637617111206055,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.26301145553588867,
            "lead_hour": 54,
            "valid_time": "2026-09-06 06:00 UTC"
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
      "init": "2026090400",
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
            "value": 6.178181171417236,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.374090194702148,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.484053611755371,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 18.469024658203125,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.396200180053711,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          },
          "box_max_peak": {
            "value": 4.533690452575684,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.1429786682128906,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1688649654388428,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.34566521644592285,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4393577575683594,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.13208389282226562,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.18699169158935547,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
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
      "init": "2026090400",
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
            "value": 5.869882583618164,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.955851078033447,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.914669036865234,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          },
          "box_max_peak": {
            "value": 20.864032745361328,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.6739587783813477,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.1471710205078125,
            "lead_hour": 12,
            "valid_time": "2026-09-04 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9927749633789062,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1088252067565918,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.36913156509399414,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.43520331382751465,
            "lead_hour": 150,
            "valid_time": "2026-09-10 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.16537904739379883,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2031564712524414,
            "lead_hour": 156,
            "valid_time": "2026-09-10 12:00 UTC"
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
      "init": "2026090400",
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
            "value": 3.947131633758545,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.399242401123047,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.34477424621582,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 10.49598503112793,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.775453567504883,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.261517524719238,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8352458477020264,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9440064430236816,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.1453797817230225,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.788578510284424,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.1150538921356201,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.497982978820801,
            "lead_hour": 162,
            "valid_time": "2026-09-10 18:00 UTC"
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
      "init": "2026090400",
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
            "value": 2.6023170948028564,
            "lead_hour": 186,
            "valid_time": "2026-09-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 6.87251615524292,
            "lead_hour": 30,
            "valid_time": "2026-09-05 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.663209915161133,
            "lead_hour": 186,
            "valid_time": "2026-09-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 14.115476608276367,
            "lead_hour": 30,
            "valid_time": "2026-09-05 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.619642972946167,
            "lead_hour": 186,
            "valid_time": "2026-09-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.847641706466675,
            "lead_hour": 186,
            "valid_time": "2026-09-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.18686652183532715,
            "lead_hour": 192,
            "valid_time": "2026-09-12 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3960072994232178,
            "lead_hour": 192,
            "valid_time": "2026-09-12 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3327906131744385,
            "lead_hour": 186,
            "valid_time": "2026-09-11 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6666958332061768,
            "lead_hour": 192,
            "valid_time": "2026-09-12 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.10304450988769531,
            "lead_hour": 192,
            "valid_time": "2026-09-12 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.23093223571777344,
            "lead_hour": 192,
            "valid_time": "2026-09-12 00:00 UTC"
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
