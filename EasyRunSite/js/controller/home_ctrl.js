'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homeHotGoodsController', ['$scope', 'getHotGoods',
        function ($scope, getHotGoods) {
            $scope.hotGoods = getHotGoods;
        }
    ]
);

homeControllers.controller('homeHotCategoriesController', ['$scope', 'getHotCategories',
        function ($scope, getHotCategories) {
            $scope.hotSuggestGallery = getHotCategories;
        }
    ]
);