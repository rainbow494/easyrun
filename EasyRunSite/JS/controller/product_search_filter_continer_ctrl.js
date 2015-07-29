'use strict';

/* Controllers */

var searchFilterController = angular.module('searchFilterController', []);

/*
searchFilterController.controller('product_search_filter_control', ['$scope', 'getDecalsGoods',
        function ($scope, getDecalsGoods) {
            $scope.Decals = getDecalsGoods.query();
        }
    ]
);
*/

searchFilterController.controller('product_search_filter_control', ['$scope', 'get',
        function ($scope, getDecalsGoods) {
            $scope.Decals = getDecalsGoods;
        }
    ]
);