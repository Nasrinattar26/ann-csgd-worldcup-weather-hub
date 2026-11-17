window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026111700",
  "created_utc": "2026-11-17 14:05 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026111700/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026111700_with_2yr5yrARI.nc",
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
      "init": "2026111700",
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
            "value": 2.634248733520508,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.1321918964385986,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.030159950256348,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 7.283616065979004,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.1149516105651855,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.641880512237549,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.36389827728271484,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.48023462295532227,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.06264448165893555,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.09145736694335938,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.02682209014892578,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04257559776306152,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
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
      "init": "2026111700",
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
            "value": 3.3098199367523193,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.531713008880615,
            "lead_hour": 150,
            "valid_time": "2026-11-23 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.644802093505859,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
          },
          "box_max_peak": {
            "value": 10.881101608276367,
            "lead_hour": 150,
            "valid_time": "2026-11-23 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.5274276733398438,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
          },
          "box_max_peak": {
            "value": 3.832918405532837,
            "lead_hour": 150,
            "valid_time": "2026-11-23 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.3804206848144531,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6349682807922363,
            "lead_hour": 150,
            "valid_time": "2026-11-23 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.08974671363830566,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.15881061553955078,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.022715330123901367,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.046062469482421875,
            "lead_hour": 162,
            "valid_time": "2026-11-23 18:00 UTC"
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
      "init": "2026111700",
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
            "value": 7.9914445877075195,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 8.504952430725098,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.00167465209961,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 20.501876831054688,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.3062105178833,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.958887100219727,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.8363704681396484,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.9700160026550293,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.66109299659729,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7671177387237549,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.26859045028686523,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.304943323135376,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
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
      "init": "2026111700",
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
            "value": 8.54432201385498,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 9.559569358825684,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 19.767452239990234,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 21.96660041809082,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.168659210205078,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 11.575138092041016,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.407776355743408,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 4.023080825805664,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.36907196044921875,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4434823989868164,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.10280609130859375,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.13897418975830078,
            "lead_hour": 186,
            "valid_time": "2026-11-24 18:00 UTC"
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
      "init": "2026111700",
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
            "value": 4.189595699310303,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.896183013916016,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.966683387756348,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 11.812204360961914,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.9586007595062256,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.776650428771973,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.8428990840911865,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.038813591003418,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.16767382621765137,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.21681785583496094,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.05112886428833008,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.07385611534118652,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
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
      "init": "2026111700",
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
            "value": 17.92414093017578,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 21.18491554260254,
            "lead_hour": 66,
            "valid_time": "2026-11-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 56.25872802734375,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 66.68380737304688,
            "lead_hour": 66,
            "valid_time": "2026-11-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 23.488908767700195,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 31.146038055419922,
            "lead_hour": 66,
            "valid_time": "2026-11-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.146272897720337,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.664027690887451,
            "lead_hour": 66,
            "valid_time": "2026-11-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.6545464992523193,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.709407806396484,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6601810455322266,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.659541368484497,
            "lead_hour": 72,
            "valid_time": "2026-11-20 00:00 UTC"
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
      "init": "2026111700",
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
            "value": 9.174800872802734,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 10.227765083312988,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 23.123306274414062,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 25.5178279876709,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 10.447239875793457,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 12.165063858032227,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.6210367679595947,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 3.3593058586120605,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.09333491325378418,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3693222999572754,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.023633241653442383,
            "lead_hour": 96,
            "valid_time": "2026-11-21 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.15295743942260742,
            "lead_hour": 114,
            "valid_time": "2026-11-21 18:00 UTC"
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
      "init": "2026111700",
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
            "value": 4.160682201385498,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.621428966522217,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.915929794311523,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.13079833984375,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.586167097091675,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.9313971996307373,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.6326675415039062,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.6775438785552979,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1301586627960205,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.18058419227600098,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.03585219383239746,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.057768821716308594,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
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
      "init": "2026111700",
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
            "value": 3.844083309173584,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.6902055740356445,
            "lead_hour": 144,
            "valid_time": "2026-11-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.085882186889648,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.321282386779785,
            "lead_hour": 144,
            "valid_time": "2026-11-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 3.2433152198791504,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 4.124265670776367,
            "lead_hour": 144,
            "valid_time": "2026-11-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.5616188049316406,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.7287681102752686,
            "lead_hour": 144,
            "valid_time": "2026-11-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.14308691024780273,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.19033551216125488,
            "lead_hour": 144,
            "valid_time": "2026-11-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04636645317077637,
            "lead_hour": 156,
            "valid_time": "2026-11-23 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0647127628326416,
            "lead_hour": 144,
            "valid_time": "2026-11-23 00:00 UTC"
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
      "init": "2026111700",
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
            "value": 34.615474700927734,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 36.26286315917969,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 96.04398345947266,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 96.46517944335938,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 69.56517791748047,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 72.3855972290039,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 14.353781700134277,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 17.388904571533203,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 44.678585052490234,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 51.52152633666992,
            "lead_hour": 54,
            "valid_time": "2026-11-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 21.313142776489258,
            "lead_hour": 48,
            "valid_time": "2026-11-19 00:00 UTC"
          },
          "box_max_peak": {
            "value": 34.13844299316406,
            "lead_hour": 54,
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
      "init": "2026111700",
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
            "value": 2.3404059410095215,
            "lead_hour": 168,
            "valid_time": "2026-11-24 00:00 UTC"
          },
          "box_max_peak": {
            "value": 3.4203543663024902,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.57150936126709,
            "lead_hour": 168,
            "valid_time": "2026-11-24 00:00 UTC"
          },
          "box_max_peak": {
            "value": 7.643461227416992,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.103043556213379,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 2.172929048538208,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.09240508079528809,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.24066567420959473,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.1800835132598877,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4350006580352783,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.04622340202331543,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.13020038604736328,
            "lead_hour": 192,
            "valid_time": "2026-11-25 00:00 UTC"
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
