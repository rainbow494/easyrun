'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homePopularProductsController', ['$scope', 'dbAdaptor',
        function ($scope, dbAdaptor) {
            var promise = dbAdaptor.getHomePageProducts();
            promise.then(
                function (data) {
                    var popularProducts = data;

                    // -----------------------------
                    popularProducts.defaultOption = {
                        "urlBase" : "#/product"
                    }

                    popularProducts.option = {};
                    $.extend(true, popularProducts.option, ez.data.defaultOption, popularProducts.defaultOption);

                    popularProducts.getUrl = ez.helper.getUrl(popularProducts.option.urlBase);
                    popularProducts.getImageUrl = ez.helper.getImageUrl(popularProducts.option.imageUrlBase);
                    //------------------------------

                    $scope.popularProducts = popularProducts;
                }
            )
        }
    ]
);
