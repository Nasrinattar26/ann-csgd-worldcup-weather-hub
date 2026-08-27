window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026082700",
  "created_utc": "2026-08-27 13:35 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026082700/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026082700_with_2yr5yrARI.nc",
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
      "init": "2026082700",
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
            "value": 7.721816539764404,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 10.252520561218262,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.41183853149414,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 26.44712257385254,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 8.235329627990723,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.832499504089355,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.8625378608703613,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.8276383876800537,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4103541374206543,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.525212287902832,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1924276351928711,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2221524715423584,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
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
      "init": "2026082700",
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
            "value": 5.625972270965576,
            "lead_hour": 48,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.7022905349731445,
            "lead_hour": 48,
            "valid_time": "2026-08-29 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.681327819824219,
            "lead_hour": 48,
            "valid_time": "2026-08-29 00:00 UTC"
          },
          "box_max_peak": {
            "value": 16.904109954833984,
            "lead_hour": 48,
            "valid_time": "2026-08-29 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.670029640197754,
            "lead_hour": 162,
            "valid_time": "2026-09-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.115002632141113,
            "lead_hour": 162,
            "valid_time": "2026-09-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.2506663799285889,
            "lead_hour": 162,
            "valid_time": "2026-09-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.3792335987091064,
            "lead_hour": 162,
            "valid_time": "2026-09-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.47095417976379395,
            "lead_hour": 162,
            "valid_time": "2026-09-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5748331546783447,
            "lead_hour": 162,
            "valid_time": "2026-09-02 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.18857121467590332,
            "lead_hour": 162,
            "valid_time": "2026-09-02 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.23509860038757324,
            "lead_hour": 156,
            "valid_time": "2026-09-02 12:00 UTC"
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
      "init": "2026082700",
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
            "value": 6.361087799072266,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.167104721069336,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.757930755615234,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 20.763832092285156,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.340277194976807,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.738845825195312,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3233661651611328,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.920628547668457,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.18455982208251953,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.26532411575317383,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.053685903549194336,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07514357566833496,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
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
      "init": "2026082700",
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
            "value": 6.257038116455078,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.9326887130737305,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 15.172219276428223,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 16.777414321899414,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.651186943054199,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.635200023651123,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.6625285148620605,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.036583423614502,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09311437606811523,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.11380314826965332,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.017380714416503906,
            "lead_hour": 36,
            "valid_time": "2026-08-28 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.025475025177001953,
            "lead_hour": 36,
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
      "init": "2026082700",
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
            "value": 0.9572345614433289,
            "lead_hour": 84,
            "valid_time": "2026-08-30 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6916193962097168,
            "lead_hour": 108,
            "valid_time": "2026-08-31 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.0293593406677246,
            "lead_hour": 84,
            "valid_time": "2026-08-30 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.8525402545928955,
            "lead_hour": 108,
            "valid_time": "2026-08-31 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.6595730781555176,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.5474975109100342,
            "lead_hour": 108,
            "valid_time": "2026-08-31 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.10298490524291992,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.38576722145080566,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.014919042587280273,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.10873675346374512,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.003612041473388672,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.042128562927246094,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
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
      "init": "2026082700",
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
            "value": 6.0615715980529785,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.163824081420898,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.880651473999023,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 20.560800552368164,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.077176094055176,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 8.82556438446045,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.346510648727417,
            "lead_hour": 156,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.0298421382904053,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.2103378772735596,
            "lead_hour": 156,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.950499534606934,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.5259513854980469,
            "lead_hour": 156,
            "valid_time": "2026-09-02 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.7792811393737793,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
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
      "init": "2026082700",
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
            "value": 8.488764762878418,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.763493537902832,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 20.114761352539062,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 20.672679901123047,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.980213165283203,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 10.383391380310059,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.105628490447998,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.301459550857544,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.22402405738830566,
            "lead_hour": 192,
            "valid_time": "2026-09-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.44378042221069336,
            "lead_hour": 12,
            "valid_time": "2026-08-27 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.08755922317504883,
            "lead_hour": 192,
            "valid_time": "2026-09-04 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.19987821578979492,
            "lead_hour": 192,
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
      "init": "2026082700",
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
            "value": 5.080880641937256,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.726757049560547,
            "lead_hour": 30,
            "valid_time": "2026-08-28 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.634552001953125,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 26.612377166748047,
            "lead_hour": 30,
            "valid_time": "2026-08-28 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.665498733520508,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 9.498023986816406,
            "lead_hour": 30,
            "valid_time": "2026-08-28 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.7789006233215332,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9614875316619873,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6446719169616699,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7911145687103271,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.28659701347351074,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.37227869033813477,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
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
      "init": "2026082700",
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
            "value": 7.156509876251221,
            "lead_hour": 24,
            "valid_time": "2026-08-28 00:00 UTC"
          },
          "box_max_peak": {
            "value": 9.009493827819824,
            "lead_hour": 30,
            "valid_time": "2026-08-28 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 18.236238479614258,
            "lead_hour": 24,
            "valid_time": "2026-08-28 00:00 UTC"
          },
          "box_max_peak": {
            "value": 24.19329833984375,
            "lead_hour": 30,
            "valid_time": "2026-08-28 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.166428565979004,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.658355712890625,
            "lead_hour": 30,
            "valid_time": "2026-08-28 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.013063430786133,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.188718318939209,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.8691251277923584,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0464012622833252,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.44086575508117676,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5444169044494629,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
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
      "init": "2026082700",
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
            "value": 3.147247314453125,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.690937042236328,
            "lead_hour": 186,
            "valid_time": "2026-09-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.304388046264648,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.083782196044922,
            "lead_hour": 186,
            "valid_time": "2026-09-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.135007619857788,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.886645317077637,
            "lead_hour": 186,
            "valid_time": "2026-09-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.7908999919891357,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2688100337982178,
            "lead_hour": 186,
            "valid_time": "2026-09-03 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.8650293350219727,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.7538180351257324,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.0275661945343018,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.8645644187927246,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
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
      "init": "2026082700",
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
            "value": 3.423929452896118,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.762948989868164,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.644951343536377,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          },
          "box_max_peak": {
            "value": 11.231576919555664,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.195453643798828,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 3.2550454139709473,
            "lead_hour": 168,
            "valid_time": "2026-09-03 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.25444626808166504,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3959059715270996,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.45405030250549316,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6832420825958252,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.13955235481262207,
            "lead_hour": 174,
            "valid_time": "2026-09-03 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.23127198219299316,
            "lead_hour": 180,
            "valid_time": "2026-09-03 12:00 UTC"
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
