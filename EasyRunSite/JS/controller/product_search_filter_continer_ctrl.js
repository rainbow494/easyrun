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

searchFilterController.controller('product_search_filter_control', ['$scope', 'getWallHangingsProducts','getWallDecalsProducts','getWallPaperProducts','$location','$anchorScroll',
        function ($scope, getWallHangingsProducts, getWallDecalsProducts, getWallPaperProducts,$location,$anchorScroll) {
            $scope.wallHangings = getWallHangingsProducts;
            $scope.wallHangings.type = "product";

            $scope.wallDecals = getWallDecalsProducts;
            $scope.wallDecals.type = "product";

            $scope.wallPapers = getWallPaperProducts;
            $scope.wallPapers.type = "product";

            $scope.goto = function (id) {
                    $location.hash(id);
                    $anchorScroll();
                }

             $scope.gotoDecals = function () {
                    $location.hash('decals');
                    $anchorScroll();
                }
        }
    ]
);