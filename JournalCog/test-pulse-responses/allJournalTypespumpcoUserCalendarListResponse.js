var dummyPulseResponseAllJournalTypes = {
    "pulseHeader": {
        "mep": "inout",
        "pulseType": "document",
        "pulseClass": "pumpCo.user.calendar.list.response",
        "endpointId": "4D24D855-091A-4B49-8F62-BC3D51EFE8CA",
        "referenceId": "7F008C41-BE0F-48F9-A7D0-26BA03AE9A93",
        "referer": "https://dev.cnect.to/bettertogether?socket=false",
        "pulseId": "69a04840-4e5a-4141-ae45-9bd063d07e1e",
        "timestamp": "2017-03-08T06:22:42.126",
        "requestingComponentId": "f022bf074d16dfe305d2bd2d",
        "componentId": "7643c6b5ec8c9ff805d2bd2d",
        "instanceRoutingSlip": [

        ]
    },
    "pulseBody": {
        "criteria": {
            "dateFrom": "2017-02-28T15:17:57+0000",
            "completed": true
        },
        "entry": [
          {
              "type": "note", // Note inserted manually in order to display a note in the journal entry list
              "dtStart": "2017-03-21T19:24:00Z",
              "summary": "Jasons custom hard coded note, and it has all tags that are in Paulines Uber journal",
              "uid": "0036ebcb737c3da100000001",
              "attendee": [
                  {
                      "uid": "0036ebcb737c3da100000001",
                      "fn": "jason carney"
                  }
              ],
              "createdOn": "2017-03-21T19:24:00Z",
              "createdBy": "0036ebcb737c3da100000001",
              "value": {
                  "ref": "1"
              },
              "completedOn": "",
              "ref": "1",
              "dtEnd": "2017-03-21T19:24:00Z",
              "localtime": {
                  "dtStart": "2017-03-21T19:24:00+0000",
                  "dtEnd": "2017-03-21T19:24:00+0000",
                  "tz": "Europe/London"
              },
              "tag": [
                  "System.tag.invite",
                  "BetterTogether.tag.meal",
                  "HealthPump.tag.diabetes",
                  "HealthPump.tag.calorieBank",
                  "HealthPump.tag.health",
                  "System.tag.todo",
                  "HealthPump.tag.exercise",
                  "HealthPump.tag.bloodPressure",
                  "HealthPump.tag.weight",
                  "System.tag.appointment",
                  "HealthPump.tag.mood"
              ],
              "id": "58bf334294cd42079c7c7ba2",
              "comment": [

              ],
              "averageReview": 0.0,
              "review": [

              ]
          },
          {
      "type" : "moisture",
      "dtStart" : "2017-05-04T13:24:12Z",
      "summary" : "moisture alert",
      "uid" : "590b2b7752aa26e3f7f03f0d",
      "attendee" : [ {
        "uid" : "590b2b7752aa26e3f7f03f0d",
        "fn" : "John Jenkins"
      } ],
      "createdOn" : "2017-05-04T13:24:12Z",
      "createdBy" : "590b2b7c52aa26e3f7f041eb",
      "value" : {
        "pressed" : {
          "dtStart" : "2017-05-04T13:24:12Z"
        }
      },
      "completedOn" : "",
      "ref" : "1",
      "dtEnd" : "2017-05-04T13:24:12Z",
      "localtime" : {
        "dtStart" : "2017-05-04T14:24:12+0100",
        "dtEnd" : "2017-05-04T14:24:12+0100",
        "tz" : "Europe/London"
      },
      "entryStatus" : "pending",
      "tag" : [ "System.tag.alert" ],
      "id" : "590b2b7c52aa26e3f7f04211"
    },
          {
              "type": "moisture", // Note inserted manually in order to display a note in the journal entry list
              "dtStart": "2017-05-04T19:24:00Z",
              "summary": "Moisture custom hard coded entry",
              "uid": "0036ebcb737c3da100000001",
              "attendee": [
                  {
                      "uid": "0036ebcb737c3da100000001",
                      "fn": "jason carney"
                  }
              ],
              "createdOn": "2017-05-04T19:24:00Z",
              "createdBy": "0036ebcb737c3da100000001",
              "value": {
                  "ref": "1",
                  "text": "A bed wetting even has been recorded"
              },
              "completedOn": "",
              "ref": "1",
              "dtEnd": "2017-05-04T19:24:00Z",
              "localtime": {
                  "dtStart": "2017-05-04T19:24:00+0000",
                  "dtEnd": "2017-05-04T19:24:00+0000",
                  "tz": "Europe/London"
              },
              "tag": [
                  "System.tag.invite",
                  "BetterTogether.tag.meal",
                  "HealthPump.tag.diabetes",
                  "HealthPump.tag.calorieBank",
                  "HealthPump.tag.health",
                  "System.tag.todo",
                  "HealthPump.tag.exercise",
                  "HealthPump.tag.bloodPressure",
                  "HealthPump.tag.weight",
                  "System.tag.appointment",
                  "HealthPump.tag.mood",
                  "HealthPump.tag.installation",
                  "HealthPump.tag.alert"
              ],
              "id": "58bf334294cd42079c7c7ba2",
              "comment": [

              ],
              "averageReview": 0.0,
              "review": [

              ]
          },

            {
                "type": "diabetes",
                "summary": "before breakfast",
                "createdOn": "2017-03-02T06:21:31Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "06:21:31.000"
                    },
                    "text": "reading from Bayer - before breakfast",
                    "reading": {
                        "value": "4.8",
                        "banding": "low",
                        "units": "mmol/L",
                        "originalValue": "4.8",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "30"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-02T06:21:31Z",
                "dtEnd": "2017-03-02T06:21:31Z",
                "localtime": {
                    "dtStart": "2017-03-02T06:21:31+0000",
                    "dtEnd": "2017-03-02T06:21:31+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac76",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-02T07:30:00Z",
                "summary": "added via calories in - breakfast",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T07:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "4",
                    "calorieBank": {
                        "credit": {
                            "value": "647",
                            "units": "kcal",
                            "originalValue": "647",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "4",
                "dtEnd": "2017-03-02T07:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-02T07:30:00+0100",
                    "dtEnd": "2017-03-02T07:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac6e",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "mood",
                "dtStart": "2017-03-02T07:55:25Z",
                "summary": "feeling a bit sad",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T07:55:25Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "8",
                    "text": "feeling a bit sad",
                    "time": "2017-03-02T07:55:25Z",
                    "sociability": 2,
                    "generalMood": 3,
                    "energyLevels": 4,
                    "mentalActivity": 1,
                    "anxiety": 5
                },
                "completedOn": "",
                "ref": "8",
                "dtEnd": "2017-03-02T07:55:25Z",
                "localtime": {
                    "dtStart": "2017-03-02T07:55:25+0100",
                    "dtEnd": "2017-03-02T07:55:25+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.mood"
                ],
                "id": "58bfa1c594cd42079c7cac73",
                "comment": [
                    {
                        "timestamp": "2017-03-02T09:27:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "are you feeling ok?",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cac73",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cac74",
                        "comment": [
                            {
                                "timestamp": "2017-03-02T09:57:32Z",
                                "userId": "0036ebcb69f670be00000001",
                                "fn": "Pauline Smith",
                                "badge": "uploads/bettertogether/images/paulineUserIcon.jpg",
                                "text": "yeah, I'm ok really!",
                                "target": {
                                    "userId": "0036ebcb84837a5400000001",
                                    "entryId": "58bfa1c594cd42079c7cac74",
                                    "componentId": "f022bf074d16dfe305d2bd2d"
                                },
                                "id": "58bfa1c594cd42079c7cac75"
                            }
                        ]
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "appointment",
                "dtStart": "2017-03-02T08:30:00Z",
                "summary": "jasons custom booked value", // Custom value added
                "status": "booked",
                "uid": "0036ebcb84837a5400000001",
                "attendee": [
                    {
                        "uid": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "link": {
                            "visit": "roadie://visit/user/0036ebcb84837a5400000001"
                        }
                    },
                    {
                        "uid": "0036ebcb69f670be00000001",
                        "fn": "Pauline Smith"
                    }
                ],
                "createdOn": "2017-03-02T08:30:00Z",
                "createdBy": "0036ebcb84837a5400000001",
                "value": {

                },
                "completedOn": "y",
                "ref": "7",
                "dtEnd": "2017-03-02T09:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-02T08:30:00+0000",
                    "dtEnd": "2017-03-02T09:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.appointment"
                ],
                "availability": {

                },
                "id": "58bfa1c594cd42079c7cac72",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "bodyComposition",
                "dtStart": "2017-03-02T09:00:00Z",
                "summary": "reading from Withings",
                "uid": "5a3b070000000000005a3b07", // Added SAM ID for testing purposes
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T09:00:00Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "1",
                    "weight": {
                        "value": "122.35655551260706",
                        "units": "lb",
                        "originalValue": "55.5",
                        "originalUnits": "kg"
                    },
                    "fatFreeMass": {
                        "value": "89.94419372618636",
                        "units": "lb",
                        "originalValue": "40.798",
                        "originalUnits": "kg"
                    },
                    "fatRatio": {
                        "value": "26.649",
                        "units": "%"
                    },
                    "fatMassWeight": {
                        "value": "32.60636857714339",
                        "units": "lb",
                        "originalValue": "14.790",
                        "originalUnits": "kg"
                    }
                },
                "completedOn": "",
                "ref": "1",
                "dtEnd": "2017-03-02T009:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-02T09:00:00+0100",
                    "dtEnd": "2017-03-02T09:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.weight",
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7cac6b",
                "comment": [
                  {
                      "timestamp": "2017-04-05T10:46:43.479",
                      "userId": "0036ebcb737c3da100000001",
                      "fn": "jason carney",
                      "badge": "/PumpHouse/uploads/gaia/images/default_usericon.jpg",
                      "text": "a comment i just made",
                      "target": {
                          "userId": "0036ebcb737c3da100000001",
                          "entryId": "58e4caf794cd42078b7314fa",
                          "entryType": "todo",
                          "type": "journal",
                          "baseType": "journal",
                          "componentId": "f022bf074d16dfe3737c3da1"
                      },
                      "id": "58e4cb1394cd42078b7314fd"
                  },
                  {
                      "timestamp": "2017-04-05T11:03:06.171",
                      "userId": "0036ebcb737c3da100000001",
                      "fn": "jason carney",
                      "badge": "/PumpHouse/uploads/gaia/images/default_usericon.jpg",
                      "text": "another great comment iv added :)",
                      "target": {
                          "userId": "0036ebcb737c3da100000001",
                          "entryId": "58e4caf794cd42078b7314fa",
                          "entryType": "todo",
                          "type": "journal",
                          "baseType": "journal",
                          "componentId": "f022bf074d16dfe3737c3da1"
                      },
                      "id": "58e4ceea94cd42078b731520"
                  }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "vitals",
                "dtStart": "2017-03-02T09:01:30Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T09:01:30Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "2",
                    "diastolicBloodPressure": {
                        "value": 81,
                        "units": "mmHg",
                        "originalValue": 81,
                        "originalUnits": "mmHg"
                    },
                    "systolicBloodPressure": {
                        "value": 130,
                        "units": "mmHg",
                        "originalValue": 130,
                        "originalUnits": "mmHg"
                    },
                    "heartPulse": {
                        "value": 83,
                        "units": "bpm"
                    }
                },
                "completedOn": "",
                "ref": "2",
                "dtEnd": "2017-03-02T09:01:30Z",
                "localtime": {
                    "dtStart": "2017-03-02T09:01:30+0000",
                    "dtEnd": "2017-03-02T09:01:30+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure"
                ],
                "comment": [

                ],
                "id": "58bfa1c594cd42079c7cac6c",
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "exercise",
                "dtStart": "2017-03-02T10:00:00Z",
                "summary": "reading from FitBit - 5 km run",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T10:00:00Z",
                "createdBy": "0036ebcb58b104b500000001",
                "value": {
                    "ref": "3",
                    "calorieBank": {
                        "debit": {
                            "value": 547,
                            "units": "kcal",
                            "originalValue": 547,
                            "originalUnits": "kcal"
                        }
                    },
                    "distance": {
                        "value": 5468.066491688539,
                        "units": "yd",
                        "originalValue": 5,
                        "originalUnits": "km"
                    },
                    "duration": {
                        "value": 1800000,
                        "units": "ms"
                    },
                    "name": "5 km run",
                    "note": "felt great!! :oD"
                },
                "completedOn": "",
                "ref": "3",
                "dtEnd": "2017-03-02T10:00:00+0000",
                "localtime": {
                    "dtStart": "2017-03-02T10:00:00+0100",
                    "dtEnd": "2017-03-02T10:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.exercise",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7cac6d",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "todo",
                "dtStart": "2017-03-02T10:30:00Z",
                "summary": "make yourself some coffee",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T10:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "9",
                    "text": "make yourself some coffee",
                    "dueDate": "2017-03-03T10:30:00Z"
                },
                "completedOn": "",
                "ref": "9",
                "dtEnd": "2017-03-02T010:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-02T10:30:00+0100",
                    "dtEnd": "2017-03-02T10:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.todo"
                ],
                "id": "58bfa1c594cd42079c7cac7a",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before lunch",
                "createdOn": "2017-03-02T11:38:15Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "11:38:15.000"
                    },
                    "text": "reading from Bayer - before lunch",
                    "reading": {
                        "value": "7.6",
                        "banding": "ok",
                        "units": "mmol/L",
                        "originalValue": "7.6",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-02T11:38:15Z",
                "dtEnd": "2017-03-02T11:38:15Z",
                "localtime": {
                    "dtStart": "2017-03-02T11:38:15+0000",
                    "dtEnd": "2017-03-02T11:38:15+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac77",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-02T13:00:00Z",
                "summary": "added via calories in - lunch",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T13:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "5",
                    "calorieBank": {
                        "credit": {
                            "value": "821",
                            "units": "kcal",
                            "originalValue": "821",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "5",
                "dtEnd": "2017-03-02T13:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-02T13:00:00+0100",
                    "dtEnd": "2017-03-02T13:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac6f",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after lunch",
                "createdOn": "2017-03-02T15:48:36Z",
                "value": {
                    "time": {
                        "label": "afternoon",
                        "isoTime": "15:48:36.000"
                    },
                    "text": "reading from Bayer - after lunch",
                    "reading": {
                        "value": "9.9",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "9.9",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-02T15:48:36Z",
                "dtEnd": "2017-03-02T15:48:36Z",
                "localtime": {
                    "dtStart": "2017-03-02T15:48:36+0000",
                    "dtEnd": "2017-03-02T15:48:36+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac78",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-02T19:00:00Z",
                "summary": "added via calories in - dinner",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-02T19:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "6",
                    "calorieBank": {
                        "credit": {
                            "value": "1100",
                            "units": "kcal",
                            "originalValue": "1100",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "6",
                "dtEnd": "2017-03-02T19:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-02T19:00:00+0100",
                    "dtEnd": "2017-03-02T19:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac70",
                "comment": [
                    {
                        "timestamp": "2017-03-02T19:37:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "what a healthy meal!",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cac70",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cac71"
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after dinner",
                "createdOn": "2017-03-02T20:08:14Z",
                "value": {
                    "time": {
                        "label": "evening",
                        "isoTime": "20:08:14.000"
                    },
                    "text": "reading from Bayer - after dinner",
                    "reading": {
                        "value": "11.9",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "11.9",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "120"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-02T20:08:14Z",
                "dtEnd": "2017-03-02T20:08:14Z",
                "localtime": {
                    "dtStart": "2017-03-02T20:08:14+0000",
                    "dtEnd": "2017-03-02T20:08:14+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac79",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before breakfast",
                "createdOn": "2017-03-03T06:22:00Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "06:22:00.000"
                    },
                    "text": "reading from Bayer - before breakfast",
                    "reading": {
                        "value": "3.8",
                        "banding": "low",
                        "units": "mmol/L",
                        "originalValue": "3.8",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "30"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-03T06:22:00Z",
                "dtEnd": "2017-03-03T06:22:00Z",
                "localtime": {
                    "dtStart": "2017-03-03T06:22:00+0000",
                    "dtEnd": "2017-03-03T06:22:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac86",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-03T07:30:00Z",
                "summary": "added via calories in - breakfast",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T07:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "13",
                    "calorieBank": {
                        "credit": {
                            "value": "647",
                            "units": "kcal",
                            "originalValue": "647",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "13",
                "dtEnd": "2017-03-03T07:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-03T07:30:00+0100",
                    "dtEnd": "2017-03-03T07:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac7e",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "mood",
                "dtStart": "2017-03-03T07:47:09Z",
                "summary": "feeling fairly good",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T07:47:09Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "17",
                    "text": "feeling fairly good",
                    "time": "2017-03-03T07:47:09Z",
                    "sociability": 3,
                    "generalMood": 5,
                    "energyLevels": 1,
                    "mentalActivity": 2,
                    "anxiety": 5
                },
                "completedOn": "",
                "ref": "17",
                "dtEnd": "2017-03-03T07:47:09Z",
                "localtime": {
                    "dtStart": "2017-03-03T07:47:09+0100",
                    "dtEnd": "2017-03-03T07:47:09+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.mood"
                ],
                "id": "58bfa1c594cd42079c7cac83",
                "comment": [
                    {
                        "timestamp": "2017-03-03T09:27:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "are you feeling ok?",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cac83",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cac84",
                        "comment": [
                            {
                                "timestamp": "2017-03-03T09:57:32Z",
                                "userId": "0036ebcb69f670be00000001",
                                "fn": "Pauline Smith",
                                "badge": "uploads/bettertogether/images/paulineUserIcon.jpg",
                                "text": "yeah, I'm ok really!",
                                "target": {
                                    "userId": "0036ebcb84837a5400000001",
                                    "entryId": "58bfa1c594cd42079c7cac84",
                                    "componentId": "f022bf074d16dfe305d2bd2d"
                                },
                                "id": "58bfa1c594cd42079c7cac85"
                            }
                        ]
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "appointment",
                "dtStart": "2017-03-03T08:30:00Z",
                "summary": "booked",
                "status": "booked",
                "uid": "0036ebcb84837a5400000001",
                "attendee": [
                    {
                        "uid": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "link": {
                            "visit": "roadie://visit/user/0036ebcb84837a5400000001"
                        }
                    },
                    {
                        "uid": "0036ebcb69f670be00000001",
                        "fn": "Pauline Smith"
                    }
                ],
                "createdOn": "2017-03-03T08:30:00Z",
                "createdBy": "0036ebcb84837a5400000001",
                "value": {

                },
                "completedOn": "",
                "ref": "16",
                "dtEnd": "2017-03-03T09:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-03T08:30:00+0000",
                    "dtEnd": "2017-03-03T09:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.appointment"
                ],
                "availability": {

                },
                "id": "58bfa1c594cd42079c7cac82",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "bodyComposition",
                "dtStart": "2017-03-03T09:00:00Z",
                "summary": "reading from Withings",
                "uid": "05e0f67f9f4743a766486daf", // UID set to black pearl for testing purposes
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T09:00:00Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "10",
                    "weight": {
                        "value": "122.35655551260706",
                        "units": "lb",
                        "originalValue": "55.5",
                        "originalUnits": "kg"
                    },
                    "fatFreeMass": {
                        "value": "89.94419372618636",
                        "units": "lb",
                        "originalValue": "40.798",
                        "originalUnits": "kg"
                    },
                    "fatRatio": {
                        "value": "26.649",
                        "units": "%"
                    },
                    "fatMassWeight": {
                        "value": "32.60636857714339",
                        "units": "lb",
                        "originalValue": "14.790",
                        "originalUnits": "kg"
                    }
                },
                "completedOn": "",
                "ref": "10",
                "dtEnd": "2017-03-03T009:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-03T09:00:00+0100",
                    "dtEnd": "2017-03-03T09:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.weight",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac7b",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "vitals",
                "dtStart": "2017-03-03T09:01:30Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T09:01:30Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "11",
                    "diastolicBloodPressure": {
                        "value": 81,
                        "units": "mmHg",
                        "originalValue": 81,
                        "originalUnits": "mmHg"
                    },
                    "systolicBloodPressure": {
                        "value": 130,
                        "units": "mmHg",
                        "originalValue": 130,
                        "originalUnits": "mmHg"
                    },
                    "heartPulse": {
                        "value": 83,
                        "units": "bpm"
                    }
                },
                "completedOn": "",
                "ref": "11",
                "dtEnd": "2017-03-03T09:01:30Z",
                "localtime": {
                    "dtStart": "2017-03-03T09:01:30+0000",
                    "dtEnd": "2017-03-03T09:01:30+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure"
                ],
                "comment": [

                ],
                "id": "58bfa1c594cd42079c7cac7c",
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "exercise",
                "dtStart": "2017-03-03T10:00:00Z",
                "summary": "reading from FitBit - 5 km run",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T10:00:00Z",
                "createdBy": "0036ebcb58b104b500000001",
                "value": {
                    "ref": "12",
                    "calorieBank": {
                        "debit": {
                            "value": 547,
                            "units": "kcal",
                            "originalValue": 547,
                            "originalUnits": "kcal"
                        }
                    },
                    "distance": {
                        "value": 5468.066491688539,
                        "units": "yd",
                        "originalValue": 5,
                        "originalUnits": "km"
                    },
                    "duration": {
                        "value": 1800000,
                        "units": "ms"
                    },
                    "name": "5 km run",
                    "note": "felt great!! :oD"
                },
                "completedOn": "",
                "ref": "12",
                "dtEnd": "2017-03-03T10:00:00+0000",
                "localtime": {
                    "dtStart": "2017-03-03T10:00:00+0100",
                    "dtEnd": "2017-03-03T10:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.exercise",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7cac7d",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "todo",
                "dtStart": "2017-03-03T10:30:00Z",
                "summary": "make yourself some coffee",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T10:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "18",
                    "text": "make yourself some coffee",
                    "dueDate": "2017-03-04T10:30:00Z"
                },
                "completedOn": "",
                "ref": "18",
                "dtEnd": "2017-03-03T010:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-03T10:30:00+0100",
                    "dtEnd": "2017-03-03T10:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.todo"
                ],
                "id": "58bfa1c594cd42079c7cac8a",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before lunch",
                "createdOn": "2017-03-03T11:48:56Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "11:48:56.000"
                    },
                    "text": "reading from Bayer - before lunch",
                    "reading": {
                        "value": "6.2",
                        "banding": "ok",
                        "units": "mmol/L",
                        "originalValue": "6.2",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-03T11:48:56Z",
                "dtEnd": "2017-03-03T11:48:56Z",
                "localtime": {
                    "dtStart": "2017-03-03T11:48:56+0000",
                    "dtEnd": "2017-03-03T11:48:56+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac87",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-03T13:00:00Z",
                "summary": "added via calories in - lunch",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T13:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "14",
                    "calorieBank": {
                        "credit": {
                            "value": "821",
                            "units": "kcal",
                            "originalValue": "821",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "14",
                "dtEnd": "2017-03-03T13:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-03T13:00:00+0100",
                    "dtEnd": "2017-03-03T13:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac7f",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after lunch",
                "createdOn": "2017-03-03T15:02:41Z",
                "value": {
                    "time": {
                        "label": "afternoon",
                        "isoTime": "15:02:41.000"
                    },
                    "text": "reading from Bayer - after lunch",
                    "reading": {
                        "value": "9.4",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "9.4",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-03T15:02:41Z",
                "dtEnd": "2017-03-03T15:02:41Z",
                "localtime": {
                    "dtStart": "2017-03-03T15:02:41+0000",
                    "dtEnd": "2017-03-03T15:02:41+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac88",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-03T19:00:00Z",
                "summary": "added via calories in - dinner",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-03T19:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "15",
                    "calorieBank": {
                        "credit": {
                            "value": "1100",
                            "units": "kcal",
                            "originalValue": "1100",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "15",
                "dtEnd": "2017-03-03T19:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-03T19:00:00+0100",
                    "dtEnd": "2017-03-03T19:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac80",
                "comment": [
                    {
                        "timestamp": "2017-03-03T19:37:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "what a healthy meal!",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cac80",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cac81"
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after dinner",
                "createdOn": "2017-03-03T20:58:19Z",
                "value": {
                    "time": {
                        "label": "evening",
                        "isoTime": "20:58:19.000"
                    },
                    "text": "reading from Bayer - after dinner",
                    "reading": {
                        "value": "10.8",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "10.8",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "120"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-03T20:58:19Z",
                "dtEnd": "2017-03-03T20:58:19Z",
                "localtime": {
                    "dtStart": "2017-03-03T20:58:19+0000",
                    "dtEnd": "2017-03-03T20:58:19+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac89",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before breakfast",
                "createdOn": "2017-03-04T06:52:40Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "06:52:40.000"
                    },
                    "text": "reading from Bayer - before breakfast",
                    "reading": {
                        "value": "3.6",
                        "banding": "low",
                        "units": "mmol/L",
                        "originalValue": "3.6",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "30"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-04T06:52:40Z",
                "dtEnd": "2017-03-04T06:52:40Z",
                "localtime": {
                    "dtStart": "2017-03-04T06:52:40+0000",
                    "dtEnd": "2017-03-04T06:52:40+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac96",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-04T07:30:00Z",
                "summary": "added via calories in - breakfast",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T07:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "22",
                    "calorieBank": {
                        "credit": {
                            "value": "647",
                            "units": "kcal",
                            "originalValue": "647",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "22",
                "dtEnd": "2017-03-04T07:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-04T07:30:00+0100",
                    "dtEnd": "2017-03-04T07:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac8e",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "mood",
                "dtStart": "2017-03-04T07:43:25Z",
                "summary": "feeling fairly good",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T07:43:25Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "26",
                    "text": "feeling fairly good",
                    "time": "2017-03-04T07:43:25Z",
                    "sociability": 1,
                    "generalMood": 5,
                    "energyLevels": 3,
                    "mentalActivity": 3,
                    "anxiety": 5
                },
                "completedOn": "",
                "ref": "26",
                "dtEnd": "2017-03-04T07:43:25Z",
                "localtime": {
                    "dtStart": "2017-03-04T07:43:25+0100",
                    "dtEnd": "2017-03-04T07:43:25+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.mood"
                ],
                "id": "58bfa1c594cd42079c7cac93",
                "comment": [
                    {
                        "timestamp": "2017-03-04T09:27:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "are you feeling ok?",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cac93",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cac94",
                        "comment": [
                            {
                                "timestamp": "2017-03-04T09:57:32Z",
                                "userId": "0036ebcb69f670be00000001",
                                "fn": "Pauline Smith",
                                "badge": "uploads/bettertogether/images/paulineUserIcon.jpg",
                                "text": "yeah, I'm ok really!",
                                "target": {
                                    "userId": "0036ebcb84837a5400000001",
                                    "entryId": "58bfa1c594cd42079c7cac94",
                                    "componentId": "f022bf074d16dfe305d2bd2d"
                                },
                                "id": "58bfa1c594cd42079c7cac95"
                            }
                        ]
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "appointment",
                "dtStart": "2017-03-04T08:30:00Z",
                "summary": "booked",
                "status": "booked",
                "uid": "0036ebcb84837a5400000001",
                "attendee": [
                    {
                        "uid": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "link": {
                            "visit": "roadie://visit/user/0036ebcb84837a5400000001"
                        }
                    },
                    {
                        "uid": "0036ebcb69f670be00000001",
                        "fn": "Pauline Smith"
                    }
                ],
                "createdOn": "2017-03-04T08:30:00Z",
                "createdBy": "0036ebcb84837a5400000001",
                "value": {

                },
                "completedOn": "",
                "ref": "25",
                "dtEnd": "2017-03-04T09:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-04T08:30:00+0000",
                    "dtEnd": "2017-03-04T09:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.appointment"
                ],
                "availability": {

                },
                "id": "58bfa1c594cd42079c7cac92",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "bodyComposition",
                "dtStart": "2017-03-04T09:00:00Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T09:00:00Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "19",
                    "weight": {
                        "value": "122.35655551260706",
                        "units": "lb",
                        "originalValue": "55.5",
                        "originalUnits": "kg"
                    },
                    "fatFreeMass": {
                        "value": "89.94419372618636",
                        "units": "lb",
                        "originalValue": "40.798",
                        "originalUnits": "kg"
                    },
                    "fatRatio": {
                        "value": "26.649",
                        "units": "%"
                    },
                    "fatMassWeight": {
                        "value": "32.60636857714339",
                        "units": "lb",
                        "originalValue": "14.790",
                        "originalUnits": "kg"
                    }
                },
                "completedOn": "",
                "ref": "19",
                "dtEnd": "2017-03-04T009:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-04T09:00:00+0100",
                    "dtEnd": "2017-03-04T09:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.weight",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac8b",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "vitals",
                "dtStart": "2017-03-04T09:01:30Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T09:01:30Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "20",
                    "diastolicBloodPressure": {
                        "value": 81,
                        "units": "mmHg",
                        "originalValue": 81,
                        "originalUnits": "mmHg"
                    },
                    "systolicBloodPressure": {
                        "value": 130,
                        "units": "mmHg",
                        "originalValue": 130,
                        "originalUnits": "mmHg"
                    },
                    "heartPulse": {
                        "value": 83,
                        "units": "bpm"
                    }
                },
                "completedOn": "",
                "ref": "20",
                "dtEnd": "2017-03-04T09:01:30Z",
                "localtime": {
                    "dtStart": "2017-03-04T09:01:30+0000",
                    "dtEnd": "2017-03-04T09:01:30+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure"
                ],
                "comment": [

                ],
                "id": "58bfa1c594cd42079c7cac8c",
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "exercise",
                "dtStart": "2017-03-04T10:00:00Z",
                "summary": "reading from FitBit - 5 km run",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T10:00:00Z",
                "createdBy": "0036ebcb58b104b500000001",
                "value": {
                    "ref": "21",
                    "calorieBank": {
                        "debit": {
                            "value": 547,
                            "units": "kcal",
                            "originalValue": 547,
                            "originalUnits": "kcal"
                        }
                    },
                    "distance": {
                        "value": 5468.066491688539,
                        "units": "yd",
                        "originalValue": 5,
                        "originalUnits": "km"
                    },
                    "duration": {
                        "value": 1800000,
                        "units": "ms"
                    },
                    "name": "5 km run",
                    "note": "felt great!! :oD"
                },
                "completedOn": "",
                "ref": "21",
                "dtEnd": "2017-03-04T10:00:00+0000",
                "localtime": {
                    "dtStart": "2017-03-04T10:00:00+0100",
                    "dtEnd": "2017-03-04T10:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.exercise",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7cac8d",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "todo",
                "dtStart": "2017-03-04T10:30:00Z",
                "summary": "make yourself some coffee",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T10:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "27",
                    "text": "make yourself some coffee",
                    "dueDate": "2017-03-05T10:30:00Z"
                },
                "completedOn": "",
                "ref": "27",
                "dtEnd": "2017-03-04T010:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-04T10:30:00+0100",
                    "dtEnd": "2017-03-04T10:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.todo"
                ],
                "id": "58bfa1c594cd42079c7cac9a",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before lunch",
                "createdOn": "2017-03-04T11:52:18Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "11:52:18.000"
                    },
                    "text": "reading from Bayer - before lunch",
                    "reading": {
                        "value": "7.2",
                        "banding": "ok",
                        "units": "mmol/L",
                        "originalValue": "7.2",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-04T11:52:18Z",
                "dtEnd": "2017-03-04T11:52:18Z",
                "localtime": {
                    "dtStart": "2017-03-04T11:52:18+0000",
                    "dtEnd": "2017-03-04T11:52:18+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac97",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-04T13:00:00Z",
                "summary": "added via calories in - lunch",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T13:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "23",
                    "calorieBank": {
                        "credit": {
                            "value": "821",
                            "units": "kcal",
                            "originalValue": "821",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "23",
                "dtEnd": "2017-03-04T13:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-04T13:00:00+0100",
                    "dtEnd": "2017-03-04T13:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac8f",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after lunch",
                "createdOn": "2017-03-04T15:12:34Z",
                "value": {
                    "time": {
                        "label": "afternoon",
                        "isoTime": "15:12:34.000"
                    },
                    "text": "reading from Bayer - after lunch",
                    "reading": {
                        "value": "11.6",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "11.6",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-04T15:12:34Z",
                "dtEnd": "2017-03-04T15:12:34Z",
                "localtime": {
                    "dtStart": "2017-03-04T15:12:34+0000",
                    "dtEnd": "2017-03-04T15:12:34+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac98",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-04T19:00:00Z",
                "summary": "added via calories in - dinner",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-04T19:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "24",
                    "calorieBank": {
                        "credit": {
                            "value": "1100",
                            "units": "kcal",
                            "originalValue": "1100",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "24",
                "dtEnd": "2017-03-04T19:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-04T19:00:00+0100",
                    "dtEnd": "2017-03-04T19:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac90",
                "comment": [
                    {
                        "timestamp": "2017-03-04T19:37:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "what a healthy meal!",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cac90",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cac91"
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after dinner",
                "createdOn": "2017-03-04T20:45:19Z",
                "value": {
                    "time": {
                        "label": "evening",
                        "isoTime": "20:45:19.000"
                    },
                    "text": "reading from Bayer - after dinner",
                    "reading": {
                        "value": "12.5",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "12.5",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "120"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-04T20:45:19Z",
                "dtEnd": "2017-03-04T20:45:19Z",
                "localtime": {
                    "dtStart": "2017-03-04T20:45:19+0000",
                    "dtEnd": "2017-03-04T20:45:19+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cac99",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before breakfast",
                "createdOn": "2017-03-05T06:54:06Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "06:54:06.000"
                    },
                    "text": "reading from Bayer - before breakfast",
                    "reading": {
                        "value": "3.8",
                        "banding": "low",
                        "units": "mmol/L",
                        "originalValue": "3.8",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "30"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-05T06:54:06Z",
                "dtEnd": "2017-03-05T06:54:06Z",
                "localtime": {
                    "dtStart": "2017-03-05T06:54:06+0000",
                    "dtEnd": "2017-03-05T06:54:06+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7caca6",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "mood",
                "dtStart": "2017-03-05T07:00:28Z",
                "summary": "feeling a bit sad",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T07:00:28Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "35",
                    "text": "feeling a bit sad",
                    "time": "2017-03-05T07:00:28Z",
                    "sociability": 3,
                    "generalMood": 3,
                    "energyLevels": 1,
                    "mentalActivity": 1,
                    "anxiety": 4
                },
                "completedOn": "",
                "ref": "35",
                "dtEnd": "2017-03-05T07:00:28Z",
                "localtime": {
                    "dtStart": "2017-03-05T07:00:28+0100",
                    "dtEnd": "2017-03-05T07:00:28+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.mood"
                ],
                "id": "58bfa1c594cd42079c7caca3",
                "comment": [
                    {
                        "timestamp": "2017-03-05T09:27:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "are you feeling ok?",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7caca3",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7caca4",
                        "comment": [
                            {
                                "timestamp": "2017-03-05T09:57:32Z",
                                "userId": "0036ebcb69f670be00000001",
                                "fn": "Pauline Smith",
                                "badge": "uploads/bettertogether/images/paulineUserIcon.jpg",
                                "text": "yeah, I'm ok really!",
                                "target": {
                                    "userId": "0036ebcb84837a5400000001",
                                    "entryId": "58bfa1c594cd42079c7caca4",
                                    "componentId": "f022bf074d16dfe305d2bd2d"
                                },
                                "id": "58bfa1c594cd42079c7caca5"
                            }
                        ]
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-05T07:30:00Z",
                "summary": "added via calories in - breakfast",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T07:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "31",
                    "calorieBank": {
                        "credit": {
                            "value": "647",
                            "units": "kcal",
                            "originalValue": "647",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "31",
                "dtEnd": "2017-03-05T07:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-05T07:30:00+0100",
                    "dtEnd": "2017-03-05T07:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac9e",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "appointment",
                "dtStart": "2017-03-05T08:30:00Z",
                "summary": "booked",
                "status": "booked",
                "uid": "0036ebcb84837a5400000001",
                "attendee": [
                    {
                        "uid": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "link": {
                            "visit": "roadie://visit/user/0036ebcb84837a5400000001"
                        }
                    },
                    {
                        "uid": "0036ebcb69f670be00000001",
                        "fn": "Pauline Smith"
                    }
                ],
                "createdOn": "2017-03-05T08:30:00Z",
                "createdBy": "0036ebcb84837a5400000001",
                "value": {

                },
                "completedOn": "",
                "ref": "34",
                "dtEnd": "2017-03-05T09:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-05T08:30:00+0000",
                    "dtEnd": "2017-03-05T09:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.appointment"
                ],
                "availability": {

                },
                "id": "58bfa1c594cd42079c7caca2",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "bodyComposition",
                "dtStart": "2017-03-05T09:00:00Z",
                "summary": "reading from Withings",
                "uid": "05e0f67fb970140c66486daf", // Inqube set for testing purposes
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T09:00:00Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "28",
                    "weight": {
                        "value": "122.35655551260706",
                        "units": "lb",
                        "originalValue": "55.5",
                        "originalUnits": "kg"
                    },
                    "fatFreeMass": {
                        "value": "89.94419372618636",
                        "units": "lb",
                        "originalValue": "40.798",
                        "originalUnits": "kg"
                    },
                    "fatRatio": {
                        "value": "26.649",
                        "units": "%"
                    },
                    "fatMassWeight": {
                        "value": "32.60636857714339",
                        "units": "lb",
                        "originalValue": "14.790",
                        "originalUnits": "kg"
                    }
                },
                "completedOn": "",
                "ref": "28",
                "dtEnd": "2017-03-05T009:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-05T09:00:00+0100",
                    "dtEnd": "2017-03-05T09:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.weight",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac9b",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "vitals",
                "dtStart": "2017-03-05T09:01:30Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T09:01:30Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "29",
                    "diastolicBloodPressure": {
                        "value": 81,
                        "units": "mmHg",
                        "originalValue": 81,
                        "originalUnits": "mmHg"
                    },
                    "systolicBloodPressure": {
                        "value": 130,
                        "units": "mmHg",
                        "originalValue": 130,
                        "originalUnits": "mmHg"
                    },
                    "heartPulse": {
                        "value": 83,
                        "units": "bpm"
                    }
                },
                "completedOn": "",
                "ref": "29",
                "dtEnd": "2017-03-05T09:01:30Z",
                "localtime": {
                    "dtStart": "2017-03-05T09:01:30+0000",
                    "dtEnd": "2017-03-05T09:01:30+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure"
                ],
                "comment": [

                ],
                "id": "58bfa1c594cd42079c7cac9c",
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "exercise",
                "dtStart": "2017-03-05T10:00:00Z",
                "summary": "reading from FitBit - 5 km run",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T10:00:00Z",
                "createdBy": "0036ebcb58b104b500000001",
                "value": {
                    "ref": "30",
                    "calorieBank": {
                        "debit": {
                            "value": 547,
                            "units": "kcal",
                            "originalValue": 547,
                            "originalUnits": "kcal"
                        }
                    },
                    "distance": {
                        "value": 5468.066491688539,
                        "units": "yd",
                        "originalValue": 5,
                        "originalUnits": "km"
                    },
                    "duration": {
                        "value": 1800000,
                        "units": "ms"
                    },
                    "name": "5 km run",
                    "note": "felt great!! :oD"
                },
                "completedOn": "",
                "ref": "30",
                "dtEnd": "2017-03-05T10:00:00+0000",
                "localtime": {
                    "dtStart": "2017-03-05T10:00:00+0100",
                    "dtEnd": "2017-03-05T10:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.exercise",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7cac9d",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "todo",
                "dtStart": "2017-03-05T10:30:00Z",
                "summary": "make yourself some coffee",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T10:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "36",
                    "text": "make yourself some coffee",
                    "dueDate": "2017-03-06T10:30:00Z"
                },
                "completedOn": "",
                "ref": "36",
                "dtEnd": "2017-03-05T010:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-05T10:30:00+0100",
                    "dtEnd": "2017-03-05T10:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.todo"
                ],
                "id": "58bfa1c594cd42079c7cacaa",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before lunch",
                "createdOn": "2017-03-05T11:38:32Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "11:38:32.000"
                    },
                    "text": "reading from Bayer - before lunch",
                    "reading": {
                        "value": "6.3",
                        "banding": "ok",
                        "units": "mmol/L",
                        "originalValue": "6.3",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-05T11:38:32Z",
                "dtEnd": "2017-03-05T11:38:32Z",
                "localtime": {
                    "dtStart": "2017-03-05T11:38:32+0000",
                    "dtEnd": "2017-03-05T11:38:32+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7caca7",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-05T13:00:00Z",
                "summary": "added via calories in - lunch",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T13:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "32",
                    "calorieBank": {
                        "credit": {
                            "value": "821",
                            "units": "kcal",
                            "originalValue": "821",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "32",
                "dtEnd": "2017-03-05T13:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-05T13:00:00+0100",
                    "dtEnd": "2017-03-05T13:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cac9f",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after lunch",
                "createdOn": "2017-03-05T15:53:35Z",
                "value": {
                    "time": {
                        "label": "afternoon",
                        "isoTime": "15:53:35.000"
                    },
                    "text": "reading from Bayer - after lunch",
                    "reading": {
                        "value": "11.5",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "11.5",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-05T15:53:35Z",
                "dtEnd": "2017-03-05T15:53:35Z",
                "localtime": {
                    "dtStart": "2017-03-05T15:53:35+0000",
                    "dtEnd": "2017-03-05T15:53:35+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7caca8",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-05T19:00:00Z",
                "summary": "added via calories in - dinner",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-05T19:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "33",
                    "calorieBank": {
                        "credit": {
                            "value": "1100",
                            "units": "kcal",
                            "originalValue": "1100",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "33",
                "dtEnd": "2017-03-05T19:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-05T19:00:00+0100",
                    "dtEnd": "2017-03-05T19:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7caca0",
                "comment": [
                    {
                        "timestamp": "2017-03-05T19:37:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "what a healthy meal!",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7caca0",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7caca1"
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after dinner",
                "createdOn": "2017-03-05T20:40:23Z",
                "value": {
                    "time": {
                        "label": "evening",
                        "isoTime": "20:40:23.000"
                    },
                    "text": "reading from Bayer - after dinner",
                    "reading": {
                        "value": "12.3",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "12.3",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "120"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-05T20:40:23Z",
                "dtEnd": "2017-03-05T20:40:23Z",
                "localtime": {
                    "dtStart": "2017-03-05T20:40:23+0000",
                    "dtEnd": "2017-03-05T20:40:23+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7caca9",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before breakfast",
                "createdOn": "2017-03-06T06:14:09Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "06:14:09.000"
                    },
                    "text": "reading from Bayer - before breakfast",
                    "reading": {
                        "value": "3.8",
                        "banding": "low",
                        "units": "mmol/L",
                        "originalValue": "3.8",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "30"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-06T06:14:09Z",
                "dtEnd": "2017-03-06T06:14:09Z",
                "localtime": {
                    "dtStart": "2017-03-06T06:14:09+0000",
                    "dtEnd": "2017-03-06T06:14:09+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacb6",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "mood",
                "dtStart": "2017-03-06T07:19:12Z",
                "summary": "feeling fairly good",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T07:19:12Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "44",
                    "text": "feeling fairly good",
                    "time": "2017-03-06T07:19:12Z",
                    "sociability": 1,
                    "generalMood": 5,
                    "energyLevels": 2,
                    "mentalActivity": 2,
                    "anxiety": 5
                },
                "completedOn": "",
                "ref": "44",
                "dtEnd": "2017-03-06T07:19:12Z",
                "localtime": {
                    "dtStart": "2017-03-06T07:19:12+0100",
                    "dtEnd": "2017-03-06T07:19:12+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.mood"
                ],
                "id": "58bfa1c594cd42079c7cacb3",
                "comment": [
                    {
                        "timestamp": "2017-03-06T09:27:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "are you feeling ok?",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cacb3",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cacb4",
                        "comment": [
                            {
                                "timestamp": "2017-03-06T09:57:32Z",
                                "userId": "0036ebcb69f670be00000001",
                                "fn": "Pauline Smith",
                                "badge": "uploads/bettertogether/images/paulineUserIcon.jpg",
                                "text": "yeah, I'm ok really!",
                                "target": {
                                    "userId": "0036ebcb84837a5400000001",
                                    "entryId": "58bfa1c594cd42079c7cacb4",
                                    "componentId": "f022bf074d16dfe305d2bd2d"
                                },
                                "id": "58bfa1c594cd42079c7cacb5"
                            }
                        ]
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-06T07:30:00Z",
                "summary": "added via calories in - breakfast",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T07:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "40",
                    "calorieBank": {
                        "credit": {
                            "value": "647",
                            "units": "kcal",
                            "originalValue": "647",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "40",
                "dtEnd": "2017-03-06T07:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-06T07:30:00+0100",
                    "dtEnd": "2017-03-06T07:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacae",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "appointment",
                "dtStart": "2017-03-06T08:30:00Z",
                "summary": "booked",
                "status": "booked",
                "uid": "0036ebcb84837a5400000001",
                "attendee": [
                    {
                        "uid": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "link": {
                            "visit": "roadie://visit/user/0036ebcb84837a5400000001"
                        }
                    },
                    {
                        "uid": "0036ebcb69f670be00000001",
                        "fn": "Pauline Smith"
                    }
                ],
                "createdOn": "2017-03-06T08:30:00Z",
                "createdBy": "0036ebcb84837a5400000001",
                "value": {

                },
                "completedOn": "",
                "ref": "43",
                "dtEnd": "2017-03-06T09:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-06T08:30:00+0000",
                    "dtEnd": "2017-03-06T09:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.appointment"
                ],
                "availability": {

                },
                "id": "58bfa1c594cd42079c7cacb2",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "bodyComposition",
                "dtStart": "2017-03-06T09:00:00Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T09:00:00Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "37",
                    "weight": {
                        "value": "122.35655551260706",
                        "units": "lb",
                        "originalValue": "55.5",
                        "originalUnits": "kg"
                    },
                    "fatFreeMass": {
                        "value": "89.94419372618636",
                        "units": "lb",
                        "originalValue": "40.798",
                        "originalUnits": "kg"
                    },
                    "fatRatio": {
                        "value": "26.649",
                        "units": "%"
                    },
                    "fatMassWeight": {
                        "value": "32.60636857714339",
                        "units": "lb",
                        "originalValue": "14.790",
                        "originalUnits": "kg"
                    }
                },
                "completedOn": "",
                "ref": "37",
                "dtEnd": "2017-03-06T009:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-06T09:00:00+0100",
                    "dtEnd": "2017-03-06T09:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.weight",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacab",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "vitals",
                "dtStart": "2017-03-06T09:01:30Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T09:01:30Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "38",
                    "diastolicBloodPressure": {
                        "value": 81,
                        "units": "mmHg",
                        "originalValue": 81,
                        "originalUnits": "mmHg"
                    },
                    "systolicBloodPressure": {
                        "value": 130,
                        "units": "mmHg",
                        "originalValue": 130,
                        "originalUnits": "mmHg"
                    },
                    "heartPulse": {
                        "value": 83,
                        "units": "bpm"
                    }
                },
                "completedOn": "",
                "ref": "38",
                "dtEnd": "2017-03-06T09:01:30Z",
                "localtime": {
                    "dtStart": "2017-03-06T09:01:30+0000",
                    "dtEnd": "2017-03-06T09:01:30+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure"
                ],
                "comment": [

                ],
                "id": "58bfa1c594cd42079c7cacac",
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "exercise",
                "dtStart": "2017-03-06T10:00:00Z",
                "summary": "reading from FitBit - 5 km run",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T10:00:00Z",
                "createdBy": "0036ebcb58b104b500000001",
                "value": {
                    "ref": "39",
                    "calorieBank": {
                        "debit": {
                            "value": 547,
                            "units": "kcal",
                            "originalValue": 547,
                            "originalUnits": "kcal"
                        }
                    },
                    "distance": {
                        "value": 5468.066491688539,
                        "units": "yd",
                        "originalValue": 5,
                        "originalUnits": "km"
                    },
                    "duration": {
                        "value": 1800000,
                        "units": "ms"
                    },
                    "name": "5 km run",
                    "note": "felt great!! :oD"
                },
                "completedOn": "",
                "ref": "39",
                "dtEnd": "2017-03-06T10:00:00+0000",
                "localtime": {
                    "dtStart": "2017-03-06T10:00:00+0100",
                    "dtEnd": "2017-03-06T10:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.exercise",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7cacad",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "todo",
                "dtStart": "2017-03-06T10:30:00Z",
                "summary": "make yourself some coffee",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T10:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "45",
                    "text": "make yourself some coffee",
                    "dueDate": "2017-03-07T10:30:00Z"
                },
                "completedOn": "",
                "ref": "45",
                "dtEnd": "2017-03-06T010:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-06T10:30:00+0100",
                    "dtEnd": "2017-03-06T10:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.todo"
                ],
                "id": "58bfa1c594cd42079c7cacba",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before lunch",
                "createdOn": "2017-03-06T11:10:54Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "11:10:54.000"
                    },
                    "text": "reading from Bayer - before lunch",
                    "reading": {
                        "value": "7.3",
                        "banding": "ok",
                        "units": "mmol/L",
                        "originalValue": "7.3",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-06T11:10:54Z",
                "dtEnd": "2017-03-06T11:10:54Z",
                "localtime": {
                    "dtStart": "2017-03-06T11:10:54+0000",
                    "dtEnd": "2017-03-06T11:10:54+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacb7",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-06T13:00:00Z",
                "summary": "added via calories in - lunch",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T13:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "41",
                    "calorieBank": {
                        "credit": {
                            "value": "821",
                            "units": "kcal",
                            "originalValue": "821",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "41",
                "dtEnd": "2017-03-06T13:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-06T13:00:00+0100",
                    "dtEnd": "2017-03-06T13:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacaf",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after lunch",
                "createdOn": "2017-03-06T15:14:56Z",
                "value": {
                    "time": {
                        "label": "afternoon",
                        "isoTime": "15:14:56.000"
                    },
                    "text": "reading from Bayer - after lunch",
                    "reading": {
                        "value": "11.7",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "11.7",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-06T15:14:56Z",
                "dtEnd": "2017-03-06T15:14:56Z",
                "localtime": {
                    "dtStart": "2017-03-06T15:14:56+0000",
                    "dtEnd": "2017-03-06T15:14:56+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacb8",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-06T19:00:00Z",
                "summary": "added via calories in - dinner",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-06T19:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "42",
                    "calorieBank": {
                        "credit": {
                            "value": "1100",
                            "units": "kcal",
                            "originalValue": "1100",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "42",
                "dtEnd": "2017-03-06T19:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-06T19:00:00+0100",
                    "dtEnd": "2017-03-06T19:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacb0",
                "comment": [
                    {
                        "timestamp": "2017-03-06T19:37:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "what a healthy meal!",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cacb0",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cacb1"
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after dinner",
                "createdOn": "2017-03-06T20:53:18Z",
                "value": {
                    "time": {
                        "label": "evening",
                        "isoTime": "20:53:18.000"
                    },
                    "text": "reading from Bayer - after dinner",
                    "reading": {
                        "value": "10.9",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "10.9",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "120"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-06T20:53:18Z",
                "dtEnd": "2017-03-06T20:53:18Z",
                "localtime": {
                    "dtStart": "2017-03-06T20:53:18+0000",
                    "dtEnd": "2017-03-06T20:53:18+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacb9",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before breakfast",
                "createdOn": "2017-03-07T06:25:02Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "06:25:02.000"
                    },
                    "text": "reading from Bayer - before breakfast",
                    "reading": {
                        "value": "4.9",
                        "banding": "low",
                        "units": "mmol/L",
                        "originalValue": "4.9",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "30"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-07T06:25:02Z",
                "dtEnd": "2017-03-07T06:25:02Z",
                "localtime": {
                    "dtStart": "2017-03-07T06:25:02+0000",
                    "dtEnd": "2017-03-07T06:25:02+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacc6",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-07T07:30:00Z",
                "summary": "added via calories in - breakfast",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T07:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "49",
                    "calorieBank": {
                        "credit": {
                            "value": "647",
                            "units": "kcal",
                            "originalValue": "647",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "49",
                "dtEnd": "2017-03-07T07:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-07T07:30:00+0100",
                    "dtEnd": "2017-03-07T07:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacbe",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "mood",
                "dtStart": "2017-03-07T07:49:08Z",
                "summary": "feeling ok",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T07:49:08Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "53",
                    "text": "feeling ok",
                    "time": "2017-03-07T07:49:08Z",
                    "sociability": 2,
                    "generalMood": 4,
                    "energyLevels": 1,
                    "mentalActivity": 3,
                    "anxiety": 1
                },
                "completedOn": "",
                "ref": "53",
                "dtEnd": "2017-03-07T07:49:08Z",
                "localtime": {
                    "dtStart": "2017-03-07T07:49:08+0100",
                    "dtEnd": "2017-03-07T07:49:08+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.mood"
                ],
                "id": "58bfa1c594cd42079c7cacc3",
                "comment": [
                    {
                        "timestamp": "2017-03-07T09:27:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "are you feeling ok?",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cacc3",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cacc4",
                        "comment": [
                            {
                                "timestamp": "2017-03-07T09:57:32Z",
                                "userId": "0036ebcb69f670be00000001",
                                "fn": "Pauline Smith",
                                "badge": "uploads/bettertogether/images/paulineUserIcon.jpg",
                                "text": "yeah, I'm ok really!",
                                "target": {
                                    "userId": "0036ebcb84837a5400000001",
                                    "entryId": "58bfa1c594cd42079c7cacc4",
                                    "componentId": "f022bf074d16dfe305d2bd2d"
                                },
                                "id": "58bfa1c594cd42079c7cacc5"
                            }
                        ]
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "appointment",
                "dtStart": "2017-03-07T08:30:00Z",
                "summary": "booked",
                "status": "booked",
                "uid": "0036ebcb84837a5400000001",
                "attendee": [
                    {
                        "uid": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "link": {
                            "visit": "roadie://visit/user/0036ebcb84837a5400000001"
                        }
                    },
                    {
                        "uid": "0036ebcb69f670be00000001",
                        "fn": "Pauline Smith"
                    }
                ],
                "createdOn": "2017-03-07T08:30:00Z",
                "createdBy": "0036ebcb84837a5400000001",
                "value": {

                },
                "completedOn": "",
                "ref": "52",
                "dtEnd": "2017-03-07T09:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-07T08:30:00+0000",
                    "dtEnd": "2017-03-07T09:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.appointment"
                ],
                "availability": {

                },
                "id": "58bfa1c594cd42079c7cacc2",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "bodyComposition",
                "dtStart": "2017-03-07T09:00:00Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T09:00:00Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "46",
                    "weight": {
                        "value": "122.35655551260706",
                        "units": "lb",
                        "originalValue": "55.5",
                        "originalUnits": "kg"
                    },
                    "fatFreeMass": {
                        "value": "89.94419372618636",
                        "units": "lb",
                        "originalValue": "40.798",
                        "originalUnits": "kg"
                    },
                    "fatRatio": {
                        "value": "26.649",
                        "units": "%"
                    },
                    "fatMassWeight": {
                        "value": "32.60636857714339",
                        "units": "lb",
                        "originalValue": "14.790",
                        "originalUnits": "kg"
                    }
                },
                "completedOn": "",
                "ref": "46",
                "dtEnd": "2017-03-07T009:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-07T09:00:00+0100",
                    "dtEnd": "2017-03-07T09:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.weight",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacbb",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "vitals",
                "dtStart": "2017-03-07T09:01:30Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T09:01:30Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "47",
                    "diastolicBloodPressure": {
                        "value": 81,
                        "units": "mmHg",
                        "originalValue": 81,
                        "originalUnits": "mmHg"
                    },
                    "systolicBloodPressure": {
                        "value": 130,
                        "units": "mmHg",
                        "originalValue": 130,
                        "originalUnits": "mmHg"
                    },
                    "heartPulse": {
                        "value": 83,
                        "units": "bpm"
                    }
                },
                "completedOn": "",
                "ref": "47",
                "dtEnd": "2017-03-07T09:01:30Z",
                "localtime": {
                    "dtStart": "2017-03-07T09:01:30+0000",
                    "dtEnd": "2017-03-07T09:01:30+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure"
                ],
                "comment": [

                ],
                "id": "58bfa1c594cd42079c7cacbc",
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "exercise",
                "dtStart": "2017-03-07T10:00:00Z",
                "summary": "reading from FitBit - 5 km run",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T10:00:00Z",
                "createdBy": "0036ebcb58b104b500000001",
                "value": {
                    "ref": "48",
                    "calorieBank": {
                        "debit": {
                            "value": 547,
                            "units": "kcal",
                            "originalValue": 547,
                            "originalUnits": "kcal"
                        }
                    },
                    "distance": {
                        "value": 5468.066491688539,
                        "units": "yd",
                        "originalValue": 5,
                        "originalUnits": "km"
                    },
                    "duration": {
                        "value": 1800000,
                        "units": "ms"
                    },
                    "name": "5 km run",
                    "note": "felt great!! :oD"
                },
                "completedOn": "",
                "ref": "48",
                "dtEnd": "2017-03-07T10:00:00+0000",
                "localtime": {
                    "dtStart": "2017-03-07T10:00:00+0100",
                    "dtEnd": "2017-03-07T10:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.exercise",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7cacbd",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "todo",
                "dtStart": "2017-03-07T10:30:00Z",
                "summary": "make yourself some coffee",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T10:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "54",
                    "text": "make yourself some coffee",
                    "dueDate": "2017-03-08T10:30:00Z"
                },
                "completedOn": "",
                "ref": "54",
                "dtEnd": "2017-03-07T010:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-07T10:30:00+0100",
                    "dtEnd": "2017-03-07T10:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.todo"
                ],
                "id": "58bfa1c594cd42079c7cacca",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before lunch",
                "createdOn": "2017-03-07T11:58:52Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "11:58:52.000"
                    },
                    "text": "reading from Bayer - before lunch",
                    "reading": {
                        "value": "6.4",
                        "banding": "ok",
                        "units": "mmol/L",
                        "originalValue": "6.4",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-07T11:58:52Z",
                "dtEnd": "2017-03-07T11:58:52Z",
                "localtime": {
                    "dtStart": "2017-03-07T11:58:52+0000",
                    "dtEnd": "2017-03-07T11:58:52+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacc7",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-07T13:00:00Z",
                "summary": "added via calories in - lunch",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T13:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "50",
                    "calorieBank": {
                        "credit": {
                            "value": "821",
                            "units": "kcal",
                            "originalValue": "821",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "50",
                "dtEnd": "2017-03-07T13:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-07T13:00:00+0100",
                    "dtEnd": "2017-03-07T13:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacbf",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after lunch",
                "createdOn": "2017-03-07T15:04:36Z",
                "value": {
                    "time": {
                        "label": "afternoon",
                        "isoTime": "15:04:36.000"
                    },
                    "text": "reading from Bayer - after lunch",
                    "reading": {
                        "value": "10.4",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "10.4",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-07T15:04:36Z",
                "dtEnd": "2017-03-07T15:04:36Z",
                "localtime": {
                    "dtStart": "2017-03-07T15:04:36+0000",
                    "dtEnd": "2017-03-07T15:04:36+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacc8",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-07T19:00:00Z",
                "summary": "added via calories in - dinner",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-07T19:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "51",
                    "calorieBank": {
                        "credit": {
                            "value": "1100",
                            "units": "kcal",
                            "originalValue": "1100",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "51",
                "dtEnd": "2017-03-07T19:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-07T19:00:00+0100",
                    "dtEnd": "2017-03-07T19:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacc0",
                "comment": [
                    {
                        "timestamp": "2017-03-07T19:37:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "what a healthy meal!",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cacc0",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cacc1"
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after dinner",
                "createdOn": "2017-03-07T20:21:20Z",
                "value": {
                    "time": {
                        "label": "evening",
                        "isoTime": "20:21:20.000"
                    },
                    "text": "reading from Bayer - after dinner",
                    "reading": {
                        "value": "12.0",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "12.0",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "120"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-07T20:21:20Z",
                "dtEnd": "2017-03-07T20:21:20Z",
                "localtime": {
                    "dtStart": "2017-03-07T20:21:20+0000",
                    "dtEnd": "2017-03-07T20:21:20+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacc9",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before breakfast",
                "createdOn": "2017-03-08T06:19:51Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "06:19:51.000"
                    },
                    "text": "reading from Bayer - before breakfast",
                    "reading": {
                        "value": "3.7",
                        "banding": "low",
                        "units": "mmol/L",
                        "originalValue": "3.7",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "30"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-08T06:19:51Z",
                "dtEnd": "2017-03-08T06:19:51Z",
                "localtime": {
                    "dtStart": "2017-03-08T06:19:51+0000",
                    "dtEnd": "2017-03-08T06:19:51+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacd6",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-08T07:30:00Z",
                "summary": "added via calories in - breakfast",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T07:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "58",
                    "calorieBank": {
                        "credit": {
                            "value": "647",
                            "units": "kcal",
                            "originalValue": "647",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "58",
                "dtEnd": "2017-03-08T07:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-08T07:30:00+0100",
                    "dtEnd": "2017-03-08T07:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacce",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "mood",
                "dtStart": "2017-03-08T07:55:09Z",
                "summary": "feeling fairly good",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T07:55:09Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "62",
                    "text": "feeling fairly good",
                    "time": "2017-03-08T07:55:09Z",
                    "sociability": 3,
                    "generalMood": 5,
                    "energyLevels": 2,
                    "mentalActivity": 2,
                    "anxiety": 5
                },
                "completedOn": "",
                "ref": "62",
                "dtEnd": "2017-03-08T07:55:09Z",
                "localtime": {
                    "dtStart": "2017-03-08T07:55:09+0100",
                    "dtEnd": "2017-03-08T07:55:09+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.mood"
                ],
                "id": "58bfa1c594cd42079c7cacd3",
                "comment": [
                    {
                        "timestamp": "2017-03-08T09:27:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "are you feeling ok?",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cacd3",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cacd4",
                        "comment": [
                            {
                                "timestamp": "2017-03-08T09:57:32Z",
                                "userId": "0036ebcb69f670be00000001",
                                "fn": "Pauline Smith",
                                "badge": "uploads/bettertogether/images/paulineUserIcon.jpg",
                                "text": "yeah, I'm ok really!",
                                "target": {
                                    "userId": "0036ebcb84837a5400000001",
                                    "entryId": "58bfa1c594cd42079c7cacd4",
                                    "componentId": "f022bf074d16dfe305d2bd2d"
                                },
                                "id": "58bfa1c594cd42079c7cacd5"
                            }
                        ]
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "appointment",
                "dtStart": "2017-03-08T08:30:00Z",
                "summary": "booked",
                "status": "booked",
                "uid": "0036ebcb84837a5400000001",
                "attendee": [
                    {
                        "uid": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "link": {
                            "visit": "roadie://visit/user/0036ebcb84837a5400000001"
                        }
                    },
                    {
                        "uid": "0036ebcb69f670be00000001",
                        "fn": "Pauline Smith"
                    }
                ],
                "createdOn": "2017-03-08T08:30:00Z",
                "createdBy": "0036ebcb84837a5400000001",
                "value": {

                },
                "completedOn": "",
                "ref": "61",
                "dtEnd": "2017-03-08T09:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-08T08:30:00+0000",
                    "dtEnd": "2017-03-08T09:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.appointment"
                ],
                "availability": {

                },
                "id": "58bfa1c594cd42079c7cacd2",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "bodyComposition",
                "dtStart": "2017-03-08T09:00:00Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T09:00:00Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "55",
                    "weight": {
                        "value": "122.35655551260706",
                        "units": "lb",
                        "originalValue": "55.5",
                        "originalUnits": "kg"
                    },
                    "fatFreeMass": {
                        "value": "89.94419372618636",
                        "units": "lb",
                        "originalValue": "40.798",
                        "originalUnits": "kg"
                    },
                    "fatRatio": {
                        "value": "26.649",
                        "units": "%"
                    },
                    "fatMassWeight": {
                        "value": "32.60636857714339",
                        "units": "lb",
                        "originalValue": "14.790",
                        "originalUnits": "kg"
                    }
                },
                "completedOn": "",
                "ref": "55",
                "dtEnd": "2017-03-08T009:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-08T09:00:00+0100",
                    "dtEnd": "2017-03-08T09:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.weight",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7caccb",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "vitals",
                "dtStart": "2017-03-08T09:01:30Z",
                "summary": "reading from Withings",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T09:01:30Z",
                "createdBy": "0036ebcbd6cb29b000000001",
                "value": {
                    "ref": "56",
                    "diastolicBloodPressure": {
                        "value": 81,
                        "units": "mmHg",
                        "originalValue": 81,
                        "originalUnits": "mmHg"
                    },
                    "systolicBloodPressure": {
                        "value": 130,
                        "units": "mmHg",
                        "originalValue": 130,
                        "originalUnits": "mmHg"
                    },
                    "heartPulse": {
                        "value": 83,
                        "units": "bpm"
                    }
                },
                "completedOn": "",
                "ref": "56",
                "dtEnd": "2017-03-08T09:01:30Z",
                "localtime": {
                    "dtStart": "2017-03-08T09:01:30+0000",
                    "dtEnd": "2017-03-08T09:01:30+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.bloodPressure"
                ],
                "comment": [

                ],
                "id": "58bfa1c594cd42079c7caccc",
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "exercise",
                "dtStart": "2017-03-08T10:00:00Z",
                "summary": "reading from FitBit - 5 km run",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T10:00:00Z",
                "createdBy": "0036ebcb58b104b500000001",
                "value": {
                    "ref": "57",
                    "calorieBank": {
                        "debit": {
                            "value": 547,
                            "units": "kcal",
                            "originalValue": 547,
                            "originalUnits": "kcal"
                        }
                    },
                    "distance": {
                        "value": 5468.066491688539,
                        "units": "yd",
                        "originalValue": 5,
                        "originalUnits": "km"
                    },
                    "duration": {
                        "value": 1800000,
                        "units": "ms"
                    },
                    "name": "5 km run",
                    "note": "felt great!! :oD"
                },
                "completedOn": "",
                "ref": "57",
                "dtEnd": "2017-03-08T10:00:00+0000",
                "localtime": {
                    "dtStart": "2017-03-08T10:00:00+0100",
                    "dtEnd": "2017-03-08T10:00:00+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.health",
                    "HealthPump.tag.exercise",
                    "HealthPump.tag.calorieBank"
                ],
                "id": "58bfa1c594cd42079c7caccd",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "todo",
                "dtStart": "2017-03-08T10:30:00Z",
                "summary": "make yourself some coffee",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T10:30:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "63",
                    "text": "make yourself some coffee",
                    "dueDate": "2017-03-09T10:30:00Z"
                },
                "completedOn": "",
                "ref": "63",
                "dtEnd": "2017-03-08T010:30:00Z",
                "localtime": {
                    "dtStart": "2017-03-08T10:30:00+0100",
                    "dtEnd": "2017-03-08T10:30:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "System.tag.todo"
                ],
                "id": "58bfa1c594cd42079c7cacda",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "before lunch",
                "createdOn": "2017-03-08T11:18:29Z",
                "value": {
                    "time": {
                        "label": "morning",
                        "isoTime": "11:18:29.000"
                    },
                    "text": "reading from Bayer - before lunch",
                    "reading": {
                        "value": "6.0",
                        "banding": "ok",
                        "units": "mmol/L",
                        "originalValue": "6.0",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "beforeMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-08T11:18:29Z",
                "dtEnd": "2017-03-08T11:18:29Z",
                "localtime": {
                    "dtStart": "2017-03-08T11:18:29+0000",
                    "dtEnd": "2017-03-08T11:18:29+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacd7",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-08T13:00:00Z",
                "summary": "added via calories in - lunch",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T13:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "59",
                    "calorieBank": {
                        "credit": {
                            "value": "821",
                            "units": "kcal",
                            "originalValue": "821",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "59",
                "dtEnd": "2017-03-08T13:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-08T13:00:00+0100",
                    "dtEnd": "2017-03-08T13:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7caccf",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after lunch",
                "createdOn": "2017-03-08T15:50:49Z",
                "value": {
                    "time": {
                        "label": "afternoon",
                        "isoTime": "15:50:49.000"
                    },
                    "text": "reading from Bayer - after lunch",
                    "reading": {
                        "value": "10.4",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "10.4",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "15"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-08T15:50:49Z",
                "dtEnd": "2017-03-08T15:50:49Z",
                "localtime": {
                    "dtStart": "2017-03-08T15:50:49+0000",
                    "dtEnd": "2017-03-08T15:50:49+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacd8",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "meal",
                "dtStart": "2017-03-08T19:00:00Z",
                "summary": "added via calories in - dinner",
                "uid": "0036ebcb69f670be00000001",
                "attendee": [
                    {
                        "uid": "0036ebcb69f670be00000001"
                    }
                ],
                "createdOn": "2017-03-08T19:00:00Z",
                "createdBy": "0036ebcb69f670be00000001",
                "value": {
                    "ref": "60",
                    "calorieBank": {
                        "credit": {
                            "value": "1100",
                            "units": "kcal",
                            "originalValue": "1100",
                            "originalUnits": "kcal"
                        }
                    },
                    "name": "meal"
                },
                "completedOn": "",
                "ref": "60",
                "dtEnd": "2017-03-08T19:00:00Z",
                "localtime": {
                    "dtStart": "2017-03-08T19:00:00+0100",
                    "dtEnd": "2017-03-08T19:00:00+0100",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.calorieBank",
                    "BetterTogether.tag.meal",
                    "HealthPump.tag.health"
                ],
                "id": "58bfa1c594cd42079c7cacd0",
                "comment": [
                    {
                        "timestamp": "2017-03-08T19:37:32Z",
                        "userId": "0036ebcb84837a5400000001",
                        "fn": "Jane Williams",
                        "badge": "uploads/bettertogether/images/janeUserIcon.jpg",
                        "text": "what a healthy meal!",
                        "target": {
                            "userId": "0036ebcb69f670be00000001",
                            "entryId": "58bfa1c594cd42079c7cacd0",
                            "componentId": "f022bf074d16dfe305d2bd2d"
                        },
                        "id": "58bfa1c594cd42079c7cacd1"
                    }
                ],
                "averageReview": 0.0,
                "review": [

                ]
            },
            {
                "type": "diabetes",
                "summary": "after dinner",
                "createdOn": "2017-03-08T20:20:14Z",
                "value": {
                    "time": {
                        "label": "evening",
                        "isoTime": "20:20:14.000"
                    },
                    "text": "reading from Bayer - after dinner",
                    "reading": {
                        "value": "12.3",
                        "banding": "high",
                        "units": "mmol/L",
                        "originalValue": "12.3",
                        "originalUnits": "mmol/L"
                    },
                    "meal": {
                        "indicator": "afterMeal",
                        "mins": "120"
                    },
                    "activity": {
                        "indicator": "no"
                    },
                    "feeling": {
                        "indicator": "no"
                    },
                    "sick": {
                        "indicator": "no"
                    },
                    "stress": {
                        "indicator": "no"
                    },
                    "illness": {
                        "indicator": "no"
                    }
                },
                "dtStart": "2017-03-08T20:20:14Z",
                "dtEnd": "2017-03-08T20:20:14Z",
                "localtime": {
                    "dtStart": "2017-03-08T20:20:14+0000",
                    "dtEnd": "2017-03-08T20:20:14+0000",
                    "tz": "Europe/London"
                },
                "tag": [
                    "HealthPump.tag.diabetes"
                ],
                "uid": "0036ebcb69f670be00000001",
                "attendee": [

                ],
                "createdBy": "0036ebcb69f670be00000001",
                "id": "58bfa1c594cd42079c7cacd9",
                "comment": [

                ],
                "averageReview": 0.0,
                "review": [

                ]
            }
        ],
        "tag": [
            {
                "type": "BetterTogether.tag.meal",
                "label": "meal",
                "alias": "meal",
                "photo": "",
                "status": ""
            },
            {
                "type": "HealthPump.tag.bloodPressure",
                "label": "blood pressure",
                "alias": "bloodpressure",
                "photo": "/PumpHouse/uploads/healthpump/images/tags/heart.png",
                "status": ""
            },
            {
                "type": "HealthPump.tag.calorieBank",
                "label": "calorie bank",
                "alias": "caloriebank",
                "photo": "/PumpHouse/uploads/healthpump/images/tags/calorieBank.png",
                "status": ""
            },
            {
                "type": "HealthPump.tag.diabetes",
                "label": "diabetes",
                "alias": "diabetes",
                "photo": "/PumpHouse/uploads/healthpump/images/tags/diabetes.png",
                "status": ""
            },
            {
                "type": "HealthPump.tag.exercise",
                "label": "exercise",
                "alias": "exercise",
                "photo": "/PumpHouse/uploads/healthpump/images/tags/exercise.png",
                "status": ""
            },
            {
                "type": "HealthPump.tag.health",
                "label": "health",
                "alias": "health",
                "photo": "/PumpHouse/uploads/healthpump/images/tags/health.png",
                "status": ""
            },
            {
                "type": "HealthPump.tag.mood",
                "label": "mood",
                "alias": "mood",
                "photo": "/PumpHouse/uploads/healthpump/images/tags/mood.png",
                "status": ""
            },
            {
                "type": "HealthPump.tag.weight",
                "label": "weight",
                "alias": "weight",
                "photo": "/PumpHouse/uploads/healthpump/images/tags/weight.png",
                "status": ""
            },
            {
                "type": "System.tag.appointment",
                "label": "appointment",
                "alias": "appointment",
                "photo": "/PumpHouse/uploads/system/images/tags/appointment.png",
                "status": ""
            },
            {
                "type": "System.tag.todo",
                "label": "todo",
                "alias": "todo",
                "photo": "/PumpHouse/uploads/system/images/tags/todo.png",
                "status": ""
            }
        ],
        "status": {
            "code": "success"
        }
    }
};
