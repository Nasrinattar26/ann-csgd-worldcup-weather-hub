window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026080900",
  "created_utc": "2026-08-09 13:05 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026080900/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026080900_with_2yr5yrARI.nc",
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
      "init": "2026080900",
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
            "value": 4.770508289337158,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.427976608276367,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 11.275214195251465,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 18.074995040893555,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.376100540161133,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.278590202331543,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.9344687461853027,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.4837076663970947,
            "lead_hour": 66,
            "valid_time": "2026-08-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7315397262573242,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8254528045654297,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4563570022583008,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4774034023284912,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
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
      "init": "2026080900",
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
            "value": 5.0643696784973145,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 5.970456600189209,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 12.297248840332031,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 14.621037483215332,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.842352867126465,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 6.089931488037109,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.9940147399902344,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 1.376253366470337,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.29900670051574707,
            "lead_hour": 114,
            "valid_time": "2026-08-13 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4227280616760254,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09654760360717773,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1568317413330078,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 0.3368082642555237,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.9544777870178223,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.30965209007263184,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.431766510009766,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.027811527252197266,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.6157150268554688,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0003635883331298828,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3039896488189697,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.034689903259277344,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.008571147918701172,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 2.5504956245422363,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.673464775085449,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.866402626037598,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.013370513916016,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.366107702255249,
            "lead_hour": 48,
            "valid_time": "2026-08-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.902434349060059,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5415976047515869,
            "lead_hour": 48,
            "valid_time": "2026-08-11 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2975990772247314,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.029730796813964844,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07991790771484375,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.005626678466796875,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.01785755157470703,
            "lead_hour": 42,
            "valid_time": "2026-08-10 18:00 UTC"
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
      "init": "2026080900",
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
            "value": 6.418305397033691,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.159720420837402,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.950555801391602,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          },
          "box_max_peak": {
            "value": 16.90290641784668,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.274931907653809,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.190166473388672,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.242422103881836,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.475351095199585,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6717383861541748,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.769120454788208,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.28818845748901367,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3448903560638428,
            "lead_hour": 132,
            "valid_time": "2026-08-14 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 0.09336694329977036,
            "lead_hour": 162,
            "valid_time": "2026-08-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1913464516401291,
            "lead_hour": 66,
            "valid_time": "2026-08-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.00019669532775878906,
            "lead_hour": 162,
            "valid_time": "2026-08-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.009578466415405273,
            "lead_hour": 66,
            "valid_time": "2026-08-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.5762786865234375e-05,
            "lead_hour": 66,
            "valid_time": "2026-08-11 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 1.7429710626602173,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.8177523612976074,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.884655237197876,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.954861640930176,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.83943510055542,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.177952766418457,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5684256553649902,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.2121021747589111,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.042825937271118164,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1842200756072998,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.013381242752075195,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.08906722068786621,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 5.70833158493042,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.223767280578613,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.868623733520508,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 15.077620506286621,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 5.869728088378906,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 6.6728057861328125,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.3780534267425537,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7043232917785645,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.37210583686828613,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5571186542510986,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1285851001739502,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.21741390228271484,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 6.795449256896973,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.5540313720703125,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 16.42584228515625,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 18.400859832763672,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.483172416687012,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 8.479393005371094,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.003878355026245,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.2930920124053955,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7256031036376953,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.9135901927947998,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3157317638397217,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4051387310028076,
            "lead_hour": 108,
            "valid_time": "2026-08-13 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 0.05956261605024338,
            "lead_hour": 120,
            "valid_time": "2026-08-14 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0791800245642662,
            "lead_hour": 138,
            "valid_time": "2026-08-14 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.1920928955078125e-05,
            "lead_hour": 138,
            "valid_time": "2026-08-14 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
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
      "init": "2026080900",
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
            "value": 0.04510655254125595,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1765305995941162,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.03165006637573242,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0004470348358154297,
            "lead_hour": 156,
            "valid_time": "2026-08-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-08-09 12:00 UTC"
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
