"use strict";

var popularLinkPluginControllers = angular.module('popularLinkPluginControllers', []);

popularLinkPluginControllers.controller('popularGoodsController', ['$scope', 'getHotGoods',
        function ($scope, getHotGoods) {
            $scope.hotSuggestGallery = getHotGoods;
            $scope.hotSuggestGallery.type = "good";
        }
    ]
);

popularLinkPluginControllers.controller('popularCategoriesController', ['$scope', 'getHotCategories',
        function ($scope, getHotCategories) {
            $scope.hotSuggestGallery = getHotCategories;
            $scope.hotSuggestGallery.type = "category";
        }
    ]
);