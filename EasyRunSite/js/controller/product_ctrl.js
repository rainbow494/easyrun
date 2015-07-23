'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);

productControllers.controller('productHotGoodsController', ['$scope', 'getHotGoods',
        function ($scope, getHotGoods) {
            $scope.hotSuggestGallery = getHotGoods;
        }
    ]
);

productControllers.controller('productHotCategoriesController', ['$scope', 'getHotCategories',
        function ($scope, getHotCategories) {
            $scope.hotSuggestGallery = getHotCategories;
        }
    ]
);