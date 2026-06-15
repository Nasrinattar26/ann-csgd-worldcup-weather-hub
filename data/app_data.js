window.WC_APP_DATA = {
  "title": "ANN-CSGD World Cup Weather Hub",
  "description": "Real ANN12-v4 city-level probabilistic precipitation guidance extracted from the run NetCDF.",
  "init": "2026061500",
  "created_utc": "2026-06-15 13:20 UTC",
  "mode": "real_ann12_v4",
  "is_sample_data": false,
  "source_netcdf": "/data/Nasrin/Ann_csgd_project/auto_website_lead8/runs/2026061500/ann12_v4_products/ANN12_v4_MRMS_VALIDONLY_12h_products_2026061500_with_2yr5yrARI.nc",
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
      "init": "2026061500",
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
            "value": 14.192668914794922,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 15.675042152404785,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 32.105953216552734,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 35.63557434082031,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 18.11336898803711,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 20.32254409790039,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 6.860285758972168,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 7.719975471496582,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.5994420051574707,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 2.835291624069214,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.606154441833496,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7815828323364258,
            "lead_hour": 102,
            "valid_time": "2026-06-19 06:00 UTC"
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
      "init": "2026061500",
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
            "value": 4.208629608154297,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 6.80012845993042,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.825599670410156,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 16.631919860839844,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.419493675231934,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 4.963028430938721,
            "lead_hour": 96,
            "valid_time": "2026-06-19 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.2021124362945557,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.211768388748169,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.45908689498901367,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.48970580101013184,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.18648505210876465,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2094864845275879,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
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
      "init": "2026061500",
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
            "value": 6.3176188468933105,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.451376914978027,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.939529418945312,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 29.273372650146484,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.347482681274414,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.76899528503418,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 2.656930685043335,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 3.5960137844085693,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.7967174053192139,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.8863329887390137,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.38338303565979004,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4135429859161377,
            "lead_hour": 132,
            "valid_time": "2026-06-20 12:00 UTC"
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
      "init": "2026061500",
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
            "value": 23.25586700439453,
            "lead_hour": 90,
            "valid_time": "2026-06-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 25.58586883544922,
            "lead_hour": 90,
            "valid_time": "2026-06-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 54.81723403930664,
            "lead_hour": 18,
            "valid_time": "2026-06-15 18:00 UTC"
          },
          "box_max_peak": {
            "value": 64.08517456054688,
            "lead_hour": 18,
            "valid_time": "2026-06-15 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 32.7509880065918,
            "lead_hour": 90,
            "valid_time": "2026-06-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 37.22796630859375,
            "lead_hour": 90,
            "valid_time": "2026-06-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 12.44642162322998,
            "lead_hour": 90,
            "valid_time": "2026-06-18 18:00 UTC"
          },
          "box_max_peak": {
            "value": 13.907766342163086,
            "lead_hour": 90,
            "valid_time": "2026-06-18 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 1.3737976551055908,
            "lead_hour": 84,
            "valid_time": "2026-06-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.7183661460876465,
            "lead_hour": 84,
            "valid_time": "2026-06-18 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3666341304779053,
            "lead_hour": 84,
            "valid_time": "2026-06-18 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5631446838378906,
            "lead_hour": 84,
            "valid_time": "2026-06-18 12:00 UTC"
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
      "init": "2026061500",
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
            "value": 15.746439933776855,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          },
          "box_max_peak": {
            "value": 16.558168411254883,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 37.566734313964844,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          },
          "box_max_peak": {
            "value": 40.180885314941406,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 20.701520919799805,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          },
          "box_max_peak": {
            "value": 22.0426082611084,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 7.190680503845215,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          },
          "box_max_peak": {
            "value": 7.572179794311523,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 2.300143241882324,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          },
          "box_max_peak": {
            "value": 2.5498032569885254,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.9827136993408203,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.135551929473877,
            "lead_hour": 156,
            "valid_time": "2026-06-21 12:00 UTC"
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
      "init": "2026061500",
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
            "value": 0.02804480865597725,
            "lead_hour": 186,
            "valid_time": "2026-06-22 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.04696761816740036,
            "lead_hour": 162,
            "valid_time": "2026-06-21 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
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
      "init": "2026061500",
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
            "value": 9.94697093963623,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 12.486960411071777,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 22.244184494018555,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 28.82735824584961,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 12.088674545288086,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 15.647387504577637,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 4.468655586242676,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.578756332397461,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.4663527011871338,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 1.0008633136749268,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.16628503799438477,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.4562199115753174,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
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
      "init": "2026061500",
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
            "value": 11.175188064575195,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 12.16793441772461,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 32.650611877441406,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 36.97592544555664,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 9.977417945861816,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 11.800867080688477,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.18522047996521,
            "lead_hour": 120,
            "valid_time": "2026-06-20 00:00 UTC"
          },
          "box_max_peak": {
            "value": 1.4840781688690186,
            "lead_hour": 114,
            "valid_time": "2026-06-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.3849029541015625,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.5175530910491943,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.16353130340576172,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.2345263957977295,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
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
      "init": "2026061500",
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
            "value": 12.588397026062012,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.150240898132324,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 37.25508499145508,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 39.929466247558594,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 13.02899169921875,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 13.969045639038086,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 1.9009530544281006,
            "lead_hour": 114,
            "valid_time": "2026-06-19 18:00 UTC"
          },
          "box_max_peak": {
            "value": 2.3203611373901367,
            "lead_hour": 114,
            "valid_time": "2026-06-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.6409525871276855,
            "lead_hour": 114,
            "valid_time": "2026-06-19 18:00 UTC"
          },
          "box_max_peak": {
            "value": 0.891721248626709,
            "lead_hour": 114,
            "valid_time": "2026-06-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.27568936347961426,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.3760218620300293,
            "lead_hour": 114,
            "valid_time": "2026-06-19 18:00 UTC"
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
      "init": "2026061500",
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
            "value": 0.023251425474882126,
            "lead_hour": 192,
            "valid_time": "2026-06-23 00:00 UTC"
          },
          "box_max_peak": {
            "value": 0.05576552823185921,
            "lead_hour": 114,
            "valid_time": "2026-06-19 18:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
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
      "init": "2026061500",
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
            "value": 0.03700241446495056,
            "lead_hour": 150,
            "valid_time": "2026-06-21 06:00 UTC"
          },
          "box_max_peak": {
            "value": 0.1169891506433487,
            "lead_hour": 174,
            "valid_time": "2026-06-22 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_0p5inch_percent",
          "product_label": "Probability > 0.5 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.003319978713989258,
            "lead_hour": 174,
            "valid_time": "2026-06-22 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_1inch_percent",
          "product_label": "Probability > 1 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 5.9604644775390625e-06,
            "lead_hour": 174,
            "valid_time": "2026-06-22 06:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2inch_percent",
          "product_label": "Probability > 2 inch",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_2yr12h_ari_percent",
          "product_label": "Probability > 2-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          }
        },
        {
          "product_id": "prob_gt_5yr12h_ari_percent",
          "product_label": "Probability > 5-year 12-h ARI",
          "units": "%",
          "nearest_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
          },
          "box_max_peak": {
            "value": 0.0,
            "lead_hour": 12,
            "valid_time": "2026-06-15 12:00 UTC"
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
