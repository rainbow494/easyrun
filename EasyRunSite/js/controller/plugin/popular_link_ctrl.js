"use strict";

var popularLinkPluginControllers = angular.module('popularLinkPluginControllers', []);

popularLinkPluginControllers.controller('popularProductsController', ['$scope', 'dbAdaptor',
        function ($scope, dbAdaptor) {
            $scope.popularLink = dbAdaptor.getPopularProducts();
            $scope.popularLink.type = "product";
        }
    ]
);

popularLinkPluginControllers.controller('popularCategoriesController', ['$scope', 'dbAdaptor',
        function ($scope, dbAdaptor) {
            $scope.popularLink = dbAdaptor.getPopularCategories();
            $scope.popularLink.type = "category";
        }
    ]
);
