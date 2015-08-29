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

searchFilterController.controller('product_search_filter_control', ['$scope', 'getWallHangingsProducts', 'getWallDecalsProducts', 'getWallPaperProducts', '$location', '$anchorScroll', 'getCategoryList', 'getApplicationList',
        function ($scope, getWallHangingsProducts, getWallDecalsProducts, getWallPaperProducts, $location, $anchorScroll, getCategoryList, getApplicationList) {
            $scope.wallHangings = getWallHangingsProducts;
            $scope.wallHangings.type = "product";
            $scope.displayWallHangings = true;

            $scope.wallDecals = getWallDecalsProducts;
            $scope.wallDecals.type = "product";
            $scope.displayWallDecals = true;

            $scope.wallPapers = getWallPaperProducts;
            $scope.wallPapers.type = "product";
            $scope.displayWallPapers = true;

            $scope.goto = function (id) {
                $location.hash(id);
                $anchorScroll();
            }

            $scope.filterByApplication = function (applicationId) {
                $scope.wallHangings = getWallHangingsProducts.searchByApplication(applicationId);
                $scope.wallHangings.option = getWallHangingsProducts.option;
                $scope.wallHangings.getUrl = getWallHangingsProducts.getUrl;
                $scope.wallHangings.getImageUrl = getWallHangingsProducts.getImageUrl;
                $scope.wallHangings.type = "product";
                if ($scope.wallHangings.length == 0) {
                    $scope.displayWallHangings = false;
                }
                else {
                    $scope.displayWallHangings = true;
                }

                $scope.wallDecals = getWallDecalsProducts.searchByApplication(applicationId);
                $scope.wallDecals.option = getWallDecalsProducts.option;
                $scope.wallDecals.getUrl = getWallDecalsProducts.getUrl;
                $scope.wallDecals.getImageUrl = getWallDecalsProducts.getImageUrl;
                $scope.wallDecals.type = "product";
                if ($scope.wallDecals.length == 0) {
                    $scope.displayWallDecals = false;
                }
                else {
                    $scope.displayWallDecals = true;
                }

                $scope.wallPapers = getWallPaperProducts.searchByApplication(applicationId);
                $scope.wallPapers.option = getWallPaperProducts.option;
                $scope.wallPapers.getUrl = getWallPaperProducts.getUrl;
                $scope.wallPapers.getImageUrl = getWallPaperProducts.getImageUrl;
                $scope.wallPapers.type = "product";
                if ($scope.wallPapers.length == 0) {
                    $scope.displayWallPapers = false;
                }
                else {
                    $scope.displayWallPapers = true;
                }
            }

            $scope.getCategoryList = getCategoryList;
            $scope.getApplicationList = getApplicationList;
        }
    ]
);  