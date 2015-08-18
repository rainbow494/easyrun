'use strict';

/* Controllers */

var searchResultController = angular.module('searchResultController', []);

searchResultController.controller('product_search_result_control', ['$scope', '$routeParams', 'getWallHangingsProducts', 'getWallDecalsProducts', 'getWallPaperProducts',
        function ($scope, $routeParams, getWallHangingsProducts, getWallDecalsProducts, getWallPaperProducts) {
            if ($routeParams.categoryId == 1) {
                $scope.category = "Wall Hangings";
                $scope.products = getWallHangingsProducts;
            } else if ($routeParams.categoryId == 2) {
                $scope.category = "Wall Decals";
                $scope.products = getWallDecalsProducts;
            } else {
                $scope.category = "Wall Papers";
                $scope.products = getWallPaperProducts;
            }

            $scope.products.type = "product";
        }
    ]
);

