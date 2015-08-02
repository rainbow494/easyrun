"use strict";

var popularLinkPluginControllers = angular.module('popularLinkPluginControllers', []);

popularLinkPluginControllers.controller('popularProductsController', ['$scope', 'getPopularProducts',
        function ($scope, getPopularProducts) {
            $scope.popularLink = getPopularProducts;
            $scope.popularLink.type = "product";
        }
    ]
);

popularLinkPluginControllers.controller('popularCategoriesController', ['$scope', 'getPopularCategories',
        function ($scope, getPopularCategories) {
            $scope.popularLink = getPopularCategories;
            $scope.popularLink.type = "category";
        }
    ]
);