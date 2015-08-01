'use strict';

/* Controllers */

var searchFilterController = angular.module('searchFilterController', []);

/*
searchFilterController.controller('product_search_filter_control', ['$scope', 'getDecalsProducts',
        function ($scope, getDecalsProducts) {
            $scope.Decals = getDecalsProducts.query();
        }
    ]
);
*/

searchFilterController.controller('product_search_filter_control', ['$scope', 'getDecalsProducts',
        function ($scope, getDecalsProducts) {
            $scope.Decals = getDecalsProducts;
        }
    ]
);