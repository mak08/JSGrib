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
const GRIB2_CODETABLES = [
{
"discipline": "0",
"category": "0",
"entries": [
{
"code": "0",
"description": "Temperature",
"unit": "K",
"shortname": "TMP"
},
{
"code": "1",
"description": "Virtual Temperature",
"unit": "K",
"shortname": "VTMP"
},
{
"code": "2",
"description": "Potential Temperature",
"unit": "K",
"shortname": "POT"
},
{
"code": "3",
"description": " Pseudo-Adiabatic Potential Temperature (or Equivalent Potential Temperature) ",
"unit": "K",
"shortname": "EPOT"
},
{
"code": "4",
"description": "Maximum Temperature (see Note 1)",
"unit": "K",
"shortname": "TMAX"
},
{
"code": "5",
"description": "Minimum Temperature (see Note 1)",
"unit": "K",
"shortname": "TMIN"
},
{
"code": "6",
"description": "Dew Point Temperature",
"unit": "K",
"shortname": "DPT"
},
{
"code": "7",
"description": "Dew Point Depression (or Deficit)",
"unit": "K",
"shortname": "DEPR"
},
{
"code": "8",
"description": "Lapse Rate",
"unit": "K m-1",
"shortname": "LAPR"
},
{
"code": "9",
"description": "Temperature Anomaly",
"unit": "K",
"shortname": "TMPA"
},
{
"code": "10",
"description": "Latent Heat Net Flux",
"unit": "W m-2",
"shortname": "LHTFL"
},
{
"code": "11",
"description": "Sensible Heat Net Flux",
"unit": "W m-2",
"shortname": "SHTFL"
},
{
"code": "12",
"description": "Heat Index",
"unit": "K",
"shortname": "HEATX"
},
{
"code": "13",
"description": "Wind Chill Factor",
"unit": "K",
"shortname": "WCF"
},
{
"code": "14",
"description": "Minimum Dew Point Depression (see Note 1)",
"unit": "K",
"shortname": "MINDPD"
},
{
"code": "15",
"description": "Virtual Potential Temperature",
"unit": "K",
"shortname": "VPTMP"
},
{
"code": "16",
"description": "Snow Phase Change Heat Flux",
"unit": "W m-2",
"shortname": "SNOHF"
},
{
"code": "17",
"description": "Skin Temperature",
"unit": "K",
"shortname": "SKINT"
},
{
"code": "18",
"description": "Snow Temperature (top of snow)",
"unit": "K",
"shortname": "SNOT"
},
{
"code": "19",
"description": "Turbulent Transfer Coefficient for Heat",
"unit": "Numeric",
"shortname": "TTCHT"
},
{
"code": "20",
"description": "Turbulent Diffusion Coefficient for Heat",
"unit": "m2s-1",
"shortname": "TDCHT"
},
{
"code": "21",
"description": "Apparent Temperature (see Note 2)",
"unit": "K",
"shortname": "APTMP"
},
{
"code": "22",
"description": "Temperature Tendency due to Short-Wave Radiation",
"unit": "K s-1",
"shortname": "TTSWR"
},
{
"code": "23",
"description": "Temperature Tendency due to Long-Wave Radiation",
"unit": "K s-1",
"shortname": "TTLWR"
},
{
"code": "24",
"description": "Temperature Tendency due to Short-Wave Radiation, Clear Sky",
"unit": "K s-1",
"shortname": "TTSWRCS"
},
{
"code": "25",
"description": "Temperature Tendency due to Long-Wave Radiation, Clear Sky",
"unit": "K s-1",
"shortname": "TTLWRCS"
},
{
"code": "26",
"description": "Temperature Tendency due to parameterizations",
"unit": "K s-1",
"shortname": "TTPARM"
},
{
"code": "27",
"description": "Wet Bulb Temperature",
"unit": "K",
"shortname": "WETBT"
},
{
"code": "28",
"description": "Unbalanced Component of Temperature",
"unit": "K",
"shortname": "UCTMP"
},
{
"code": "29",
"description": "Temperature Advection",
"unit": "K s-1",
"shortname": "TMPADV"
},
{
"code": "30",
"description": "Latent Heat Net Flux Due to Evaporation",
"unit": "W m-2",
"shortname": "LHFLXE"
},
{
"code": "31",
"description": "Latent Heat Net Flux Due to Sublimation",
"unit": "W m-2",
"shortname": "LHFLXS"
},
{
"code": "32",
"description": "Wet-Bulb Potential Temperature",
"unit": "K",
"shortname": "WETBPT"
},
{
"code": "33-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "192",
"description": "Snow Phase Change Heat Flux",
"unit": "W m-2",
"shortname": "SNOHF"
},
{
"code": "193",
"description": "Temperature Tendency by All Radiation",
"unit": "K s-1",
"shortname": "TTRAD"
},
{
"code": "194",
"description": "Relative Error Variance",
"unit": "",
"shortname": "REV"
},
{
"code": "195",
"description": "Large Scale Condensate Heating Rate",
"unit": "K s-1",
"shortname": "LRGHR"
},
{
"code": "196",
"description": "Deep Convective Heating Rate",
"unit": "K s-1",
"shortname": "CNVHR"
},
{
"code": "197",
"description": "Total Downward Heat Flux at Surface",
"unit": "W m-2",
"shortname": "THFLX"
},
{
"code": "198",
"description": "Temperature Tendency by All Physics",
"unit": "K s-1",
"shortname": "TTDIA"
},
{
"code": "199",
"description": "Temperature Tendency by Non-radiation Physics",
"unit": "K s-1",
"shortname": "TTPHY"
},
{
"code": "200",
"description": "Standard Dev. of IR Temp. over 1x1 deg. area",
"unit": "K",
"shortname": "TSD1D"
},
{
"code": "201",
"description": "Shallow Convective Heating Rate",
"unit": "K s-1",
"shortname": "SHAHR"
},
{
"code": "202",
"description": "Vertical Diffusion Heating rate",
"unit": "K s-1",
"shortname": "VDFHR"
},
{
"code": "203",
"description": "Potential Temperature at Top of Viscous Sublayer",
"unit": "K",
"shortname": "THZ0"
},
{
"code": "204",
"description": "Tropical Cyclone Heat Potential",
"unit": "J m-2 K",
"shortname": "TCHP"
},
{
"code": "205",
"description": "Effective Layer (EL) Temperature",
"unit": "C",
"shortname": "ELMELT"
},
{
"code": "206",
"description": "Wet Bulb Globe Temperature",
"unit": "K",
"shortname": "WETGLBT"
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
},
{
"discipline": "0",
"category": "1",
"entries": [
{
"code": "0",
"description": "Specific Humidity",
"unit": "kg kg-1",
"shortname": "SPFH"
},
{
"code": "1",
"description": "Relative Humidity",
"unit": "%",
"shortname": "RH"
},
{
"code": "2",
"description": "Humidity Mixing Ratio",
"unit": "kg kg-1",
"shortname": "MIXR"
},
{
"code": "3",
"description": "Precipitable Water",
"unit": "kg m-2",
"shortname": "PWAT"
},
{
"code": "4",
"description": "Vapour Pressure",
"unit": "Pa",
"shortname": "VAPP"
},
{
"code": "5",
"description": "Saturation Deficit",
"unit": "Pa",
"shortname": "SATD"
},
{
"code": "6",
"description": "Evaporation",
"unit": "kg m-2",
"shortname": "EVP"
},
{
"code": "7",
"description": "Precipitation Rate (see Note 1)",
"unit": "kg m-2 s-1",
"shortname": "PRATE"
},
{
"code": "8",
"description": "Total Precipitation (see Note 3)",
"unit": "kg m-2",
"shortname": "APCP"
},
{
"code": "9",
"description": "Large-Scale Precipitation (non-convective) (see Note 3)",
"unit": "kg m-2",
"shortname": "NCPCP"
},
{
"code": "10",
"description": "Convective Precipitation (see Note 3)",
"unit": "kg m-2",
"shortname": "ACPCP"
},
{
"code": "11",
"description": "Snow Depth",
"unit": "m",
"shortname": "SNOD"
},
{
"code": "12",
"description": "Snowfall Rate Water Equivalent (see Note 1)",
"unit": "kg m-2 s-1",
"shortname": "SRWEQ"
},
{
"code": "13",
"description": "Water Equivalent of Accumulated Snow Depth (see Note 3)",
"unit": "kg m-2",
"shortname": "WEASD"
},
{
"code": "14",
"description": "Convective Snow (see Note 3)",
"unit": "kg m-2",
"shortname": "SNOC"
},
{
"code": "15",
"description": "Large-Scale Snow (see Note 3)",
"unit": "kg m-2",
"shortname": "SNOL"
},
{
"code": "16",
"description": "Snow Melt (see Note 7)",
"unit": "kg m-2",
"shortname": "SNOM"
},
{
"code": "17",
"description": "Snow Age",
"unit": "day",
"shortname": "SNOAG"
},
{
"code": "18",
"description": "Absolute Humidity",
"unit": "kg m-3",
"shortname": "ABSH"
},
{
"code": "19",
"description": "Precipitation Type",
"unit": "See Table 4.201",
"shortname": "PTYPE"
},
{
"code": "20",
"description": "Integrated Liquid Water",
"unit": "kg m-2",
"shortname": "ILIQW"
},
{
"code": "21",
"description": "Condensate",
"unit": "kg kg-1",
"shortname": "TCOND"
},
{
"code": "22",
"description": "Cloud Mixing Ratio",
"unit": "kg kg-1",
"shortname": "CLMR"
},
{
"code": "23",
"description": "Ice Water Mixing Ratio",
"unit": "kg kg-1",
"shortname": "ICMR"
},
{
"code": "24",
"description": "Rain Mixing Ratio",
"unit": "kg kg-1",
"shortname": "RWMR"
},
{
"code": "25",
"description": "Snow Mixing Ratio",
"unit": "kg kg-1",
"shortname": "SNMR"
},
{
"code": "26",
"description": "Horizontal Moisture Convergence",
"unit": "kg kg-1 s-1",
"shortname": "MCONV"
},
{
"code": "27",
"description": "Maximum Relative Humidity (see Note 1)",
"unit": "%",
"shortname": "MAXRH"
},
{
"code": "28",
"description": "Maximum Absolute Humidity (see Note 1)",
"unit": "kg m-3",
"shortname": "MAXAH"
},
{
"code": "29",
"description": "Total Snowfall (see Note 3)",
"unit": "m",
"shortname": "ASNOW"
},
{
"code": "30",
"description": "Precipitable Water Category",
"unit": "See Table 4.202",
"shortname": "PWCAT"
},
{
"code": "31",
"description": "Hail",
"unit": "m",
"shortname": "HAIL"
},
{
"code": "32",
"description": "Graupel",
"unit": "kg kg-1",
"shortname": "GRLE"
},
{
"code": "33",
"description": "Categorical Rain",
"unit": "Code table 4.222",
"shortname": "CRAIN"
},
{
"code": "34",
"description": "Categorical Freezing Rain",
"unit": "Code table 4.222",
"shortname": "CFRZR"
},
{
"code": "35",
"description": "Categorical Ice Pellets",
"unit": "Code table 4.222",
"shortname": "CICEP"
},
{
"code": "36",
"description": "Categorical Snow",
"unit": "Code table 4.222",
"shortname": "CSNOW"
},
{
"code": "37",
"description": "Convective Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "CPRAT"
},
{
"code": "38",
"description": "Horizontal Moisture Divergence",
"unit": "kg kg-1 s-1",
"shortname": "MDIVER"
},
{
"code": "39",
"description": "Percent frozen precipitation",
"unit": "%",
"shortname": "CPOFP"
},
{
"code": "40",
"description": "Potential Evaporation",
"unit": "kg m-2",
"shortname": "PEVAP"
},
{
"code": "41",
"description": "Potential Evaporation Rate (see Note 4)",
"unit": "W m-2",
"shortname": "PEVPR"
},
{
"code": "42",
"description": "Snow Cover",
"unit": "%",
"shortname": "SNOWC"
},
{
"code": "43",
"description": "Rain Fraction of Total Cloud Water",
"unit": "Proportion",
"shortname": "FRAIN"
},
{
"code": "44",
"description": "Rime Factor",
"unit": "Numeric",
"shortname": "RIME"
},
{
"code": "45",
"description": "Total Column Integrated Rain",
"unit": "kg m-2",
"shortname": "TCOLR"
},
{
"code": "46",
"description": "Total Column Integrated Snow",
"unit": "kg m-2",
"shortname": "TCOLS"
},
{
"code": "47",
"description": "Large Scale Water Precipitation (Non-Convective) (see Note 3)",
"unit": "kg m-2",
"shortname": "LSWP"
},
{
"code": "48",
"description": "Convective Water Precipitation (see Note 3)",
"unit": "kg m-2",
"shortname": "CWP"
},
{
"code": "49",
"description": "Total Water Precipitation (see Note 3)",
"unit": "kg m-2",
"shortname": "TWATP"
},
{
"code": "50",
"description": "Total Snow Precipitation (see Note 3)",
"unit": "kg m-2",
"shortname": "TSNOWP"
},
{
"code": "51",
"description": " Total Column Water (Vertically integrated total water (vapour+cloud water/ice) ",
"unit": "kg m-2",
"shortname": "TCWAT"
},
{
"code": "52",
"description": "Total Precipitation Rate (see Note 2)",
"unit": "kg m-2 s-1",
"shortname": "TPRATE"
},
{
"code": "53",
"description": "Total Snowfall Rate Water Equivalent (see Note 2)",
"unit": "kg m-2 s-1",
"shortname": "TSRWE"
},
{
"code": "54",
"description": "Large Scale Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "LSPRATE"
},
{
"code": "55",
"description": "Convective Snowfall Rate Water Equivalent",
"unit": "kg m-2 s-1",
"shortname": "CSRWE"
},
{
"code": "56",
"description": "Large Scale Snowfall Rate Water Equivalent",
"unit": "kg m-2 s-1",
"shortname": "LSSRWE"
},
{
"code": "57",
"description": "Total Snowfall Rate",
"unit": "m s-1",
"shortname": "TSRATE"
},
{
"code": "58",
"description": "Convective Snowfall Rate",
"unit": "m s-1",
"shortname": "CSRATE"
},
{
"code": "59",
"description": "Large Scale Snowfall Rate",
"unit": "m s-1",
"shortname": "LSSRATE"
},
{
"code": "60",
"description": "Snow Depth Water Equivalent",
"unit": "kg m-2",
"shortname": "SDWE"
},
{
"code": "61",
"description": "Snow Density",
"unit": "kg m-3",
"shortname": "SDEN"
},
{
"code": "62",
"description": "Snow Evaporation (see Note 8)",
"unit": "kg m-2",
"shortname": "SEVAP"
},
{
"code": "63",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "64",
"description": "Total Column Integrated Water Vapour",
"unit": "kg m-2",
"shortname": "TCIWV"
},
{
"code": "65",
"description": "Rain Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "RPRATE"
},
{
"code": "66",
"description": "Snow Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "SPRATE"
},
{
"code": "67",
"description": "Freezing Rain Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "FPRATE"
},
{
"code": "68",
"description": "Ice Pellets Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "IPRATE"
},
{
"code": "69",
"description": "Total Column Integrate Cloud Water",
"unit": "kg m-2",
"shortname": "TCOLW"
},
{
"code": "70",
"description": "Total Column Integrate Cloud Ice",
"unit": "kg m-2",
"shortname": "TCOLI"
},
{
"code": "71",
"description": "Hail Mixing Ratio",
"unit": "kg kg-1",
"shortname": "HAILMXR"
},
{
"code": "72",
"description": "Total Column Integrate Hail",
"unit": "kg m-2",
"shortname": "TCOLH"
},
{
"code": "73",
"description": "Hail Prepitation Rate",
"unit": "kg m-2 s-1",
"shortname": "HAILPR"
},
{
"code": "74",
"description": "Total Column Integrate Graupel",
"unit": "kg m-2",
"shortname": "TCOLG"
},
{
"code": "75",
"description": "Graupel (Snow Pellets) Prepitation Rate",
"unit": "kg m-2 s-1",
"shortname": "GPRATE"
},
{
"code": "76",
"description": "Convective Rain Rate",
"unit": "kg m-2 s-1",
"shortname": "CRRATE"
},
{
"code": "77",
"description": "Large Scale Rain Rate",
"unit": "kg m-2 s-1",
"shortname": "LSRRATE"
},
{
"code": "78",
"description": " Total Column Integrate Water (All components including precipitation) ",
"unit": "kg m-2",
"shortname": "TCOLWA"
},
{
"code": "79",
"description": "Evaporation Rate",
"unit": "kg m-2 s-1",
"shortname": "EVARATE"
},
{
"code": "80",
"description": "Total Condensate",
"unit": "kg kg-1",
"shortname": "TOTCON"
},
{
"code": "81",
"description": "Total Column-Integrate Condensate",
"unit": "kg m-2",
"shortname": "TCICON"
},
{
"code": "82",
"description": "Cloud Ice Mixing Ratio",
"unit": "kg kg-1",
"shortname": "CIMIXR"
},
{
"code": "83",
"description": "Specific Cloud Liquid Water Content",
"unit": "kg kg-1",
"shortname": "SCLLWC"
},
{
"code": "84",
"description": "Specific Cloud Ice Water Content",
"unit": "kg kg-1",
"shortname": "SCLIWC"
},
{
"code": "85",
"description": "Specific Rain Water Content",
"unit": "kg kg-1",
"shortname": "SRAINW"
},
{
"code": "86",
"description": "Specific Snow Water Content",
"unit": "kg kg-1",
"shortname": "SSNOWW"
},
{
"code": "87",
"description": "Stratiform Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "STRPRATE"
},
{
"code": "88",
"description": "Categorical Convective Precipitation",
"unit": "Code table 4.222",
"shortname": "CATCP"
},
{
"code": "89",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "90",
"description": "Total Kinematic Moisture Flux",
"unit": "kg kg-1 m s-1",
"shortname": "TKMFLX"
},
{
"code": "91",
"description": "U-component (zonal) Kinematic Moisture Flux",
"unit": "kg kg-1 m s-1",
"shortname": "UKMFLX"
},
{
"code": "92",
"description": "V-component (meridional) Kinematic Moisture Flux",
"unit": "kg kg-1 m s-1",
"shortname": "VKMFLX"
},
{
"code": "93",
"description": "Relative Humidity With Respect to Water",
"unit": "%",
"shortname": "RHWATER"
},
{
"code": "94",
"description": "Relative Humidity With Respect to Ice",
"unit": "%",
"shortname": "RHICE"
},
{
"code": "95",
"description": "Freezing or Frozen Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "FZPRATE"
},
{
"code": "96",
"description": "Mass Density of Rain",
"unit": "kg m-3",
"shortname": "MASSDR"
},
{
"code": "97",
"description": "Mass Density of Snow",
"unit": "kg m-3",
"shortname": "MASSDS"
},
{
"code": "98",
"description": "Mass Density of Graupel",
"unit": "kg m-3",
"shortname": "MASSDG"
},
{
"code": "99",
"description": "Mass Density of Hail",
"unit": "kg m-3",
"shortname": "MASSDH"
},
{
"code": "100",
"description": "Specific Number Concentration of Rain",
"unit": "kg-1",
"shortname": "SPNCR"
},
{
"code": "101",
"description": "Specific Number Concentration of Snow",
"unit": "kg-1",
"shortname": "SPNCS"
},
{
"code": "102",
"description": "Specific Number Concentration of Graupel",
"unit": "kg-1",
"shortname": "SPNCG"
},
{
"code": "103",
"description": "Specific Number Concentration of Hail",
"unit": "kg-1",
"shortname": "SPNCH"
},
{
"code": "104",
"description": "Number Density of Rain",
"unit": "m-3",
"shortname": "NUMDR"
},
{
"code": "105",
"description": "Number Density of Snow",
"unit": "m-3",
"shortname": "NUMDS"
},
{
"code": "106",
"description": "Number Density of Graupel",
"unit": "m-3",
"shortname": "NUMDG"
},
{
"code": "107",
"description": "Number Density of Hail",
"unit": "m-3",
"shortname": "NUMDH"
},
{
"code": "108",
"description": "Specific Humidity Tendency due to Parameterizations",
"unit": "kg kg-1 s-1",
"shortname": "SHTPRM"
},
{
"code": "109",
"description": "Mass Density of Liquid Water Coating on Hail Expressed as Mass of Liquid Water per Unit Volume of Air",
"unit": "kg m-3",
"shortname": "MDLWHVA"
},
{
"code": "110",
"description": "Specific Mass of Liquid Water Coating on Hail Expressed as Mass of Liquid Water per Unit Mass of Moist Air",
"unit": "kg kg-1",
"shortname": "SMLWHMA"
},
{
"code": "111",
"description": "Mass Mixing Ratio of Liquid Water Coating on Hail Expressed as Mass of Liquid Water per Unit Mass of Dry Air",
"unit": "kg kg-1",
"shortname": "MMLWHDA"
},
{
"code": "112",
"description": "Mass Density of Liquid Water Coating on Graupel Expressed as Mass of Liquid Water per Unit Volume of Air",
"unit": "kg m-3",
"shortname": "MDLWGVA"
},
{
"code": "113",
"description": "Specific Mass of Liquid Water Coating on Graupel Expressed as Mass of Liquid Water per Unit Mass of Moist Air",
"unit": "kg kg-1",
"shortname": "SMLWGMA"
},
{
"code": "114",
"description": "Mass Mixing Ratio of Liquid Water Coating on Graupel Expressed as Mass of Liquid Water per Unit Mass of Dry Air",
"unit": "kg kg-1",
"shortname": "MMLWGDA"
},
{
"code": "115",
"description": "Mass Density of Liquid Water Coating on Snow Expressed as Mass of Liquid Water per Unit Volume of Air",
"unit": "kg m-3",
"shortname": "MDLWSVA"
},
{
"code": "116",
"description": "Specific Mass of Liquid Water Coating on Snow Expressed as Mass of Liquid Water per Unit Mass of Moist Air",
"unit": "kg kg-1",
"shortname": "SMLWSMA"
},
{
"code": "117",
"description": "Mass Mixing Ratio of Liquid Water Coating on Snow Expressed as Mass of Liquid Water per Unit Mass of Dry Air",
"unit": "kg kg-1",
"shortname": "MMLWSDA"
},
{
"code": "118",
"description": "Unbalanced Component of Specific Humidity",
"unit": "kg kg-1",
"shortname": "UNCSH"
},
{
"code": "119",
"description": "Unbalanced Component of Specific Cloud Liquid Water content",
"unit": "kg kg-1",
"shortname": "UCSCLW"
},
{
"code": "120",
"description": "Unbalanced Component of Specific Cloud Ice Water content",
"unit": "kg kg-1",
"shortname": "UCSCIW"
},
{
"code": "121",
"description": "Fraction of Snow Cover",
"unit": "Proportion",
"shortname": "FSNOWC"
},
{
"code": "122",
"description": "Precipitation intensity index",
"unit": "See Table 4.247",
"shortname": "PIIDX"
},
{
"code": "123",
"description": "Dominant precipitation type",
"unit": "See Table 4.201",
"shortname": "DPTYPE"
},
{
"code": "124",
"description": "Presence of showers",
"unit": "See Table 4.222",
"shortname": "PSHOW"
},
{
"code": "125",
"description": "Presence of blowing snow",
"unit": "See Table 4.222",
"shortname": "PBSNOW"
},
{
"code": "126",
"description": "Presence of blizzard",
"unit": "See Table 4.222",
"shortname": "PBLIZZ"
},
{
"code": "127",
"description": "Ice pellets (non-water equivalent) precipitation rate",
"unit": "m s-1",
"shortname": "ICEP"
},
{
"code": "128",
"description": "Total solid precipitation rate (see Note 5)",
"unit": "kg m-2 s-1",
"shortname": "TSPRATE"
},
{
"code": "129",
"description": "Effective Radius of Cloud Water",
"unit": "m",
"shortname": "EFRCWAT"
},
{
"code": "130",
"description": "Effective Radius of Rain",
"unit": "m",
"shortname": "EFRRAIN"
},
{
"code": "131",
"description": "Effective Radius of Cloud Ice",
"unit": "m",
"shortname": "EFRCICE"
},
{
"code": "132",
"description": "Effective Radius of Snow",
"unit": "m",
"shortname": "EFRSNOW"
},
{
"code": "133",
"description": "Effective Radius of Graupel",
"unit": "m",
"shortname": "EFRGRL"
},
{
"code": "134",
"description": "Effective Radius of Hail",
"unit": "m",
"shortname": "EFRHAIL"
},
{
"code": "135",
"description": "Effective Radius of Subgrid Liquid Clouds",
"unit": "m",
"shortname": "EFRSLC"
},
{
"code": "136",
"description": "Effective Radius of Subgrid Ice Clouds",
"unit": "m",
"shortname": "EFRSICEC"
},
{
"code": "137",
"description": "Effective Aspect Ratio of Rain",
"unit": "",
"shortname": "EFARRAIN"
},
{
"code": "138",
"description": "Effective Aspect Ratio of Cloud Ice",
"unit": "",
"shortname": "EFARCICE"
},
{
"code": "139",
"description": "Effective Aspect Ratio of Snow",
"unit": "",
"shortname": "EFARSNOW"
},
{
"code": "140",
"description": "Effective Aspect Ratio of Graupel",
"unit": "",
"shortname": "EFARGRL"
},
{
"code": "141",
"description": "Effective Aspect Ratio of Hail",
"unit": "",
"shortname": "EFARHAIL"
},
{
"code": "142",
"description": "Effective Aspect Ratio of Subgrid Ice Clouds",
"unit": "",
"shortname": "EFARSIC"
},
{
"code": "143",
"description": "Potential evaporation rate",
"unit": "kg m-2 s-1",
"shortname": "PERATE"
},
{
"code": "144",
"description": "Specific rain water content (convective)",
"unit": "kg kg-1",
"shortname": "SRWATERC"
},
{
"code": "145",
"description": "Specific snow water content (convective)",
"unit": "kg kg-1",
"shortname": "SSNOWWC"
},
{
"code": "146",
"description": "Cloud ice precipitation rate (see Note 6)",
"unit": "kg m-2 s-1",
"shortname": "CICEPR"
},
{
"code": "147",
"description": "Character of precipitation",
"unit": "See Table 4.249",
"shortname": "CHPRECIP"
},
{
"code": "148",
"description": "Snow evaporation rate (see Note 9)",
"unit": "kg m-2 s-1",
"shortname": "SNOWERAT"
},
{
"code": "149",
"description": "Cloud water mixing ratio",
"unit": "kg kg-1",
"shortname": "CWATERMR"
},
{
"code": "150",
"description": "Column integrated eastward water vapour mass flux",
"unit": "kg m-1s-1",
"shortname": "CEWVMF"
},
{
"code": "151",
"description": "Column integrated northward water vapour mass flux",
"unit": "kg m-1s-1",
"shortname": "CNWVMF"
},
{
"code": "152",
"description": "Column integrated eastward cloud liquid water mass flux",
"unit": "kg m-1s-1",
"shortname": "CECLWMF"
},
{
"code": "153",
"description": "Column integrated northward cloud liquid water mass flux",
"unit": "kg m-1s-1",
"shortname": "CNCLWMF"
},
{
"code": "154",
"description": "Column integrated eastward cloud ice mass flux",
"unit": "kg m-1s-1",
"shortname": "CECIMF"
},
{
"code": "155",
"description": "Column integrated northward cloud ice mass flux",
"unit": "kg m-1s-1",
"shortname": "CNCIMF"
},
{
"code": "156",
"description": "Column integrated eastward rain mass flux",
"unit": "kg m-1s-1",
"shortname": "CERMF"
},
{
"code": "157",
"description": "Column integrated northward rain mass flux",
"unit": "kg m-1s-1",
"shortname": "CNRMF"
},
{
"code": "158",
"description": "Column integrated eastward snow mass flux",
"unit": "kg m-1s-1",
"shortname": "CEFMF"
},
{
"code": "159",
"description": "Column integrated northward snow mass flux",
"unit": "kg m-1s-1",
"shortname": "CNSMF"
},
{
"code": "160",
"description": "Column integrated divergence of water vapour mass flux",
"unit": "kg m-1s-1",
"shortname": "CDWFMF"
},
{
"code": "161",
"description": "Column integrated divergence of cloud liquid water mass flux",
"unit": "kg m-1s-1",
"shortname": "CDCLWMF"
},
{
"code": "162",
"description": "Column integrated divergence of cloud ice mass flux",
"unit": "kg m-1s-1",
"shortname": "CDCIMF"
},
{
"code": "163",
"description": "Column integrated divergence of rain mass flux",
"unit": "kg m-1s-1",
"shortname": "CDRMF"
},
{
"code": "164",
"description": "Column integrated divergence of snow mass flux",
"unit": "kg m-1s-1",
"shortname": "CDSMF"
},
{
"code": "165",
"description": "Column integrated divergence of total water mass flux",
"unit": "kg m-1s-1",
"shortname": "CDTWMF"
},
{
"code": "166",
"description": "Column integrated water vapour flux",
"unit": "kg m-1s-1",
"shortname": "CWVF"
},
{
"code": "167",
"description": "Total column supercooled liquid water",
"unit": "kg m-2",
"shortname": "TCSLW"
},
{
"code": "168",
"description": "Saturation specific humidity with respect to water",
"unit": "kg m-3",
"shortname": "SSPFHW"
},
{
"code": "169",
"description": "Total column integrated saturation specific humidity with respect to water",
"unit": "kg m-2",
"shortname": "TCISSPFHW"
},
{
"code": "170-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "192",
"description": "Categorical Rain",
"unit": "Code table 4.222",
"shortname": "CRAIN"
},
{
"code": "193",
"description": "Categorical Freezing Rain",
"unit": "Code table 4.222",
"shortname": "CFRZR"
},
{
"code": "194",
"description": "Categorical Ice Pellets",
"unit": "Code table 4.222",
"shortname": "CICEP"
},
{
"code": "195",
"description": "Categorical Snow",
"unit": "Code table 4.222",
"shortname": "CSNOW"
},
{
"code": "196",
"description": "Convective Precipitation Rate",
"unit": "kg m-2 s-1",
"shortname": "CPRAT"
},
{
"code": "197",
"description": "Horizontal Moisture Divergence",
"unit": "kg kg-1 s-1",
"shortname": "MDIV"
},
{
"code": "198",
"description": "Minimum Relative Humidity",
"unit": "%",
"shortname": "MINRH"
},
{
"code": "199",
"description": "Potential Evaporation",
"unit": "kg m-2",
"shortname": "PEVAP"
},
{
"code": "200",
"description": "Potential Evaporation Rate",
"unit": "W m-2",
"shortname": "PEVPR"
},
{
"code": "201",
"description": "Snow Cover",
"unit": "%",
"shortname": "SNOWC"
},
{
"code": "202",
"description": "Rain Fraction of Total Liquid Water",
"unit": "non-dim",
"shortname": "FRAIN"
},
{
"code": "203",
"description": "Rime Factor",
"unit": "non-dim",
"shortname": "RIME"
},
{
"code": "204",
"description": "Total Column Integrated Rain",
"unit": "kg m-2",
"shortname": "TCOLR"
},
{
"code": "205",
"description": "Total Column Integrated Snow",
"unit": "kg m-2",
"shortname": "TCOLS"
},
{
"code": "206",
"description": "Total Icing Potential Diagnostic",
"unit": "non-dim",
"shortname": "TIPD"
},
{
"code": "207",
"description": "Number concentration for ice particles",
"unit": "non-dim",
"shortname": "NCIP"
},
{
"code": "208",
"description": "Snow temperature",
"unit": "K",
"shortname": "SNOT"
},
{
"code": "209",
"description": "Total column-integrated supercooled liquid water",
"unit": "kg m-2",
"shortname": "TCLSW"
},
{
"code": "210",
"description": "Total column-integrated melting ice",
"unit": "kg m-2",
"shortname": "TCOLM"
},
{
"code": "211",
"description": "Evaporation - Precipitation",
"unit": "cm/day",
"shortname": "EMNP"
},
{
"code": "212",
"description": "Sublimation (evaporation from snow)",
"unit": "W m-2",
"shortname": "SBSNO"
},
{
"code": "213",
"description": "Deep Convective Moistening Rate",
"unit": "kg kg-1 s-1",
"shortname": "CNVMR"
},
{
"code": "214",
"description": "Shallow Convective Moistening Rate",
"unit": "kg kg-1 s-1",
"shortname": "SHAMR"
},
{
"code": "215",
"description": "Vertical Diffusion Moistening Rate",
"unit": "kg kg-1 s-1",
"shortname": "VDFMR"
},
{
"code": "216",
"description": " Condensation Pressure of Parcali Lifted From Indicate Surface ",
"unit": "Pa",
"shortname": "CONDP"
},
{
"code": "217",
"description": "Large scale moistening rate",
"unit": "kg kg-1 s-1",
"shortname": "LRGMR"
},
{
"code": "218",
"description": "Specific humidity at top of viscous sublayer",
"unit": "kg kg-1",
"shortname": "QZ0"
},
{
"code": "219",
"description": "Maximum specific humidity at 2m",
"unit": "kg kg-1",
"shortname": "QMAX"
},
{
"code": "220",
"description": "Minimum specific humidity at 2m",
"unit": "kg kg-1",
"shortname": "QMIN"
},
{
"code": "221",
"description": "Liquid precipitation (Rainfall)",
"unit": "kg m-2",
"shortname": "ARAIN"
},
{
"code": "222",
"description": "Snow temperature, depth-avg",
"unit": "K",
"shortname": "SNOWT"
},
{
"code": "223",
"description": "Total precipitation (nearest grid point)",
"unit": "kg m-2",
"shortname": "APCPN"
},
{
"code": "224",
"description": "Convective precipitation (nearest grid point)",
"unit": "kg m-2",
"shortname": "ACPCPN"
},
{
"code": "225",
"description": "Freezing Rain",
"unit": "kg m-2",
"shortname": "FRZR"
},
{
"code": "226",
"description": "Pblackominant Weather (see Local Use Note A)",
"unit": "Numeric",
"shortname": "PWTHER"
},
{
"code": "227",
"description": "Frozen Rain",
"unit": "kg m-2",
"shortname": "FROZR"
},
{
"code": "228",
"description": "Flat Ice Accumulation (FRAM)",
"unit": "kg m-2",
"shortname": "FICEAC"
},
{
"code": "229",
"description": "Line Ice Accumulation (FRAM)",
"unit": "kg m-2",
"shortname": "LICEAC"
},
{
"code": "230",
"description": "Sleet Accumulation",
"unit": "kg m-2",
"shortname": "SLACC"
},
{
"code": "231",
"description": "Precipitation Potential Index",
"unit": "%",
"shortname": "PPINDX"
},
{
"code": "232",
"description": "Probability Cloud Ice Present",
"unit": "%",
"shortname": "PROBCIP"
},
{
"code": "233",
"description": "Snow Liquid ratio",
"unit": "kg kg-1",
"shortname": "SNOWLR"
},
{
"code": "234",
"description": "Precipitation Duration",
"unit": "hour",
"shortname": "PCPDUR"
},
{
"code": "235",
"description": "Cloud Liquid Mixing Ratio",
"unit": "kg kg-1",
"shortname": "CLLMR"
},
{
"code": "236-240",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "241",
"description": "Total Snow",
"unit": "kg m-2",
"shortname": "TSNOW"
},
{
"code": "242",
"description": "Relative Humidity with Respect to Precipitable Water",
"unit": "%",
"shortname": "RHPW"
},
{
"code": "245",
"description": "Hourly Maximum of Column Vertical Integrated Graupel on Entire Atmosphere",
"unit": "kg m-2",
"shortname": "MAXVIG"
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
},
{
"discipline": "0",
"category": "2",
"entries": [
{
"code": "0",
"description": "Wind Direction (from which blowing)",
"unit": "Â°",
"shortname": "WDIR"
},
{
"code": "1",
"description": "Wind Speed",
"unit": "m s-1",
"shortname": "WIND"
},
{
"code": "2",
"description": "U-Component of Wind",
"unit": "m s-1",
"shortname": "UGRD"
},
{
"code": "3",
"description": "V-Component of Wind",
"unit": "m s-1",
"shortname": "VGRD"
},
{
"code": "4",
"description": "Stream Function",
"unit": "m2 s-1",
"shortname": "STRM"
},
{
"code": "5",
"description": "Velocity Potential",
"unit": "m2 s-1",
"shortname": "VPOT"
},
{
"code": "6",
"description": "Montgomery Stream Function",
"unit": "m2 s-2",
"shortname": "MNTSF"
},
{
"code": "7",
"description": "Sigma Coordinate Vertical Velocity",
"unit": "s-1",
"shortname": "SGCVV"
},
{
"code": "8",
"description": "Vertical Velocity (Pressure)",
"unit": "Pa s-1",
"shortname": "VVEL"
},
{
"code": "9",
"description": "Vertical Velocity (Geometric)",
"unit": "m s-1",
"shortname": "DZDT"
},
{
"code": "10",
"description": "Absolute Vorticity",
"unit": "s-1",
"shortname": "ABSV"
},
{
"code": "11",
"description": "Absolute Divergence",
"unit": "s-1",
"shortname": "ABSD"
},
{
"code": "12",
"description": "Relative Vorticity",
"unit": "s-1",
"shortname": "RELV"
},
{
"code": "13",
"description": "Relative Divergence",
"unit": "s-1",
"shortname": "RELD"
},
{
"code": "14",
"description": "Potential Vorticity",
"unit": "K m2 kg-1 s-1",
"shortname": "PVORT"
},
{
"code": "15",
"description": "Vertical U-Component Shear",
"unit": "s-1",
"shortname": "VUCSH"
},
{
"code": "16",
"description": "Vertical V-Component Shear",
"unit": "s-1",
"shortname": "VVCSH"
},
{
"code": "17",
"description": "Momentum Flux, U-Component",
"unit": "N m-2",
"shortname": "UFLX"
},
{
"code": "18",
"description": "Momentum Flux, V-Component",
"unit": "N m-2",
"shortname": "VFLX"
},
{
"code": "19",
"description": "Wind Mixing Energy",
"unit": "J",
"shortname": "WMIXE"
},
{
"code": "20",
"description": "Boundary Layer Dissipation",
"unit": "W m-2",
"shortname": "BLYDP"
},
{
"code": "21",
"description": "Maximum Wind Speed (see Note 1)",
"unit": "m s-1",
"shortname": "MAXGUST"
},
{
"code": "22",
"description": "Wind Speed (Gust)",
"unit": "m s-1",
"shortname": "GUST"
},
{
"code": "23",
"description": "U-Component of Wind (Gust)",
"unit": "m s-1",
"shortname": "UGUST"
},
{
"code": "24",
"description": "V-Component of Wind (Gust)",
"unit": "m s-1",
"shortname": "VGUST"
},
{
"code": "25",
"description": "Vertical Speed Shear",
"unit": "s-1",
"shortname": "VWSH"
},
{
"code": "26",
"description": "Horizontal Momentum Flux",
"unit": "N m-2",
"shortname": "MFLX"
},
{
"code": "27",
"description": "U-Component Storm Motion",
"unit": "m s-1",
"shortname": "USTM"
},
{
"code": "28",
"description": "V-Component Storm Motion",
"unit": "m s-1",
"shortname": "VSTM"
},
{
"code": "29",
"description": "Drag Coefficient",
"unit": "Numeric",
"shortname": "CD"
},
{
"code": "30",
"description": "Frictional Velocity",
"unit": "m s-1",
"shortname": "FRICV"
},
{
"code": "31",
"description": "Turbulent Diffusion Coefficient for Momentum",
"unit": "m2 s-1",
"shortname": "TDCMOM"
},
{
"code": "32",
"description": "Eta Coordinate Vertical Velocity",
"unit": "s-1",
"shortname": "ETACVV"
},
{
"code": "33",
"description": "Wind Fetch",
"unit": "m",
"shortname": "WINDF"
},
{
"code": "34",
"description": "Normal Wind Component (see Note 2)",
"unit": "m s-1",
"shortname": "NWIND"
},
{
"code": "35",
"description": "Tangential Wind Component (see Note 2)",
"unit": "m s-1",
"shortname": "TWIND"
},
{
"code": "36",
"description": "Amplitude Function for Rossby Wave Envelope for Meridional Wind (see Note 3)",
"unit": "m s-1",
"shortname": "AFRWE"
},
{
"code": "37",
"description": "Northward Turbulent Surface Stress (see Note 4)",
"unit": "N m-2 s",
"shortname": "NTSS"
},
{
"code": "38",
"description": "Eastward Turbulent Surface Stress (see Note 4)",
"unit": "N m-2 s",
"shortname": "ETSS"
},
{
"code": "39",
"description": "Eastward Wind Tendency Due to Parameterizations",
"unit": "m s-2",
"shortname": "EWTPARM"
},
{
"code": "40",
"description": "Northward Wind Tendency Due to Parameterizations",
"unit": "m s-2",
"shortname": "NWTPARM"
},
{
"code": "41",
"description": "U-Component of Geostrophic Wind",
"unit": "m s-1",
"shortname": "UGWIND"
},
{
"code": "42",
"description": "V-Component of Geostrophic Wind",
"unit": "m s-1",
"shortname": "VGWIND"
},
{
"code": "43",
"description": "Geostrophic Wind Direction",
"unit": "Â°",
"shortname": "GEOWD"
},
{
"code": "44",
"description": "Geostrophic Wind Speed",
"unit": "m s-1",
"shortname": "GEOWS"
},
{
"code": "45",
"description": "Unbalanced Component of Divergence",
"unit": "s-1",
"shortname": "UNDIV"
},
{
"code": "46",
"description": "Vorticity Advection",
"unit": "s-2",
"shortname": "VORTADV"
},
{
"code": "47",
"description": "Surface roughness for heat,(see Note 5)",
"unit": "m",
"shortname": "SFRHEAT"
},
{
"code": "48",
"description": "Surface roughness for moisture,(see Note 6)",
"unit": "m",
"shortname": "SFRMOIST"
},
{
"code": "49",
"description": "Wind stress",
"unit": "N m-2",
"shortname": "WINDSTR"
},
{
"code": "50",
"description": "Eastward wind stress",
"unit": "N m-2",
"shortname": "EWINDSTR"
},
{
"code": "51",
"description": "Northward wind stress",
"unit": "N m-2",
"shortname": "NWINDSTR"
},
{
"code": "52",
"description": "u-component of wind stress",
"unit": "N m-2",
"shortname": "UWINDSTR"
},
{
"code": "53",
"description": "v-component of wind stress",
"unit": "N m-2",
"shortname": "VWINDSTR"
},
{
"code": "54",
"description": "Natural logarithm of surface roughness length for heat",
"unit": "m",
"shortname": "NLSRLH"
},
{
"code": "55",
"description": "Natural logarithm of surface roughness length for moisture",
"unit": "m",
"shortname": "NLSRLM"
},
{
"code": "56",
"description": "u-component of neutral wind",
"unit": "m s-1",
"shortname": "UNWIND"
},
{
"code": "57",
"description": "v-component of neutral wind",
"unit": "m s-1",
"shortname": "VNWIND"
},
{
"code": "58",
"description": "Magnitude of turbulent surface stress",
"unit": "N m-2",
"shortname": "TSFCSTR"
},
{
"code": "59",
"description": "Vertical divergence",
"unit": "s-1",
"shortname": "VDIV"
},
{
"code": "60",
"description": "Drag thermal coefficient",
"unit": "Numeric",
"shortname": "DTC"
},
{
"code": "61",
"description": "Drag evaporation coefficient",
"unit": "Numeric",
"shortname": "DEC"
},
{
"code": "62",
"description": "Eastward turbulent surface stress",
"unit": "N m-2",
"shortname": "EASTTSS"
},
{
"code": "63",
"description": "Northward turbulent surface stress",
"unit": "N m-2",
"shortname": "NRTHTSS"
},
{
"code": "64",
"description": "Eastward turbulent surface stress due to orographic form drag",
"unit": "N m-2",
"shortname": "EASTTSSOD"
},
{
"code": "65",
"description": "Northward turbulent surface stress due to orographic form drag",
"unit": "N m-2",
"shortname": "NRTHTSSOD"
},
{
"code": "66",
"description": "Eastward turbulent surface stress due to surface roughness",
"unit": "N m-2",
"shortname": "EASTTSSSR"
},
{
"code": "67",
"description": "Northward turbulent surface stress due to surface roughness",
"unit": "N m-2",
"shortname": "NRTHTSSSR"
},
{
"code": "68-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "192",
"description": "Vertical Speed Shear",
"unit": "s-1",
"shortname": "VWSH"
},
{
"code": "193",
"description": "Horizontal Momentum Flux",
"unit": "N m-2",
"shortname": "MFLX"
},
{
"code": "194",
"description": "U-Component Storm Motion",
"unit": "m s-1",
"shortname": "USTM"
},
{
"code": "195",
"description": "V-Component Storm Motion",
"unit": "m s-1",
"shortname": "VSTM"
},
{
"code": "196",
"description": "Drag Coefficient",
"unit": "non-dim",
"shortname": "CD"
},
{
"code": "197",
"description": "Frictional Velocity",
"unit": "m s-1",
"shortname": "FRICV"
},
{
"code": "198",
"description": "Latitude of U Wind Component of Velocity",
"unit": "deg",
"shortname": "LAUV"
},
{
"code": "199",
"description": "Longitude of U Wind Component of Velocity",
"unit": "deg",
"shortname": "LOUV"
},
{
"code": "200",
"description": "Latitude of V Wind Component of Velocity",
"unit": "deg",
"shortname": "LAVV"
},
{
"code": "201",
"description": "Longitude of V Wind Component of Velocity",
"unit": "deg",
"shortname": "LOVV"
},
{
"code": "202",
"description": "Latitude of Presure Point",
"unit": "deg",
"shortname": "LAPP"
},
{
"code": "203",
"description": "Longitude of Presure Point",
"unit": "deg",
"shortname": "LOPP"
},
{
"code": "204",
"description": "Vertical Eddy Diffusivity Heat exchange",
"unit": "m2 s-1",
"shortname": "VEDH"
},
{
"code": "205",
"description": " Covariance between Meridional and Zonal Components of the wind. ",
"unit": "m2 s-2",
"shortname": "COVMZ"
},
{
"code": "206",
"description": " Covariance between Temperature and Zonal Components of the wind. ",
"unit": "K*m s-1",
"shortname": "COVTZ"
},
{
"code": "207",
"description": " Covariance between Temperature and Meridional Components of the wind. ",
"unit": "K*m s-1",
"shortname": "COVTM"
},
{
"code": "208",
"description": "Vertical Diffusion Zonal Acceleration",
"unit": "m s-2",
"shortname": "VDFUA"
},
{
"code": "209",
"description": "Vertical Diffusion Meridional Acceleration",
"unit": "m s-2",
"shortname": "VDFVA"
},
{
"code": "210",
"description": "Gravity wave drag zonal acceleration",
"unit": "m s-2",
"shortname": "GWDU"
},
{
"code": "211",
"description": "Gravity wave drag meridional acceleration",
"unit": "m s-2",
"shortname": "GWDV"
},
{
"code": "212",
"description": "Convective zonal momentum mixing acceleration",
"unit": "m s-2",
"shortname": "CNVU"
},
{
"code": "213",
"description": "Convective meridional momentum mixing acceleration",
"unit": "m s-2",
"shortname": "CNVV"
},
{
"code": "214",
"description": "Tendency of vertical velocity",
"unit": "m s-2",
"shortname": "WTEND"
},
{
"code": "215",
"description": "Omega (Dp/Dt) divide by density",
"unit": "K",
"shortname": "OMGALF"
},
{
"code": "216",
"description": "Convective Gravity wave drag zonal acceleration",
"unit": "m s-2",
"shortname": "CNGWDU"
},
{
"code": "217",
"description": "Convective Gravity wave drag meridional acceleration",
"unit": "m s-2",
"shortname": "CNGWDV"
},
{
"code": "218",
"description": "Velocity Point Model Surface",
"unit": "",
"shortname": "LMV"
},
{
"code": "219",
"description": "Potential Vorticity (Mass-Weighted)",
"unit": "1/s/m",
"shortname": "PVMWW"
},
{
"code": "220",
"description": "Hourly Maximum of Upward Vertical Velocity",
"unit": "m s-1",
"shortname": "MAXUVV"
},
{
"code": "221",
"description": "Hourly Maximum of Downward Vertical Velocity",
"unit": "m s-1",
"shortname": "MAXDVV"
},
{
"code": "222",
"description": "U Component of Hourly Maximum 10m Wind Speed",
"unit": "m s-1",
"shortname": "MAXUW"
},
{
"code": "223",
"description": "V Component of Hourly Maximum 10m Wind Speed",
"unit": "m s-1",
"shortname": "MAXVW"
},
{
"code": "224",
"description": "Ventilation Rate",
"unit": "m2 s-1",
"shortname": "VRATE"
},
{
"code": "225",
"description": "Transport Wind Speed",
"unit": "m s-1",
"shortname": "TRWSPD"
},
{
"code": "226",
"description": "Transport Wind Direction",
"unit": "Deg",
"shortname": "TRWDIR"
},
{
"code": "227",
"description": "Earliest Reasonable Arrival Time (10% exceedance)",
"unit": "s",
"shortname": "TOA10"
},
{
"code": "228",
"description": "Most Likely Arrival Time (50% exceedance)",
"unit": "s",
"shortname": "TOA50"
},
{
"code": "229",
"description": "Most Likely Departure Time (50% exceedance)",
"unit": "s",
"shortname": "TOD50"
},
{
"code": "230",
"description": "Latest Reasonable Departure Time (90% exceedance)",
"unit": "s",
"shortname": "TOD90"
},
{
"code": "231",
"description": "Tropical Wind Direction",
"unit": "Â°",
"shortname": "TPWDIR"
},
{
"code": "232",
"description": "Tropical Wind Speed",
"unit": "m s-1",
"shortname": "TPWSPD"
},
{
"code": "233",
"description": "Inflow Based (ESFC) to 50% EL Shear Magnitude",
"unit": "kt",
"shortname": "ESHR"
},
{
"code": "234",
"description": "U Component Inflow Based to 50% EL Shear Vector",
"unit": "kt",
"shortname": "UESH"
},
{
"code": "235",
"description": "V Component Inflow Based to 50% EL Shear Vector",
"unit": "kt",
"shortname": "VESH"
},
{
"code": "236",
"description": "U Component Bunkers Effective Right Motion",
"unit": "kt",
"shortname": "UEID"
},
{
"code": "237",
"description": "V Component Bunkers Effective Right Motion",
"unit": "kt",
"shortname": "VEID"
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
},
{
"discipline": "0",
"category": "3",
"entries": [
{
"code": "0",
"description": "Pressure",
"unit": "Pa",
"shortname": "PRES"
},
{
"code": "1",
"description": "Pressure Reduced to MSL",
"unit": "Pa",
"shortname": "PRMSL"
},
{
"code": "2",
"description": "Pressure Tendency",
"unit": "Pa s-1",
"shortname": "PTEND"
},
{
"code": "3",
"description": "ICAO Standard Atmosphere Reference Height",
"unit": "m",
"shortname": "ICAHT"
},
{
"code": "4",
"description": "Geopotential",
"unit": "m2 s-2",
"shortname": "GP"
},
{
"code": "5",
"description": "Geopotential Height",
"unit": "gpm",
"shortname": "HGT"
},
{
"code": "6",
"description": "Geometric Height",
"unit": "m",
"shortname": "DIST"
},
{
"code": "7",
"description": "Standard Deviation of Height",
"unit": "m",
"shortname": "HSTDV"
},
{
"code": "8",
"description": "Pressure Anomaly",
"unit": "Pa",
"shortname": "PRESA"
},
{
"code": "9",
"description": "Geopotential Height Anomaly",
"unit": "gpm",
"shortname": "GPA"
},
{
"code": "10",
"description": "Density",
"unit": "kg m-3",
"shortname": "DEN"
},
{
"code": "11",
"description": "Altimeter Setting",
"unit": "Pa",
"shortname": "ALTS"
},
{
"code": "12",
"description": "Thickness",
"unit": "m",
"shortname": "THICK"
},
{
"code": "13",
"description": "Pressure Altitude",
"unit": "m",
"shortname": "PRESALT"
},
{
"code": "14",
"description": "Density Altitude",
"unit": "m",
"shortname": "DENALT"
},
{
"code": "15",
"description": "5-Wave Geopotential Height",
"unit": "gpm",
"shortname": "5WAVH"
},
{
"code": "16",
"description": "Zonal Flux of Gravity Wave Stress",
"unit": "N m-2",
"shortname": "U-GWD"
},
{
"code": "17",
"description": "Meridional Flux of Gravity Wave Stress",
"unit": "N m-2",
"shortname": "V-GWD"
},
{
"code": "18",
"description": "Planetary Boundary Layer Height",
"unit": "m",
"shortname": "HPBL"
},
{
"code": "19",
"description": "5-Wave Geopotential Height Anomaly",
"unit": "gpm",
"shortname": "5WAVA"
},
{
"code": "20",
"description": "Standard Deviation of Sub-Grid Scale Orography",
"unit": "m",
"shortname": "SDSGSO"
},
{
"code": "21",
"description": "Angle of Sub-Grid Scale Orography",
"unit": "rad",
"shortname": "AOSGSO"
},
{
"code": "22",
"description": "Slope of Sub-Grid Scale Orography",
"unit": "Numeric",
"shortname": "SSGSO"
},
{
"code": "23",
"description": "Gravity Wave Dissipation",
"unit": "W m-2",
"shortname": "GWD"
},
{
"code": "24",
"description": "Anisotropy of Sub-Grid Scale Orography",
"unit": "Numeric",
"shortname": "ASGSO"
},
{
"code": "25",
"description": "Natural Logarithm of Pressure in Pa",
"unit": "Numeric",
"shortname": "NLPRES"
},
{
"code": "26",
"description": "Exner Pressure",
"unit": "Numeric",
"shortname": "EXPRES"
},
{
"code": "27",
"description": "Updraught Mass Flux",
"unit": "kg m-2 s-1",
"shortname": "UMFLX"
},
{
"code": "28",
"description": "Downdraught Mass Flux",
"unit": "kg m-2 s-1",
"shortname": "DMFLX"
},
{
"code": "29",
"description": "Updraught Detrainment Rate",
"unit": "kg m-3 s-1",
"shortname": "UDRATE"
},
{
"code": "30",
"description": "Downdraught Detrainment Rate",
"unit": "kg m-3 s-1",
"shortname": "DDRATE"
},
{
"code": "31",
"description": "Unbalanced Component of Logarithm of Surface Pressure",
"unit": "-",
"shortname": "UCLSPRS"
},
{
"code": "32",
"description": "Saturation water vapour pressure",
"unit": "Pa",
"shortname": "SWATERVP"
},
{
"code": "33",
"description": "Geometric altitude above mean sea level",
"unit": "m",
"shortname": "GAMSL"
},
{
"code": "34",
"description": "Geometric height above ground level",
"unit": "m",
"shortname": "GHAGRD"
},
{
"code": "35",
"description": "Column integrated divergence of total mass flux",
"unit": "kg m-2 s-1",
"shortname": "CDTMF"
},
{
"code": "36",
"description": "Column integrated eastward total mass flux",
"unit": "kg m-2 s-1",
"shortname": "CETMF"
},
{
"code": "37",
"description": "Column integrated northward total mass flux",
"unit": "kg m-2 s-1",
"shortname": "CNTMF"
},
{
"code": "38",
"description": "Standard deviation of filtered subgrid orography",
"unit": "m",
"shortname": "SDFSO"
},
{
"code": "39",
"description": "Column integrated mass of atmosphere",
"unit": "kg m-2 s-1",
"shortname": "CMATMOS"
},
{
"code": "40",
"description": "Column integrated eastward geopotential flux",
"unit": "W m-1",
"shortname": "CEGFLUX"
},
{
"code": "41",
"description": "Column integrated northward geopotential flux",
"unit": "W m-1",
"shortname": "CNGFLUX"
},
{
"code": "42",
"description": "Column integrated divergence of water geopotential flux",
"unit": "W m-2",
"shortname": "CDWGFLUX"
},
{
"code": "43",
"description": "Column integrated divergence of geopotential flux",
"unit": "W m-2",
"shortname": "CDGFLUX"
},
{
"code": "44",
"description": "Height of zero-degree wet-bulb temperature",
"unit": "m",
"shortname": "HWBT"
},
{
"code": "45",
"description": "Height of one-degree wet-bulb temperature",
"unit": "m",
"shortname": "WOBT"
},
{
"code": "46",
"description": "Pressure departure from hydrostatic state",
"unit": "Pa",
"shortname": "PRESDHS"
},
{
"code": "47-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "192",
"description": "MSLP (Eta model reduction)",
"unit": "Pa",
"shortname": "MSLET"
},
{
"code": "193",
"description": "5-Wave Geopotential Height",
"unit": "gpm",
"shortname": "5WAVH"
},
{
"code": "194",
"description": "Zonal Flux of Gravity Wave Stress",
"unit": "N m-2",
"shortname": "U-GWD"
},
{
"code": "195",
"description": "Meridional Flux of Gravity Wave Stress",
"unit": "N m-2",
"shortname": "V-GWD"
},
{
"code": "196",
"description": "Planetary Boundary Layer Height",
"unit": "m",
"shortname": "HPBL"
},
{
"code": "197",
"description": "5-Wave Geopotential Height Anomaly",
"unit": "gpm",
"shortname": "5WAVA"
},
{
"code": "198",
"description": "MSLP (MAPS System Reduction)",
"unit": "Pa",
"shortname": "MSLMA"
},
{
"code": "199",
"description": "3-hr pressure tendency (Std. Atmos. Reduction)",
"unit": "Pa s-1",
"shortname": "TSLSA"
},
{
"code": "200",
"description": "Pressure of level from which parcel was lifted",
"unit": "Pa",
"shortname": "PLPL"
},
{
"code": "201",
"description": "X-gradient of Log Pressure",
"unit": "m-1",
"shortname": "LPSX"
},
{
"code": "202",
"description": "Y-gradient of Log Pressure",
"unit": "m-1",
"shortname": "LPSY"
},
{
"code": "203",
"description": "X-gradient of Height",
"unit": "m-1",
"shortname": "HGTX"
},
{
"code": "204",
"description": "Y-gradient of Height",
"unit": "m-1",
"shortname": "HGTY"
},
{
"code": "205",
"description": "Layer Thickness",
"unit": "m",
"shortname": "LAYTH"
},
{
"code": "206",
"description": "Natural Log of Surface Pressure",
"unit": "ln (kPa)",
"shortname": "NLGSP"
},
{
"code": "207",
"description": "Convective updraft mass flux",
"unit": "kg m-2 s-1",
"shortname": "CNVUMF"
},
{
"code": "208",
"description": "Convective downdraft mass flux",
"unit": "kg m-2 s-1",
"shortname": "CNVDMF"
},
{
"code": "209",
"description": "Convective detrainment mass flux",
"unit": "kg m-2 s-1",
"shortname": "CNVDEMF"
},
{
"code": "210",
"description": "Mass Point Model Surface",
"unit": "",
"shortname": "LMH"
},
{
"code": "211",
"description": "Geopotential Height (nearest grid point)",
"unit": "gpm",
"shortname": "HGTN"
},
{
"code": "212",
"description": "Pressure (nearest grid point)",
"unit": "Pa",
"shortname": "PRESN"
},
{
"code": "213",
"description": "Orographic Convexity",
"unit": "",
"shortname": "ORCONV"
},
{
"code": "214",
"description": "Orographic Asymmetry, W Component",
"unit": "",
"shortname": "ORASW"
},
{
"code": "215",
"description": "Orographic Asymmetry, S Component",
"unit": "",
"shortname": "ORASS"
},
{
"code": "216",
"description": "Orographic Asymmetry, SW Component",
"unit": "",
"shortname": "ORASSW"
},
{
"code": "217",
"description": "Orographic Asymmetry, NW Component",
"unit": "",
"shortname": "ORASNW"
},
{
"code": "218",
"description": "Orographic Length Scale, W Component",
"unit": "",
"shortname": "ORLSW"
},
{
"code": "219",
"description": "Orographic Length Scale, S Component",
"unit": "",
"shortname": "ORLSS"
},
{
"code": "220",
"description": "Orographic Length Scale, SW Component",
"unit": "",
"shortname": "ORLSSW"
},
{
"code": "221",
"description": "Orographic Length Scale, NW Component",
"unit": "",
"shortname": "ORLSNW"
},
{
"code": "222",
"description": "Effective Surface Height",
"unit": "m",
"shortname": "EFSH"
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
},
{
"discipline": "0",
"category": "6",
"entries": [
{
"code": "0",
"description": "Cloud Ice",
"unit": "kg m-2",
"shortname": "CICE"
},
{
"code": "1",
"description": "Total Cloud Cover",
"unit": "%",
"shortname": "TCDC"
},
{
"code": "2",
"description": "Convective Cloud Cover",
"unit": "%",
"shortname": "CDCON"
},
{
"code": "3",
"description": "Low Cloud Cover",
"unit": "%",
"shortname": "LCDC"
},
{
"code": "4",
"description": "Medium Cloud Cover",
"unit": "%",
"shortname": "MCDC"
},
{
"code": "5",
"description": "High Cloud Cover",
"unit": "%",
"shortname": "HCDC"
},
{
"code": "6",
"description": "Cloud Water",
"unit": "kg m-2",
"shortname": "CWAT"
},
{
"code": "7",
"description": "Cloud Amount",
"unit": "%",
"shortname": "CDCA"
},
{
"code": "8",
"description": "Cloud Type",
"unit": "See Table 4.203",
"shortname": "CDCT"
},
{
"code": "9",
"description": "Thunderstorm Maximum Tops",
"unit": "m",
"shortname": "TMAXT"
},
{
"code": "10",
"description": "Thunderstorm Coverage",
"unit": "See Table 4.204",
"shortname": "THUNC"
},
{
"code": "11",
"description": "Cloud Base",
"unit": "m",
"shortname": "CDCB"
},
{
"code": "12",
"description": "Cloud Top",
"unit": "m",
"shortname": "CDCTOP"
},
{
"code": "13",
"description": "Ceiling",
"unit": "m",
"shortname": "CEIL"
},
{
"code": "14",
"description": "Non-Convective Cloud Cover",
"unit": "%",
"shortname": "CDLYR"
},
{
"code": "15",
"description": "Cloud Work Function",
"unit": "J kg-1",
"shortname": "CWORK"
},
{
"code": "16",
"description": "Convective Cloud Efficiency",
"unit": "Proportion",
"shortname": "CUEFI"
},
{
"code": "17",
"description": "Total Condensate * - Parameter deprecated",
"unit": "kg kg-1",
"shortname": "TCONDO"
},
{
"code": "18",
"description": "Total Column-Integrated Cloud Water * - Parameter deprecated",
"unit": "kg m-2",
"shortname": "TCOLWO"
},
{
"code": "19",
"description": "Total Column-Integrated Cloud Ice * - Parameter deprecated",
"unit": "kg m-2",
"shortname": "TCOLIO"
},
{
"code": "20",
"description": "Total Column-Integrated Condensate * - Parameter deprecated",
"unit": "kg m-2",
"shortname": "TCOLC"
},
{
"code": "21",
"description": "Ice fraction of total condensate",
"unit": "Proportion",
"shortname": "FICE"
},
{
"code": "22",
"description": "Cloud Cover",
"unit": "%",
"shortname": "CDCC"
},
{
"code": "23",
"description": "Cloud Ice Mixing Ratio * - Parameter deprecated",
"unit": "kg kg-1",
"shortname": "CDCIMR"
},
{
"code": "24",
"description": "Sunshine",
"unit": "Numeric",
"shortname": "SUNS"
},
{
"code": "25",
"description": "Horizontal Extent of Cumulonimbus (CB)",
"unit": "%",
"shortname": "CBHE"
},
{
"code": "26",
"description": "Height of Convective Cloud Base",
"unit": "m",
"shortname": "HCONCB"
},
{
"code": "27",
"description": "Height of Convective Cloud Top",
"unit": "m",
"shortname": "HCONCT"
},
{
"code": "28",
"description": "Number Concentration of Cloud Droplets",
"unit": "kg-1",
"shortname": "NCONCD"
},
{
"code": "29",
"description": "Number Concentration of Cloud Ice",
"unit": "kg-1",
"shortname": "NCCICE"
},
{
"code": "30",
"description": "Number Density of Cloud Droplets",
"unit": "m-3",
"shortname": "NDENCD"
},
{
"code": "31",
"description": "Number Density of Cloud Ice",
"unit": "m-3",
"shortname": "NDCICE"
},
{
"code": "32",
"description": "Fraction of Cloud Cover",
"unit": "Numeric",
"shortname": "FRACCC"
},
{
"code": "33",
"description": "Sunshine Duration",
"unit": "s",
"shortname": "SUNSD"
},
{
"code": "34",
"description": "Surface Long Wave Effective Total Cloudiness",
"unit": "Numeric",
"shortname": "SLWTC"
},
{
"code": "35",
"description": "Surface Short Wave Effective Total Cloudiness",
"unit": "Numeric",
"shortname": "SSWTC"
},
{
"code": "36",
"description": "Fraction of Stratiform Precipitation Cover",
"unit": "Proportion",
"shortname": "FSTRPC"
},
{
"code": "37",
"description": "Fraction of Convective Precipitation Cover",
"unit": "Proportion",
"shortname": "FCONPC"
},
{
"code": "38",
"description": "Mass Density of Cloud Droplets",
"unit": "kg m-3",
"shortname": "MASSDCD"
},
{
"code": "39",
"description": "Mass Density of Cloud Ice",
"unit": "kg m-3",
"shortname": "MASSDCI"
},
{
"code": "40",
"description": "Mass Density of Convective Cloud Water Droplets",
"unit": "kg m-3",
"shortname": "MDCCWD"
},
{
"code": "41-46",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "47",
"description": "Volume Fraction of Cloud Water Droplets (see Note 2)",
"unit": "Numeric",
"shortname": "VFRCWD"
},
{
"code": "48",
"description": "Volume Fraction of Cloud Ice Particles (see Note 2)",
"unit": "Numeric",
"shortname": "VFRCICE"
},
{
"code": "49",
"description": "Volume Fraction of Cloud (Ice and/or Water) (see Note 2)",
"unit": "Numeric",
"shortname": "VFRCIW"
},
{
"code": "50",
"description": "Fog (see Note 3)",
"unit": "%",
"shortname": "FOG"
},
{
"code": "51",
"description": "Sunshine Duration Fraction (see Note 4)",
"unit": "Proportion",
"shortname": "SUNFRAC"
},
{
"code": "52-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "192",
"description": "Non-Convective Cloud Cover",
"unit": "%",
"shortname": "CDLYR"
},
{
"code": "193",
"description": "Cloud Work Function",
"unit": "J kg-1",
"shortname": "CWORK"
},
{
"code": "194",
"description": "Convective Cloud Efficiency",
"unit": "non-dim",
"shortname": "CUEFI"
},
{
"code": "195",
"description": "Total Condensate",
"unit": "kg kg-1",
"shortname": "TCOND"
},
{
"code": "196",
"description": "Total Column-Integrated Cloud Water",
"unit": "kg m-2",
"shortname": "TCOLW"
},
{
"code": "197",
"description": "Total Column-Integrated Cloud Ice",
"unit": "kg m-2",
"shortname": "TCOLI"
},
{
"code": "198",
"description": "Total Column-Integrated Condensate",
"unit": "kg m-2",
"shortname": "TCOLC"
},
{
"code": "199",
"description": "Ice fraction of total condensate",
"unit": "non-dim",
"shortname": "FICE"
},
{
"code": "200",
"description": "Convective Cloud Mass Flux",
"unit": "Pa s-1",
"shortname": "MFLUX"
},
{
"code": "201",
"description": "Sunshine Duration",
"unit": "s",
"shortname": "SUNSD"
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
},
{
"discipline": "10",
"category": "0",
"entries": [
{
"code": "0",
"description": "Wave Spectra (1)",
"unit": "-",
"shortname": "WVSP1"
},
{
"code": "1",
"description": "Wave Spectra (2)",
"unit": "-",
"shortname": "WVSP2"
},
{
"code": "2",
"description": "Wave Spectra (3)",
"unit": "-",
"shortname": "WVSP3"
},
{
"code": "3",
"description": "Significant Height of Combined Wind Waves and Swell",
"unit": "m",
"shortname": "HTSGW"
},
{
"code": "4",
"description": "Direction of Wind Waves",
"unit": "degree true",
"shortname": "WVDIR"
},
{
"code": "5",
"description": "Significant Height of Wind Waves",
"unit": "m",
"shortname": "WVHGT"
},
{
"code": "6",
"description": "Mean Period of Wind Waves",
"unit": "s",
"shortname": "WVPER"
},
{
"code": "7",
"description": "Direction of Swell Waves",
"unit": "degree true",
"shortname": "SWDIR"
},
{
"code": "8",
"description": "Significant Height of Swell Waves",
"unit": "m",
"shortname": "SWELL"
},
{
"code": "9",
"description": "Mean Period of Swell Waves",
"unit": "s",
"shortname": "SWPER"
},
{
"code": "10",
"description": "Primary Wave Direction",
"unit": "degree true",
"shortname": "DIRPW"
},
{
"code": "11",
"description": "Primary Wave Mean Period",
"unit": "s",
"shortname": "PERPW"
},
{
"code": "12",
"description": "Secondary Wave Direction",
"unit": "degree true",
"shortname": "DIRSW"
},
{
"code": "13",
"description": "Secondary Wave Mean Period",
"unit": "s",
"shortname": "PERSW"
},
{
"code": "14",
"description": "Direction of Combined Wind Waves and Swell",
"unit": "degree true",
"shortname": "WWSDIR"
},
{
"code": "15",
"description": "Mean Period of Combined Wind Waves and Swell",
"unit": "s",
"shortname": "MWSPER"
},
{
"code": "16",
"description": "Coefficient of Drag With Waves",
"unit": "-",
"shortname": "CDWW"
},
{
"code": "17",
"description": "Friction Velocity",
"unit": "m s-1",
"shortname": "FRICVW"
},
{
"code": "18",
"description": "Wave Stress",
"unit": "N m-2",
"shortname": "WSTR"
},
{
"code": "19",
"description": "Normalised Waves Stress",
"unit": "-",
"shortname": "NWSTR"
},
{
"code": "20",
"description": "Mean Square Slope of Waves",
"unit": "-",
"shortname": "MSSW"
},
{
"code": "21",
"description": "U-component Surface Stokes Drift",
"unit": "m s-1",
"shortname": "USSD"
},
{
"code": "22",
"description": "V-component Surface Stokes Drift",
"unit": "m s-1",
"shortname": "VSSD"
},
{
"code": "23",
"description": "Period of Maximum Individual Wave Height",
"unit": "s",
"shortname": "PMAXWH"
},
{
"code": "24",
"description": "Maximum Individual Wave Height",
"unit": "m",
"shortname": "MAXWH"
},
{
"code": "25",
"description": "Inverse Mean Wave Frequency",
"unit": "s",
"shortname": "IMWF"
},
{
"code": "26",
"description": "Inverse Mean Frequency of The Wind Waves",
"unit": "s",
"shortname": "IMFWW"
},
{
"code": "27",
"description": "Inverse Mean Frequency of The Total Swell",
"unit": "s",
"shortname": "IMFTSW"
},
{
"code": "28",
"description": "Mean Zero-Crossing Wave Period",
"unit": "s",
"shortname": "MZWPER"
},
{
"code": "29",
"description": "Mean Zero-Crossing Period of The Wind Waves",
"unit": "s",
"shortname": "MZPWW"
},
{
"code": "30",
"description": "Mean Zero-Crossing Period of The Total Swell",
"unit": "s",
"shortname": "MZPTSW"
},
{
"code": "31",
"description": "Wave Directional Width",
"unit": "-",
"shortname": "WDIRW"
},
{
"code": "32",
"description": "Directional Width of The Wind Waves",
"unit": "-",
"shortname": "DIRWWW"
},
{
"code": "33",
"description": "Directional Width of The Total Swell",
"unit": "-",
"shortname": "DIRWTS"
},
{
"code": "34",
"description": "Peak Wave Period",
"unit": "s",
"shortname": "PWPER"
},
{
"code": "35",
"description": "Peak Period of The Wind Waves",
"unit": "s",
"shortname": "PPERWW"
},
{
"code": "36",
"description": "Peak Period of The Total Swell",
"unit": "s",
"shortname": "PPERTS"
},
{
"code": "37",
"description": "Altimeter Wave Height",
"unit": "m",
"shortname": "ALTWH"
},
{
"code": "38",
"description": "Altimeter Corrected Wave Height",
"unit": "m",
"shortname": "ALCWH"
},
{
"code": "39",
"description": "Altimeter Range Relative Correction",
"unit": "-",
"shortname": "ALRRC"
},
{
"code": "40",
"description": "10 Metre Neutral Wind Speed Over Waves",
"unit": "m s-1",
"shortname": "MNWSOW"
},
{
"code": "41",
"description": "10 Metre Wind Direction Over Waves",
"unit": "degree true",
"shortname": "MWDIRW"
},
{
"code": "42",
"description": "Wave Engery Spectrum",
"unit": "m-2 s rad-1",
"shortname": "WESP"
},
{
"code": "43",
"description": "Kurtosis of The Sea Surface Elevation Due to Waves",
"unit": "-",
"shortname": "KSSEW"
},
{
"code": "44",
"description": "Benjamin-Feir Index",
"unit": "-",
"shortname": "BENINX"
},
{
"code": "45",
"description": "Spectral Peakedness Factor",
"unit": "s-1",
"shortname": "SPFTR"
},
{
"code": "46",
"description": "Peak wave direction",
"unit": "Â°",
"shortname": "PWAVEDIR"
},
{
"code": "47",
"description": "Significant wave height of first swell partition",
"unit": "m",
"shortname": "SWHFSWEL"
},
{
"code": "48",
"description": "Significant wave height of second swell partition",
"unit": "m",
"shortname": "SWHSSWEL"
},
{
"code": "49",
"description": "Significant wave height of third swell partition",
"unit": "m",
"shortname": "SWHTSWEL"
},
{
"code": "50",
"description": "Mean wave period of first swell partition",
"unit": "s",
"shortname": "MWPFSWEL"
},
{
"code": "51",
"description": "Mean wave period of second swell partition",
"unit": "s",
"shortname": "MWPSSWEL"
},
{
"code": "52",
"description": "Mean wave period of third swell partition",
"unit": "s",
"shortname": "MWPTSWEL"
},
{
"code": "53",
"description": "Mean wave direction of first swell partition",
"unit": "Â°",
"shortname": "MWDFSWEL"
},
{
"code": "54",
"description": "Mean wave direction of second swell partition",
"unit": "Â°",
"shortname": "MWDSSWEL"
},
{
"code": "55",
"description": "Mean wave direction of third swell partition",
"unit": "Â°",
"shortname": "MWDTSWEL"
},
{
"code": "56",
"description": "Wave directional width of first swell partition",
"unit": "-",
"shortname": "WDWFSWEL"
},
{
"code": "57",
"description": "Wave directional width of second swell partition",
"unit": "-",
"shortname": "WDWSSWEL"
},
{
"code": "58",
"description": "Wave directional width of third swell partition",
"unit": "-",
"shortname": "WDWTSWEL"
},
{
"code": "59",
"description": "Wave frequency width of first swell partition",
"unit": "-",
"shortname": "WFWFSWEL"
},
{
"code": "60",
"description": "Wave frequency width of second swell partition",
"unit": "-",
"shortname": "WFWSSWEL"
},
{
"code": "61",
"description": "Wave frequency width of third swell partition",
"unit": "-",
"shortname": "WFWTSWEL"
},
{
"code": "62",
"description": "Wave frequency width",
"unit": "-",
"shortname": "WAVEFREW"
},
{
"code": "63",
"description": "Frequency width of wind waves",
"unit": "-",
"shortname": "FREWWW"
},
{
"code": "64",
"description": "Frequency width of total swell",
"unit": "-",
"shortname": "FREWTSW"
},
{
"code": "65",
"description": "Peak Wave Period of First Swell Partition",
"unit": "s",
"shortname": "PWPFSPAR"
},
{
"code": "66",
"description": "Peak Wave Period of Second Swell Partition",
"unit": "s",
"shortname": "PWPSSPAR"
},
{
"code": "67",
"description": "Peak Wave Period of Third Swell Partition",
"unit": "s",
"shortname": "PWPTSPAR"
},
{
"code": "68",
"description": "Peak Wave Direction of First Swell Partition",
"unit": "degree true",
"shortname": "PWDFSPAR"
},
{
"code": "69",
"description": "Peak Wave Direction of Second Swell Partition",
"unit": "degree true",
"shortname": "PWDSSPAR"
},
{
"code": "70",
"description": "Peak Wave Direction of Third Swell Partition",
"unit": "degree true",
"shortname": "PWDTSPAR"
},
{
"code": "71",
"description": "Peak Direction of Wind Waves",
"unit": "degree true",
"shortname": "PDWWAVE"
},
{
"code": "72",
"description": "Peak Direction of Total Swell",
"unit": "degree true",
"shortname": "PDTSWELL"
},
{
"code": "73",
"description": "Whitecap Fraction",
"unit": "fraction",
"shortname": "WCAPFRAC"
},
{
"code": "74",
"description": "Mean Direction of Total Swell",
"unit": "degree",
"shortname": "MDTSWEL"
},
{
"code": "75",
"description": "Mean Direction of Wind Waves",
"unit": "degree",
"shortname": "MDWWAVE"
},
{
"code": "76",
"description": "Charnock (see Note 2)",
"unit": "Numeric",
"shortname": "CHNCK"
},
{
"code": "77",
"description": "Wave Spectral Skewness",
"unit": "Numeric",
"shortname": "WAVESPSK"
},
{
"code": "78",
"description": "Wave Energy Flux Magnitude",
"unit": "W m-1",
"shortname": "WAVEFMAG"
},
{
"code": "79",
"description": "Wave Energy Flux Mean Direction",
"unit": "degree true",
"shortname": "WAVEFDIR"
},
{
"code": "80",
"description": "Raio of Wave Angular and Frequency width",
"unit": "Numeric",
"shortname": "RWAVEAFW"
},
{
"code": "81",
"description": "Free Convective Velocity over the Oceans",
"unit": "m s-1",
"shortname": "FCVOCEAN"
},
{
"code": "82",
"description": "Air Density over the Oceans",
"unit": "kg m-3",
"shortname": "AIRDENOC"
},
{
"code": "83",
"description": "Normalized Energy Flux into Waves (see Note 3)",
"unit": "Numeric",
"shortname": "NEFW"
},
{
"code": "84",
"description": "Normalized Stress into Ocean (see Note 3)",
"unit": "Numeric",
"shortname": "NSOCEAN"
},
{
"code": "85",
"description": "Normalized Energy Flux into Ocean (see Note 3)",
"unit": "Numeric",
"shortname": "NEFOCEAN"
},
{
"code": "86",
"description": "Surface Elevation Variance due to Waves (over all frequencies and directions)",
"unit": "m2 s rad-1",
"shortname": "SEVWAVE"
},
{
"code": "87",
"description": "Wave Induced Mean Se Level Correction",
"unit": "m",
"shortname": "WAVEMSLC"
},
{
"code": "88",
"description": "Spectral Width Index",
"unit": "Numeric",
"shortname": "SPECWI"
},
{
"code": "89",
"description": "Number of Events in Freak Wave Statistics",
"unit": "Numeric",
"shortname": "EFWS"
},
{
"code": "90",
"description": "U-Component of Surface Momentum Flux into Ocean",
"unit": "N m-2",
"shortname": "USMFO"
},
{
"code": "91",
"description": "U-Component of Surface Momentum Flux into Ocean",
"unit": "N m-2",
"shortname": "VSMFO"
},
{
"code": "92",
"description": "Wave Turbulent Energy Flux into Ocean",
"unit": "W m-2",
"shortname": "WAVETEFO"
},
{
"code": "93",
"description": "Envelop maximum individual wave height",
"unit": "m",
"shortname": "EMIWAVE"
},
{
"code": "94",
"description": "Time domain maximum individual crest height",
"unit": "m",
"shortname": "TDMCREST"
},
{
"code": "95",
"description": "Time domain maximum individual wave height",
"unit": "m",
"shortname": "TDMWAVE"
},
{
"code": "96",
"description": "Space time maximum individual crest height",
"unit": "m",
"shortname": "STMCREST"
},
{
"code": "97",
"description": "Space time maximum individual wave height",
"unit": "m",
"shortname": "STMWAVE"
},
{
"code": "98-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "192",
"description": "Wave Steepness",
"unit": "proportion",
"shortname": "WSTP"
},
{
"code": "193",
"description": "Wave Length",
"unit": "",
"shortname": "WLENG"
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
},
{
"discipline": "10",
"category": "1",
"entries": [
{
"code": "0",
"description": "Current Direction",
"unit": "degree True",
"shortname": "DIRC"
},
{
"code": "1",
"description": "Current Speed",
"unit": "m s-1",
"shortname": "SPC"
},
{
"code": "2",
"description": "U-Component of Current",
"unit": "m s-1",
"shortname": "UOGRD"
},
{
"code": "3",
"description": "V-Component of Current",
"unit": "m s-1",
"shortname": "VOGRD"
},
{
"code": "4",
"description": "Rip Current Occurrence Probability",
"unit": "%",
"shortname": "RIPCOP"
},
{
"code": "5",
"description": "Eastward Current",
"unit": "m s-1",
"shortname": "EASTCUR"
},
{
"code": "6",
"description": "Northward Current",
"unit": "m s-1",
"shortname": "NRTHCUR"
},
{
"code": "7-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "192",
"description": "Ocean Mixed Layer U Velocity",
"unit": "m s-1",
"shortname": "OMLU"
},
{
"code": "193",
"description": "Ocean Mixed Layer V Velocity",
"unit": "m s-1",
"shortname": "OMLV"
},
{
"code": "194",
"description": "Barotropic U velocity",
"unit": "m s-1",
"shortname": "UBARO"
},
{
"code": "195",
"description": "Barotropic V velocity",
"unit": "m s-1",
"shortname": "VBARO"
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
},
{
"discipline": "10",
"category": "2",
"entries": [
{
"code": "0",
"description": "Ice Cover",
"unit": "Proportion",
"shortname": "ICEC"
},
{
"code": "1",
"description": "Ice Thickness",
"unit": "m",
"shortname": "ICETK"
},
{
"code": "2",
"description": "Direction of Ice Drift",
"unit": "degree True",
"shortname": "DICED"
},
{
"code": "3",
"description": "Speed of Ice Drift",
"unit": "m s-1",
"shortname": "SICED"
},
{
"code": "4",
"description": "U-Component of Ice Drift",
"unit": "m s-1",
"shortname": "UICE"
},
{
"code": "5",
"description": "V-Component of Ice Drift",
"unit": "m s-1",
"shortname": "VICE"
},
{
"code": "6",
"description": "Ice Growth Rate",
"unit": "m s-1",
"shortname": "ICEG"
},
{
"code": "7",
"description": "Ice Divergence",
"unit": "s-1",
"shortname": "ICED"
},
{
"code": "8",
"description": "Ice Temperature",
"unit": "K",
"shortname": "ICETMP"
},
{
"code": "9",
"description": "Module of Ice Internal Pressure",
"unit": "Pa m",
"shortname": "ICEPRS"
},
{
"code": "10",
"description": "Zonal Vector Component of Vertically Integrated Ice Internal Pressure",
"unit": "Pa m",
"shortname": "ZVCICEP"
},
{
"code": "11",
"description": "Meridional Vector Component of Vertically Integrated Ice Internal Pressure",
"unit": "Pa m",
"shortname": "MVCICEP"
},
{
"code": "12",
"description": "Compressive Ice Strength",
"unit": "N m-1",
"shortname": "CICES"
},
{
"code": "13",
"description": "Snow Temperature (over sea ice)",
"unit": "K",
"shortname": "SNOWTSI"
},
{
"code": "14",
"description": "Albedo",
"unit": "Numeric",
"shortname": "ALBDOICE"
},
{
"code": "15",
"description": "Sea Ice Volume per Unit Area",
"unit": "m3m-2",
"shortname": "SICEVOL"
},
{
"code": "16",
"description": "Snow Volume Over Sea Ice per Unit Area",
"unit": "m3m-2",
"shortname": "SNVOLSI"
},
{
"code": "17",
"description": "Sea Ice Heat Content",
"unit": "J m-2",
"shortname": "SICEHC"
},
{
"code": "18",
"description": "Snow over Sea Ice Heat Content",
"unit": "J m-2",
"shortname": "SNCEHC"
},
{
"code": "19",
"description": "Ice Freeboard Thickness",
"unit": "m",
"shortname": "ICEFTHCK"
},
{
"code": "20",
"description": "Ice Melt Pond Fraction",
"unit": "fraction",
"shortname": "ICEMPF"
},
{
"code": "21",
"description": "Ice Melt Pond Depth",
"unit": "m",
"shortname": "ICEMPD"
},
{
"code": "22",
"description": "Ice Melt Pond Volume per Unit Area",
"unit": "m3m-2",
"shortname": "ICEMPV"
},
{
"code": "23",
"description": "Sea Ice Fraction Tendency due to Parameterization",
"unit": "s-1",
"shortname": "SIFTP"
},
{
"code": "24",
"description": "x-component of ice drift",
"unit": "m s-1",
"shortname": "XICE"
},
{
"code": "25",
"description": "y-component of ice drift",
"unit": "m s-1",
"shortname": "YICE"
},
{
"code": "26",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "27",
"description": "Freezing/melting potential (Tentatively accepted)",
"unit": "W m-2",
"shortname": "FRZMLTPOT"
},
{
"code": "28",
"description": "Melt onset date (Tentatively accepted)",
"unit": "Numeric",
"shortname": "MLTDATE"
},
{
"code": "29",
"description": "Freeze onset date (Tentatively accepted)",
"unit": "Numeric",
"shortname": "FRZDATE"
},
{
"code": "30-191",
"description": "Reserved",
"unit": "",
"shortname": ""
},
{
"code": "192-254",
"description": "Reserved for Local Use",
"unit": "",
"shortname": ""
},
{
"code": "255",
"description": "Missing",
"unit": "",
"shortname": ""
}
]
}
]
export { GRIB2_SECTIONS, GRIB2_CODETABLES }
