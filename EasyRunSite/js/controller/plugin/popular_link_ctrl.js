"use strict";

var popularLinkPluginControllers = angular.module('popularLinkPluginControllers', []);

popularLinkPluginControllers.controller('popularProductsController', ['$scope', 'getPopularProducts',
        function ($scope, getPopularProducts) {
            $scope.popularSuggestGallery = getPopularProducts;
            $scope.popularSuggestGallery.type = "product";
        }
    ]
);

popularLinkPluginControllers.controller('popularCategoriesController', ['$scope', 'getPopularCategories',
        function ($scope, getPopularCategories) {
            $scope.popularSuggestGallery = getPopularCategories;
            $scope.popularSuggestGallery.type = "category";
        }
    ]
);