'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homePopularProductsController', ['$scope', 'getPopularProducts',
        function ($scope, getPopularProducts) {
            $scope.popularProducts = getPopularProducts;
        }
    ]
);