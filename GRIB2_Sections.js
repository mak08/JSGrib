const GRIB2_SECTIONS = [
    {
        "section": "0",
        "name": "INDICATOR_SECTION",
        "fields": [
            {
                "name": "identifier",
                "octets": "1-4",
                "type": "ascii"
            },
            {
                "name": "reserved",
                "octets": "5-6",
                "type": "unsigned"
            },
            {
                "name": "discipline",
                "octets": "7",
                "type": "codetable"
            },
            {
                "name": "editionNumber",
                "octets": "8",
                "type": "unsigned"
            },
            {
                "name": "totalLength",
                "octets": "9-16",
                "type": "unsigned"
            }
        ],
        "templates": false
    },
    {
        "section": "1",
        "name": "IDENTIFICATION_SECTION",
        "fields": [
            {
                "name": "section1Length",
                "octets": "1-4",
                "type": "unsigned"
            },
            {
                "name": "numberOfSection",
                "octets": "5",
                "type": "unsigned"
            },
            {
                "name": "centre",
                "octets": "6-7",
                "type": "codetable"
            },
            {
                "name": "subCentre",
                "octets": "8-9",
                "type": "unsigned"
            },
            {
                "name": "tablesVersion",
                "octets": "10",
                "type": "codetable"
            },
            {
                "name": "localTablesVersion",
                "octets": "11",
                "type": "codetable"
            },
            {
                "name": "significanceOfReferenceTime",
                "octets": "12",
                "type": "codetable"
            },
            {
                "name": "year",
                "octets": "13-14",
                "type": "unsigned"
            },
            {
                "name": "month",
                "octets": "15",
                "type": "unsigned"
            },
            {
                "name": "day",
                "octets": "16",
                "type": "unsigned"
            },
            {
                "name": "hour",
                "octets": "17",
                "type": "unsigned"
            },
            {
                "name": "minute",
                "octets": "18",
                "type": "unsigned"
            },
            {
                "name": "second",
                "octets": "19",
                "type": "unsigned"
            },
            {
                "name": "productionStatusOfProcessedData",
                "octets": "20",
                "type": "codetable"
            },
            {
                "name": "typeOfProcessedData",
                "octets": "21",
                "type": "codetable"
            },
            {
                "name": "identificationTemplateNumber",
                "octets": "22-23",
                "type": "unsigned"
            },
            {
                "name": "identificationTemplateNumber",
                "octets": "24-nn",
                "type": "template"
            }
        ],
        "templates": false
    },
    {
        "section": "2",
        "name": "LOCAL_USE_SECTION",
        "fields": [
            {
                "name": "section2Length",
                "octets": "1-4",
                "type": "unsigned"
            },
            {
                "name": "numberOfSection",
                "octets": "5",
                "type": "unsigned"
            },
            {
                "name": "Local",
                "octets": "6-nn",
                "type": "use"
            }
        ],
        "templates": false
    },
    {
        "section": "3",
        "name": "GRID_DEFINITION_SECTION",
        "fields": [
            {
                "name": "section3Length",
                "octets": "1-4",
                "type": "unsigned"
            },
            {
                "name": "numberOfSection",
                "octets": "5",
                "type": "unsigned"
            },
            {
                "name": "sourceOfGridDefinition",
                "octets": "6",
                "type": "codetable"
            },
            {
                "name": "numberOfDataPoints",
                "octets": "7-10",
                "type": "unsigned"
            },
            {
                "name": "numberOfOctectsForNumberOfPoints",
                "octets": "11",
                "type": "unsigned"
            },
            {
                "name": "interpretationOfNumberOfPoints",
                "octets": "12",
                "type": "codetable"
            },
            {
                "name": "gridDefinitionTemplateNumber",
                "octets": "13-14",
                "type": "codetable"
            },
            {
                "name": "gridDefinitionTemplateNumber",
                "octets": "15-xx",
                "type": "template"
            },
            {
                "name": "numbers",
                "octets": "[xx+1]-nn",
                "type": "unsigned"
            }
        ],
        "templates": [
            {
                "section": "3",
                "template": "40",
                "fields": [
                    {
                        "name": "shapeOfTheEarth",
                        "octets": "15",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfRadiusOfSphericalEarth",
                        "octets": "16",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfRadiusOfSphericalEarth",
                        "octets": "17-20",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfMajorAxisOfOblateSpheroidEarth",
                        "octets": "21",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfMajorAxisOfOblateSpheroidEarth",
                        "octets": "22-25",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfMinorAxisOfOblateSpheroidEarth",
                        "octets": "26",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfMinorAxisOfOblateSpheroidEarth",
                        "octets": "27-30",
                        "type": "unsigned"
                    },
                    {
                        "name": "Ni",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "Nj",
                        "octets": "35-38",
                        "type": "unsigned"
                    },
                    {
                        "name": "basicAngleOfTheInitialProductionDomain",
                        "octets": "39-42",
                        "type": "unsigned"
                    },
                    {
                        "name": "subdivisionsOfBasicAngle",
                        "octets": "43-46",
                        "type": "unsigned"
                    },
                    {
                        "name": "latitudeOfFirstGridPoint",
                        "octets": "47-50",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfFirstGridPoint",
                        "octets": "51-54",
                        "type": "signed"
                    },
                    {
                        "name": "resolutionAndComponentFlags",
                        "octets": "55",
                        "type": "codeflag"
                    },
                    {
                        "name": "latitudeOfLastGridPoint",
                        "octets": "56-59",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfLastGridPoint",
                        "octets": "60-63",
                        "type": "signed"
                    },
                    {
                        "name": "iDirectionIncrement",
                        "octets": "64-67",
                        "type": "unsigned"
                    },
                    {
                        "name": "N",
                        "octets": "68-71",
                        "type": "unsigned"
                    },
                    {
                        "name": "scanningMode",
                        "octets": "72",
                        "type": "codeflag"
                    },
                    {
                        "name": "pl",
                        "octets": "73-nn",
                        "type": "unsigned"
                    }
                ]
            },
            {
                "section": "3",
                "template": "10",
                "fields": [
                    {
                        "name": "shapeOfTheEarth",
                        "octets": "15",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfRadiusOfSphericalEarth",
                        "octets": "16",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfRadiusOfSphericalEarth",
                        "octets": "17-20",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfMajorAxisOfOblateSpheroidEarth",
                        "octets": "21",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfMajorAxisOfOblateSpheroidEarth",
                        "octets": "22-25",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfMinorAxisOfOblateSpheroidEarth",
                        "octets": "26",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfMinorAxisOfOblateSpheroidEarth",
                        "octets": "27-30",
                        "type": "unsigned"
                    },
                    {
                        "name": "Ni",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "Nj",
                        "octets": "35-38",
                        "type": "unsigned"
                    },
                    {
                        "name": "latitudeOfFirstGridPoint",
                        "octets": "39-42",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfFirstGridPoint",
                        "octets": "43-46",
                        "type": "signed"
                    },
                    {
                        "name": "resolutionAndComponentFlags",
                        "octets": "47",
                        "type": "codeflag"
                    },
                    {
                        "name": "LaD",
                        "octets": "48-51",
                        "type": "signed"
                    },
                    {
                        "name": "latitudeOfLastGridPoint",
                        "octets": "52-55",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfLastGridPoint",
                        "octets": "56-59",
                        "type": "signed"
                    },
                    {
                        "name": "scanningMode",
                        "octets": "60",
                        "type": "codeflag"
                    },
                    {
                        "name": "orientationOfTheGrid",
                        "octets": "61-64",
                        "type": "unsigned"
                    },
                    {
                        "name": "Di",
                        "octets": "65-68",
                        "type": "unsigned"
                    },
                    {
                        "name": "Dj",
                        "octets": "69-72",
                        "type": "unsigned"
                    },
                    {
                        "name": "pl",
                        "octets": "73-nn",
                        "type": "unsigned"
                    }
                ]
            },
            {
                "section": "3",
                "template": "2",
                "fields": [
                    {
                        "name": "shapeOfTheEarth",
                        "octets": "15",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfRadiusOfSphericalEarth",
                        "octets": "16",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfRadiusOfSphericalEarth",
                        "octets": "17-20",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfEarthMajorAxis",
                        "octets": "21",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfEarthMajorAxis",
                        "octets": "22-25",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfEarthMinorAxis",
                        "octets": "26",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfEarthMinorAxis",
                        "octets": "27-30",
                        "type": "unsigned"
                    },
                    {
                        "name": "Ni",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "Nj",
                        "octets": "35-38",
                        "type": "unsigned"
                    },
                    {
                        "name": "basicAngleOfTheInitialProductionDomain",
                        "octets": "39-42",
                        "type": "unsigned"
                    },
                    {
                        "name": "subdivisionsOfBasicAngle",
                        "octets": "43-46",
                        "type": "unsigned"
                    },
                    {
                        "name": "latitudeOfFirstGridPoint",
                        "octets": "47-50",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfFirstGridPoint",
                        "octets": "51-54",
                        "type": "signed"
                    },
                    {
                        "name": "resolutionAndComponentFlags",
                        "octets": "55",
                        "type": "codeflag"
                    },
                    {
                        "name": "latitudeOfLastGridPoint",
                        "octets": "56-59",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfLastGridPoint",
                        "octets": "60-63",
                        "type": "signed"
                    },
                    {
                        "name": "iDirectionIncrement",
                        "octets": "64-67",
                        "type": "unsigned"
                    },
                    {
                        "name": "jDirectionIncrement",
                        "octets": "68-71",
                        "type": "unsigned"
                    },
                    {
                        "name": "scanningMode",
                        "octets": "72",
                        "type": "codeflag"
                    },
                    {
                        "name": "latitudeOfThePoleOfStretching",
                        "octets": "73-76",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfThePoleOfStretching",
                        "octets": "77-80",
                        "type": "signed"
                    },
                    {
                        "name": "stretchingFactorScaled",
                        "octets": "81-84",
                        "type": "unsigned"
                    },
                    {
                        "name": "pl",
                        "octets": "85-nn",
                        "type": "unsigned"
                    }
                ]
            },
            {
                "section": "3",
                "template": "1",
                "fields": [
                    {
                        "name": "shapeOfTheEarth",
                        "octets": "15",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfRadiusOfSphericalEarth",
                        "octets": "16",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfRadiusOfSphericalEarth",
                        "octets": "17-20",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfEarthMajorAxis",
                        "octets": "21",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfEarthMajorAxis",
                        "octets": "22-25",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfEarthMinorAxis",
                        "octets": "26",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfEarthMinorAxis",
                        "octets": "27-30",
                        "type": "unsigned"
                    },
                    {
                        "name": "Ni",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "Nj",
                        "octets": "35-38",
                        "type": "unsigned"
                    },
                    {
                        "name": "basicAngleOfTheInitialProductionDomain",
                        "octets": "39-42",
                        "type": "unsigned"
                    },
                    {
                        "name": "subdivisionsOfBasicAngle",
                        "octets": "43-46",
                        "type": "unsigned"
                    },
                    {
                        "name": "latitudeOfFirstGridPoint",
                        "octets": "47-50",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfFirstGridPoint",
                        "octets": "51-54",
                        "type": "signed"
                    },
                    {
                        "name": "resolutionAndComponentFlags",
                        "octets": "55",
                        "type": "codeflag"
                    },
                    {
                        "name": "latitudeOfLastGridPoint",
                        "octets": "56-59",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfLastGridPoint",
                        "octets": "60-63",
                        "type": "signed"
                    },
                    {
                        "name": "iDirectionIncrement",
                        "octets": "64-67",
                        "type": "unsigned"
                    },
                    {
                        "name": "jDirectionIncrement",
                        "octets": "68-71",
                        "type": "unsigned"
                    },
                    {
                        "name": "scanningMode",
                        "octets": "72",
                        "type": "codeflag"
                    },
                    {
                        "name": "latitudeOfSouthernPole",
                        "octets": "73-76",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfSouthernPole",
                        "octets": "77-80",
                        "type": "unsigned"
                    },
                    {
                        "name": "angleOfRotation",
                        "octets": "81-84",
                        "type": "real"
                    },
                    {
                        "name": "pl",
                        "octets": "85-nn",
                        "type": "unsigned"
                    }
                ]
            },
            {
                "section": "3",
                "template": "0",
                "fields": [
                    {
                        "name": "shapeOfTheEarth",
                        "octets": "15",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfRadiusOfSphericalEarth",
                        "octets": "16",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfRadiusOfSphericalEarth",
                        "octets": "17-20",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfEarthMajorAxis",
                        "octets": "21",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfEarthMajorAxis",
                        "octets": "22-25",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfEarthMinorAxis",
                        "octets": "26",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfEarthMinorAxis",
                        "octets": "27-30",
                        "type": "unsigned"
                    },
                    {
                        "name": "Ni",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "Nj",
                        "octets": "35-38",
                        "type": "unsigned"
                    },
                    {
                        "name": "basicAngleOfTheInitialProductionDomain",
                        "octets": "39-42",
                        "type": "unsigned"
                    },
                    {
                        "name": "subdivisionsOfBasicAngle",
                        "octets": "43-46",
                        "type": "unsigned"
                    },
                    {
                        "name": "latitudeOfFirstGridPoint",
                        "octets": "47-50",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfFirstGridPoint",
                        "octets": "51-54",
                        "type": "signed"
                    },
                    {
                        "name": "resolutionAndComponentFlags",
                        "octets": "55",
                        "type": "codeflag"
                    },
                    {
                        "name": "latitudeOfLastGridPoint",
                        "octets": "56-59",
                        "type": "signed"
                    },
                    {
                        "name": "longitudeOfLastGridPoint",
                        "octets": "60-63",
                        "type": "signed"
                    },
                    {
                        "name": "iDirectionIncrement",
                        "octets": "64-67",
                        "type": "unsigned"
                    },
                    {
                        "name": "jDirectionIncrement",
                        "octets": "68-71",
                        "type": "unsigned"
                    },
                    {
                        "name": "scanningMode",
                        "octets": "72",
                        "type": "codeflag"
                    },
                    {
                        "name": "pl",
                        "octets": "73-nn",
                        "type": "unsigned"
                    }
                ]
            }
        ]
    },
    {
        "section": "4",
        "name": "PRODUCT_DEFINITION_SECTION",
        "fields": [
            {
                "name": "section4Length",
                "octets": "1-4",
                "type": "unsigned"
            },
            {
                "name": "numberOfSection",
                "octets": "5",
                "type": "unsigned"
            },
            {
                "name": "NV",
                "octets": "6-7",
                "type": "unsigned"
            },
            {
                "name": "productDefinitionTemplateNumber",
                "octets": "8-9",
                "type": "codetable"
            },
            {
                "name": "productDefinitionTemplateNumber",
                "octets": "10-xx",
                "type": "template"
            },
            {
                "name": "pv",
                "octets": "[xx+1]-nn",
                "type": "ieeefloat"
            }
        ],
        "templates": [
            {
                "section": "4",
                "template": "11",
                "fields": [
                    {
                        "name": "parameterCategory",
                        "octets": "10",
                        "type": "codetable"
                    },
                    {
                        "name": "parameterNumber",
                        "octets": "11",
                        "type": "codetable"
                    },
                    {
                        "name": "typeOfGeneratingProcess",
                        "octets": "12",
                        "type": "codetable"
                    },
                    {
                        "name": "backgroundProcess",
                        "octets": "13",
                        "type": "unsigned"
                    },
                    {
                        "name": "generatingProcessIdentifier",
                        "octets": "14",
                        "type": "unsigned"
                    },
                    {
                        "name": "hoursAfterDataCutoff",
                        "octets": "15-16",
                        "type": "unsigned"
                    },
                    {
                        "name": "minutesAfterDataCutoff",
                        "octets": "17",
                        "type": "unsigned"
                    },
                    {
                        "name": "indicatorOfUnitOfTimeRange",
                        "octets": "18",
                        "type": "codetable"
                    },
                    {
                        "name": "forecastTime",
                        "octets": "19-22",
                        "type": "signed"
                    },
                    {
                        "name": "typeOfFirstFixedSurface",
                        "octets": "23",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfFirstFixedSurface",
                        "octets": "24",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfFirstFixedSurface",
                        "octets": "25-28",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfSecondFixedSurface",
                        "octets": "29",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfSecondFixedSurface",
                        "octets": "30",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfSecondFixedSurface",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfEnsembleForecast",
                        "octets": "35",
                        "type": "codetable"
                    },
                    {
                        "name": "perturbationNumber",
                        "octets": "36",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfForecastsInEnsemble",
                        "octets": "37",
                        "type": "unsigned"
                    },
                    {
                        "name": "yearOfEndOfOverallTimeInterval",
                        "octets": "38-39",
                        "type": "unsigned"
                    },
                    {
                        "name": "monthOfEndOfOverallTimeInterval",
                        "octets": "40",
                        "type": "unsigned"
                    },
                    {
                        "name": "dayOfEndOfOverallTimeInterval",
                        "octets": "41",
                        "type": "unsigned"
                    },
                    {
                        "name": "hourOfEndOfOverallTimeInterval",
                        "octets": "42",
                        "type": "unsigned"
                    },
                    {
                        "name": "minuteOfEndOfOverallTimeInterval",
                        "octets": "43",
                        "type": "unsigned"
                    },
                    {
                        "name": "secondOfEndOfOverallTimeInterval",
                        "octets": "44",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfTimeRange",
                        "octets": "45",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfMissingInStatisticalProcess",
                        "octets": "46-49",
                        "type": "unsigned"
                    },
                    {
                        "name": "field1",
                        "octets": "50-61",
                        "type": "nyi"
                    },
                    {
                        "name": "typeOfStatisticalProcessing",
                        "octets": "50",
                        "type": "codetable"
                    },
                    {
                        "name": "typeOfTimeIncrement",
                        "octets": "51",
                        "type": "codetable"
                    },
                    {
                        "name": "indicatorOfUnitForTimeRange",
                        "octets": "52",
                        "type": "codetable"
                    },
                    {
                        "name": "lengthOfTimeRange",
                        "octets": "53-56",
                        "type": "unsigned"
                    },
                    {
                        "name": "indicatorOfUnitForTimeIncrement",
                        "octets": "57",
                        "type": "codetable"
                    },
                    {
                        "name": "timeIncrement",
                        "octets": "58-61",
                        "type": "unsigned"
                    },
                    {
                        "name": "field2",
                        "octets": "62-nn",
                        "type": "nyi"
                    },
                    {
                        "name": "field3",
                        "octets": "62-73",
                        "type": "nyi"
                    },
                    {
                        "name": "field4",
                        "octets": "74-nn",
                        "type": "nyi"
                    }
                ]
            },
            {
                "section": "4",
                "template": "8",
                "fields": [
                    {
                        "name": "parameterCategory",
                        "octets": "10",
                        "type": "codetable"
                    },
                    {
                        "name": "parameterNumber",
                        "octets": "11",
                        "type": "codetable"
                    },
                    {
                        "name": "typeOfGeneratingProcess",
                        "octets": "12",
                        "type": "codetable"
                    },
                    {
                        "name": "backgroundProcess",
                        "octets": "13",
                        "type": "unsigned"
                    },
                    {
                        "name": "generatingProcessIdentifier",
                        "octets": "14",
                        "type": "unsigned"
                    },
                    {
                        "name": "hoursAfterDataCutoff",
                        "octets": "15-16",
                        "type": "unsigned"
                    },
                    {
                        "name": "minutesAfterDataCutoff",
                        "octets": "17",
                        "type": "unsigned"
                    },
                    {
                        "name": "indicatorOfUnitOfTimeRange",
                        "octets": "18",
                        "type": "codetable"
                    },
                    {
                        "name": "forecastTime",
                        "octets": "19-22",
                        "type": "signed"
                    },
                    {
                        "name": "typeOfFirstFixedSurface",
                        "octets": "23",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfFirstFixedSurface",
                        "octets": "24",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfFirstFixedSurface",
                        "octets": "25-28",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfSecondFixedSurface",
                        "octets": "29",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfSecondFixedSurface",
                        "octets": "30",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfSecondFixedSurface",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "yearOfEndOfOverallTimeInterval",
                        "octets": "35-36",
                        "type": "unsigned"
                    },
                    {
                        "name": "monthOfEndOfOverallTimeInterval",
                        "octets": "37",
                        "type": "unsigned"
                    },
                    {
                        "name": "dayOfEndOfOverallTimeInterval",
                        "octets": "38",
                        "type": "unsigned"
                    },
                    {
                        "name": "hourOfEndOfOverallTimeInterval",
                        "octets": "39",
                        "type": "unsigned"
                    },
                    {
                        "name": "minuteOfEndOfOverallTimeInterval",
                        "octets": "40",
                        "type": "unsigned"
                    },
                    {
                        "name": "secondOfEndOfOverallTimeInterval",
                        "octets": "41",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfTimeRange",
                        "octets": "42",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfMissingInStatisticalProcess",
                        "octets": "43-46",
                        "type": "unsigned"
                    },
                    {
                        "name": "field1",
                        "octets": "47-58",
                        "type": "nyi"
                    },
                    {
                        "name": "typeOfStatisticalProcessing",
                        "octets": "47",
                        "type": "codetable"
                    },
                    {
                        "name": "typeOfTimeIncrement",
                        "octets": "48",
                        "type": "codetable"
                    },
                    {
                        "name": "indicatorOfUnitForTimeRange",
                        "octets": "49",
                        "type": "codetable"
                    },
                    {
                        "name": "lengthOfTimeRange",
                        "octets": "50-53",
                        "type": "unsigned"
                    },
                    {
                        "name": "indicatorOfUnitForTimeIncrement",
                        "octets": "54",
                        "type": "codetable"
                    },
                    {
                        "name": "timeIncrement",
                        "octets": "55-58",
                        "type": "unsigned"
                    },
                    {
                        "name": "field2",
                        "octets": "59-nn",
                        "type": "nyi"
                    },
                    {
                        "name": "field3",
                        "octets": "59-70",
                        "type": "nyi"
                    },
                    {
                        "name": "field4",
                        "octets": "71-nn",
                        "type": "nyi"
                    }
                ]
            },
            {
                "section": "4",
                "template": "3",
                "fields": [
                    {
                        "name": "parameterCategory",
                        "octets": "10",
                        "type": "codetable"
                    },
                    {
                        "name": "parameterNumber",
                        "octets": "11",
                        "type": "codetable"
                    },
                    {
                        "name": "typeOfGeneratingProcess",
                        "octets": "12",
                        "type": "codetable"
                    },
                    {
                        "name": "backgroundProcess",
                        "octets": "13",
                        "type": "unsigned"
                    },
                    {
                        "name": "generatingProcessIdentifier",
                        "octets": "14",
                        "type": "unsigned"
                    },
                    {
                        "name": "hoursAfterDataCutoff",
                        "octets": "15-16",
                        "type": "unsigned"
                    },
                    {
                        "name": "minutesAfterDataCutoff",
                        "octets": "17",
                        "type": "unsigned"
                    },
                    {
                        "name": "indicatorOfUnitOfTimeRange",
                        "octets": "18",
                        "type": "codetable"
                    },
                    {
                        "name": "forecastTime",
                        "octets": "19-22",
                        "type": "signed"
                    },
                    {
                        "name": "typeOfFirstFixedSurface",
                        "octets": "23",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfFirstFixedSurface",
                        "octets": "24",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfFirstFixedSurface",
                        "octets": "25-28",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfSecondFixedSurface",
                        "octets": "29",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfSecondFixedSurface",
                        "octets": "30",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfSecondFixedSurface",
                        "octets": "31-34",
                        "type": "unsigned"
                    },
                    {
                        "name": "derivedForecast",
                        "octets": "35",
                        "type": "codetable"
                    },
                    {
                        "name": "numberOfForecastsInEnsemble",
                        "octets": "36",
                        "type": "unsigned"
                    },
                    {
                        "name": "clusterIdentifier",
                        "octets": "37",
                        "type": "unsigned"
                    },
                    {
                        "name": "NH",
                        "octets": "38",
                        "type": "unsigned"
                    },
                    {
                        "name": "NL",
                        "octets": "39",
                        "type": "unsigned"
                    },
                    {
                        "name": "totalNumberOfClusters",
                        "octets": "40",
                        "type": "unsigned"
                    },
                    {
                        "name": "clusteringMethod",
                        "octets": "41",
                        "type": "codetable"
                    },
                    {
                        "name": "northernLatitudeOfClusterDomain",
                        "octets": "42-45",
                        "type": "unsigned"
                    },
                    {
                        "name": "southernLatitudeOfClusterDomain",
                        "octets": "46-49",
                        "type": "unsigned"
                    },
                    {
                        "name": "easternLongitudeOfClusterDomain",
                        "octets": "50-53",
                        "type": "unsigned"
                    },
                    {
                        "name": "westernLongitudeOfClusterDomain",
                        "octets": "54-57",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfForecastsInTheCluster",
                        "octets": "58",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfStandardDeviation",
                        "octets": "59",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfStandardDeviation",
                        "octets": "60-63",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaleFactorOfDistanceFromEnsembleMean",
                        "octets": "64",
                        "type": "unsigned"
                    },
                    {
                        "name": "scaledValueOfDistanceFromEnsembleMean",
                        "octets": "65-68",
                        "type": "unsigned"
                    },
                    {
                        "name": "List",
                        "octets": "69-(68+NC)",
                        "type": "of"
                    }
                ]
            },
            {
                "section": "4",
                "template": "0",
                "fields": [
                    {
                        "name": "parameterCategory",
                        "octets": "10",
                        "type": "codetable"
                    },
                    {
                        "name": "parameterNumber",
                        "octets": "11",
                        "type": "codetable"
                    },
                    {
                        "name": "typeOfGeneratingProcess",
                        "octets": "12",
                        "type": "codetable"
                    },
                    {
                        "name": "backgroundProcess",
                        "octets": "13",
                        "type": "unsigned"
                    },
                    {
                        "name": "generatingProcessIdentifier",
                        "octets": "14",
                        "type": "unsigned"
                    },
                    {
                        "name": "hoursAfterDataCutoff",
                        "octets": "15-16",
                        "type": "unsigned"
                    },
                    {
                        "name": "minutesAfterDataCutoff",
                        "octets": "17",
                        "type": "unsigned"
                    },
                    {
                        "name": "indicatorOfUnitOfTimeRange",
                        "octets": "18",
                        "type": "codetable"
                    },
                    {
                        "name": "forecastTime",
                        "octets": "19-22",
                        "type": "signed"
                    },
                    {
                        "name": "typeOfFirstFixedSurface",
                        "octets": "23",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfFirstFixedSurface",
                        "octets": "24",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfFirstFixedSurface",
                        "octets": "25-28",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfSecondFixedSurface",
                        "octets": "29",
                        "type": "codetable"
                    },
                    {
                        "name": "scaleFactorOfSecondFixedSurface",
                        "octets": "30",
                        "type": "signed"
                    },
                    {
                        "name": "scaledValueOfSecondFixedSurface",
                        "octets": "31-34",
                        "type": "unsigned"
                    }
                ]
            }
        ]
    },
    {
        "section": "5",
        "name": "DATA_REPRESENTATION_SECTION",
        "fields": [
            {
                "name": "section5Length",
                "octets": "1-4",
                "type": "unsigned"
            },
            {
                "name": "numberOfSection",
                "octets": "5",
                "type": "unsigned"
            },
            {
                "name": "numberOfValues",
                "octets": "6-9",
                "type": "unsigned"
            },
            {
                "name": "dataRepresentationTemplateNumber",
                "octets": "10-11",
                "type": "codetable"
            },
            {
                "name": "dataRepresentationTemplateNumber",
                "octets": "12-nn",
                "type": "template"
            }
        ],
        "templates": [
            {
                "section": "5",
                "template": "42",
                "fields": [
                    {
                        "name": "referenceValue",
                        "octets": "12-15",
                        "type": "ieeefloat"
                    },
                    {
                        "name": "binaryScaleFactor",
                        "octets": "16-17",
                        "type": "signed"
                    },
                    {
                        "name": "decimalScaleFactor",
                        "octets": "18-19",
                        "type": "signed"
                    },
                    {
                        "name": "bitsPerValue",
                        "octets": "20",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfOriginalFieldValues",
                        "octets": "21",
                        "type": "codetable"
                    },
                    {
                        "name": "compressionOptions",
                        "octets": "22",
                        "type": "unsigned"
                    },
                    {
                        "name": "blockSize",
                        "octets": "23",
                        "type": "unsigned"
                    },
                    {
                        "name": "sampleInterval",
                        "octets": "24-25",
                        "type": "unsigned"
                    }
                ]
            },
            {
                "section": "5",
                "template": "41",
                "fields": [
                    {
                        "name": "referenceValue",
                        "octets": "12-15",
                        "type": "ieeefloat"
                    },
                    {
                        "name": "binaryScaleFactor",
                        "octets": "16-17",
                        "type": "signed"
                    },
                    {
                        "name": "decimalScaleFactor",
                        "octets": "18-19",
                        "type": "signed"
                    },
                    {
                        "name": "bitsPerValue",
                        "octets": "20",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfOriginalFieldValues",
                        "octets": "21",
                        "type": "codetable"
                    }
                ]
            },
            {
                "section": "5",
                "template": "40",
                "fields": [
                    {
                        "name": "referenceValue",
                        "octets": "12-15",
                        "type": "ieeefloat"
                    },
                    {
                        "name": "binaryScaleFactor",
                        "octets": "16-17",
                        "type": "signed"
                    },
                    {
                        "name": "decimalScaleFactor",
                        "octets": "18-19",
                        "type": "signed"
                    },
                    {
                        "name": "bitsPerValue",
                        "octets": "20",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfOriginalFieldValues",
                        "octets": "21",
                        "type": "codetable"
                    },
                    {
                        "name": "typeOfCompressionUsed",
                        "octets": "22",
                        "type": "typeOfCompressionUsed"
                    },
                    {
                        "name": "targetCompressionRatio",
                        "octets": "23",
                        "type": "targetCompressionRatio"
                    }
                ]
            },
            {
                "section": "5",
                "template": "4",
                "fields": [
                    {
                        "name": "precision",
                        "octets": "12",
                        "type": "codetable"
                    }
                ]
            },
            {
                "section": "5",
                "template": "3",
                "fields": [
                    {
                        "name": "referenceValue",
                        "octets": "12-15",
                        "type": "real"
                    },
                    {
                        "name": "binaryScaleFactor",
                        "octets": "16-17",
                        "type": "signed"
                    },
                    {
                        "name": "decimalScaleFactor",
                        "octets": "18-19",
                        "type": "signed"
                    },
                    {
                        "name": "bitsPerValue",
                        "octets": "20",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfOriginalFieldValues",
                        "octets": "21",
                        "type": "codetable"
                    },
                    {
                        "name": "groupSplittingMethodUsed",
                        "octets": "22",
                        "type": "codetable"
                    },
                    {
                        "name": "missingValueManagementUsed",
                        "octets": "23",
                        "type": "codetable"
                    },
                    {
                        "name": "primaryMissingValueSubstitute",
                        "octets": "24-27",
                        "type": "unsigned"
                    },
                    {
                        "name": "secondaryMissingValueSubstitute",
                        "octets": "28-31",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfGroupsOfDataValues",
                        "octets": "32-35",
                        "type": "unsigned"
                    },
                    {
                        "name": "referenceForGroupWidths",
                        "octets": "36",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfBitsUsedForTheGroupWidths",
                        "octets": "37",
                        "type": "unsigned"
                    },
                    {
                        "name": "referenceForGroupLengths",
                        "octets": "38-41",
                        "type": "unsigned"
                    },
                    {
                        "name": "lengthIncrementForTheGroupLengths",
                        "octets": "42",
                        "type": "unsigned"
                    },
                    {
                        "name": "trueLengthOfLastGroup",
                        "octets": "43-46",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfBitsForScaledGroupLengths",
                        "octets": "47",
                        "type": "unsigned"
                    },
                    {
                        "name": "orderOfSpatialDifferencing",
                        "octets": "48",
                        "type": "codetable"
                    },
                    {
                        "name": "numberOfOctetsExtraDescriptors",
                        "octets": "49",
                        "type": "unsigned"
                    }
                ]
            },
            {
                "section": "5",
                "template": "2",
                "fields": [
                    {
                        "name": "referenceValue",
                        "octets": "12-15",
                        "type": "real"
                    },
                    {
                        "name": "binaryScaleFactor",
                        "octets": "16-17",
                        "type": "signed"
                    },
                    {
                        "name": "decimalScaleFactor",
                        "octets": "18-19",
                        "type": "signed"
                    },
                    {
                        "name": "bitsPerValue",
                        "octets": "20",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfOriginalFieldValues",
                        "octets": "21",
                        "type": "codetable"
                    },
                    {
                        "name": "groupSplittingMethodUsed",
                        "octets": "22",
                        "type": "codetable"
                    },
                    {
                        "name": "missingValueManagementUsed",
                        "octets": "23",
                        "type": "codetable"
                    },
                    {
                        "name": "primaryMissingValueSubstitute",
                        "octets": "24-27",
                        "type": "unsigned"
                    },
                    {
                        "name": "secondaryMissingValueSubstitute",
                        "octets": "28-31",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfGroupsOfDataValues",
                        "octets": "32-35",
                        "type": "unsigned"
                    },
                    {
                        "name": "referenceForGroupWidths",
                        "octets": "36",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfBitsUsedForTheGroupWidths",
                        "octets": "37",
                        "type": "unsigned"
                    },
                    {
                        "name": "referenceForGroupLengths",
                        "octets": "38-41",
                        "type": "unsigned"
                    },
                    {
                        "name": "lengthIncrementForTheGroupLengths",
                        "octets": "42",
                        "type": "unsigned"
                    },
                    {
                        "name": "trueLengthOfLastGroup",
                        "octets": "43-46",
                        "type": "unsigned"
                    },
                    {
                        "name": "numberOfBitsForScaledGroupLengths",
                        "octets": "47",
                        "type": "unsigned"
                    }
                ]
            },
            {
                "section": "5",
                "template": "0",
                "fields": [
                    {
                        "name": "referenceValue",
                        "octets": "12-15",
                        "type": "real"
                    },
                    {
                        "name": "binaryScaleFactor",
                        "octets": "16-17",
                        "type": "signed"
                    },
                    {
                        "name": "decimalScaleFactor",
                        "octets": "18-19",
                        "type": "signed"
                    },
                    {
                        "name": "bitsPerValue",
                        "octets": "20",
                        "type": "unsigned"
                    },
                    {
                        "name": "typeOfOriginalFieldValues",
                        "octets": "21",
                        "type": "codetable"
                    }
                ]
            }
        ]
    },
    {
        "section": "6",
        "name": "BIT-MAP_SECTION",
        "fields": [
            {
                "name": "section6Length",
                "octets": "1-4",
                "type": "unsigned"
            },
            {
                "name": "numberOfSection",
                "octets": "5",
                "type": "unsigned"
            },
            {
                "name": "bitMapIndicator",
                "octets": "6",
                "type": "codetable"
            },
            {
                "name": "bitmap",
                "octets": "7-nn",
                "type": "bitmap"
            }
        ],
        "templates": false
    },
    {
        "section": "7",
        "name": "DATA_SECTION",
        "fields": [
            {
                "name": "section7Length",
                "octets": "1-4",
                "type": "unsigned"
            },
            {
                "name": "numberOfSection",
                "octets": "5",
                "type": "unsigned"
            },
            {
                "name": "data",
                "octets": "6-nn",
                "type": "unsigned"
            }
        ],
        "templates": [
            {
                "section": "7",
                "template": "51",
                "fields": [
                    {
                        "name": "Data_values",
                        "octets": "6-(5+I*TS)",
                        "type": "nyi"
                    },
                    {
                        "name": "Binary_values",
                        "octets": "(6+I*TS)-nn",
                        "type": "nyi"
                    }
                ]
            },
            {
                "section": "7",
                "template": "50",
                "fields": [
                    {
                        "name": "Key",
                        "octets": "Octets",
                        "type": "Type"
                    },
                    {
                        "name": "data",
                        "octets": "6-nn",
                        "type": "implementation"
                    }
                ]
            },
            {
                "section": "7",
                "template": "41",
                "fields": [
                    {
                        "name": "data",
                        "octets": "6-nn",
                        "type": "implementation"
                    }
                ]
            },
            {
                "section": "7",
                "template": "40",
                "fields": [
                    {
                        "name": "data",
                        "octets": "6-nn",
                        "type": "implementation"
                    }
                ]
            },
            {
                "section": "7",
                "template": "4",
                "fields": [
                    {
                        "name": "data",
                        "octets": "6-nn",
                        "type": "implementation"
                    }
                ]
            },
            {
                "section": "7",
                "template": "3",
                "fields": [
                    {
                        "name": "values",
                        "octets": "6-ww",
                        "type": "nyi"
                    },
                    {
                        "name": "NG_group_reference_values",
                        "octets": "[ww+1]-xx",
                        "type": "nyi"
                    },
                    {
                        "name": "Packed_values",
                        "octets": "[xx+1]-nn",
                        "type": "nyi"
                    }
                ]
            },
            {
                "section": "7",
                "template": "2",
                "fields": [
                    {
                        "name": "NG_group_reference_values",
                        "octets": "6-xx",
                        "type": "nyi"
                    },
                    {
                        "name": "NG_group_widths",
                        "octets": "[xx+1]-yy",
                        "type": "nyi"
                    },
                    {
                        "name": "NG_scaled_group_lengths",
                        "octets": "[yy+1]-zz",
                        "type": "nyi"
                    },
                    {
                        "name": "Packed_values",
                        "octets": "[zz+1]-nn",
                        "type": "nyi"
                    }
                ]
            },
            {
                "section": "7",
                "template": "1",
                "fields": [
                    {
                        "name": "data",
                        "octets": "6-nn",
                        "type": "implementation"
                    }
                ]
            },
            {
                "section": "7",
                "template": "0",
                "fields": [
                    {
                        "name": "data",
                        "octets": "6-nn",
                        "type": "implementation"
                    }
                ]
            }
        ]
    },
    {
        "section": "8",
        "name": "END_SECTION",
        "fields": [
            {
                "name": "endMarker",
                "octets": "1-4",
                "type": "ascii"
            }
        ],
        "templates": false
    }
]

export {
    GRIB2_SECTIONS
}
