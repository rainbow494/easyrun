'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homePopularProductsController', ['$scope', 'getHomePageProducts',
        function ($scope, getHomePageProducts) {
            $scope.popularProducts = getHomePageProducts;
        }
    ]
);
