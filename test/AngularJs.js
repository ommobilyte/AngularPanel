var app = angular.module('treeGridTest', []);
app.controller('treeGridController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.data1 = [];
    $scope.data2 = [];

    $scope.countries = [{
        "DemographicId": 1,
        "ParentId": null,
        "Name": "United States of America",
        "Description": "United States of America",
        "Area": 9826675,
        "Population": 318212000,
        "TimeZone": "UTC -5 to -10"
    }, {
        "DemographicId": 2,
        "ParentId": 1,
        "Name": "California",
        "Description": "The Tech State",
        "Area": 423970,
        "Population": 38340000,
        "TimeZone": "Pacific Time"
    }, {
        "DemographicId": 3,
        "ParentId": 2,
        "Name": "San Francisco",
        "Description": "The happening city",
        "Area": 231,
        "Population": 837442,
        "TimeZone": "PST"
    }, {
        "DemographicId": 4,
        "ParentId": 2,
        "Name": "Los Angeles",
        "Description": "Disco city",
        "Area": 503,
        "Population": 3904657,
        "TimeZone": "PST"
    }, {
        "DemographicId": 5,
        "ParentId": 1,
        "Name": "Illinois",
        "Description": "Not so cool",
        "Area": 57914,
        "Population": 12882135,
        "TimeZone": "Central Time Zone"
    }, {
        "DemographicId": 6,
        "ParentId": 5,
        "Name": "Chicago",
        "Description": "Financial City",
        "Area": 234,
        "Population": 2695598,
        "TimeZone": "CST"
    }, {
        "DemographicId": 7,
        "ParentId": 1,
        "Name": "Texas",
        "Description": "Rances, Oil & Gas",
        "Area": 268581,
        "Population": 26448193,
        "TimeZone": "Mountain"
    }, {
        "DemographicId": 8,
        "ParentId": 1,
        "Name": "New York",
        "Description": "The largest diverse city",
        "Area": 141300,
        "Population": 19651127,
        "TimeZone": "Eastern Time Zone"
    }, {
        "DemographicId": 14,
        "ParentId": 8,
        "Name": "Manhattan",
        "Description": "Time Square is the place",
        "Area": 269.403,
        "Population": 0,
        "TimeZone": "EST"
    }, {
        "DemographicId": 15,
        "ParentId": 14,
        "Name": "Manhattan City",
        "Description": "Manhattan island",
        "Area": 33.77,
        "Population": 0,
        "TimeZone": "EST"
    }, {
        "DemographicId": 16,
        "ParentId": 14,
        "Name": "Time Square",
        "Description": "Time Square for new year",
        "Area": 269.40,
        "Population": 0,
        "TimeZone": "EST"
    }, {
        "DemographicId": 17,
        "ParentId": 8,
        "Name": "Niagra water fall",
        "Description": "Close to Canada",
        "Area": 65.7,
        "Population": 0,
        "TimeZone": "EST"
    }, {
        "DemographicId": 18,
        "ParentId": 8,
        "Name": "Long Island",
        "Description": "Harbour to Atlantic",
        "Area": 362.9,
        "Population": 0,
        "TimeZone": "EST"
    }, {
        "DemographicId": 51,
        "ParentId": 1,
        "Name": "All_Other",
        "Description": "All_Other demographics",
        "Area": 0,
        "Population": 0,
        "TimeZone": 0
    }, {
        "DemographicId": 201,
        "ParentId": null,
        "Name": "India",
        "Description": "Hydrabad tech city",
        "Area": 9826675,
        "Population": 318212000,
        "TimeZone": "IST"
    }, {
        "DemographicId": 301,
        "ParentId": null,
        "Name": "Bangladesh",
        "Description": "Country of love",
        "Area": 9826675,
        "Population": 318212000,
        "TimeZone": "BST"
    }
        //India 201
        , {
        "DemographicId": 9,
        "ParentId": 201,
        "Name": "Punjab",
        "Description": "All_Other demographics",
        "Area": 0,
        "Population": 0,
        "TimeZone": 0
    }, {
        "DemographicId": 10,
        "ParentId": 201,
        "Name": "Chandigarh",
        "Description": "Hydrabad tech city",
        "Area": 9826675,
        "Population": 318212000,
        "TimeZone": "IST"
    }, {
        "DemographicId": 11,
        "ParentId": 201,
        "Name": "Harayana",
        "Description": "Country of love",
        "Area": 9826675,
        "Population": 318212000,
        "TimeZone": "BST"
    }
        //Punjab 9
        , {
        "DemographicId": 19,
        "ParentId": 9,
        "Name": "Mohali",
    },
    {
        "DemographicId": 20,
        "ParentId": 9,
        "Name": "Nawanshahr",
    }, {
        "DemographicId": 21,
        "ParentId": 9,
        "Name": "Jalandhar",
    }

        //Harayan 11
        , {
        "DemographicId": 19,
        "ParentId": 11,
        "Name": "Hisaar",
    },
    {
        "DemographicId": 20,
        "ParentId": 11,
        "Name": "Kurukushetar",
    }, {
        "DemographicId": 21,
        "ParentId": 11,
        "Name": "Noida",
    }

        //Chandigarh 10
        , {
        "DemographicId": 22,
        "ParentId": 10,
        "Name": "Sector 8",
    },
    {
        "DemographicId": 23,
        "ParentId": 10,
        "Name": "Sector 10",
    }, {
        "DemographicId": 24,
        "ParentId": 10,
        "Name": "Sector 23",
    }

        //Bangladesh 301
        , {
        "DemographicId": 25,
        "ParentId": 301,
        "Name": "Chittagong",

    }, {
        "DemographicId": 26,
        "ParentId": 301,
        "Name": "Dhaka",
    }, {
        "DemographicId": 27,
        "ParentId": 301,
        "Name": "Barisal",

    }


        //Bangladesh Cities 301
        , {
        "DemographicId": 28,
        "ParentId": 25,
        "Name": "Bhau",

    }, {
        "DemographicId": 29,
        "ParentId": 26,
        "Name": "Sanum",
    }, {
        "DemographicId": 30,
        "ParentId": 27,
        "Name": "Lavral",

    }

    ];


    $scope.getStates= function (Cid) {
        $scope.cities = [];
        $scope.states = $filter('filter')($scope.countries, { "ParentId": Cid }, true);
    }


    $scope.getCities = function (Sid) {
        $scope.cities = $filter('filter')($scope.countries, { "ParentId": Sid }, true);
    }
}]);


