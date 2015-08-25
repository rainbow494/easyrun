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

            $scope.wallDecals = getWallDecalsProducts;
            $scope.wallDecals.type = "product";

            $scope.wallPapers = getWallPaperProducts;
            $scope.wallPapers.type = "product";

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


                $scope.wallDecals = getWallDecalsProducts.searchByApplication(applicationId);
                $scope.wallDecals.option = getWallDecalsProducts.option;
                $scope.wallDecals.getUrl = getWallDecalsProducts.getUrl;
                $scope.wallDecals.getImageUrl = getWallDecalsProducts.getImageUrl;
                $scope.wallDecals.type = "product";

                $scope.wallPapers = getWallPaperProducts.searchByApplication(applicationId);
                $scope.wallPapers.option = getWallPaperProducts.option;
                $scope.wallPapers.getUrl = getWallPaperProducts.getUrl;
                $scope.wallPapers.getImageUrl = getWallPaperProducts.getImageUrl;
                $scope.wallPapers.type = "product";
            }

            $scope.getCategoryList = getCategoryList;
            $scope.getApplicationList = getApplicationList;
        }
    ]
);  