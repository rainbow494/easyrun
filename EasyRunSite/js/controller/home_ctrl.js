'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homePopularProductsController', ['$scope', 'dbAdaptor',
        function ($scope, dbAdaptor) {
            var promise = dbAdaptor.getHomePageProducts();
            promise.then(
                function (data) {
                    $scope.popularProducts = data;
                }
            )
        }
    ]
);
