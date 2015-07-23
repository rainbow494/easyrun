'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);

productControllers.controller('productCurrentGoodController', ['$scope', '$routeParams','getAllGoods',
        function ($scope, $routeParams, getAllGoods) {
            // Get good logic need move to services
            var currentGood = {};
            for (i = 0; i < getAllGoods.length; i++)
            {
                if(getAllGoods[i].productId === $routeParams.productId)
                {
                    currentGood = getAllGoods[i];
                    break;
                }
            }
            $scope.currentGood = currentGood;
        }
    ]
);

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