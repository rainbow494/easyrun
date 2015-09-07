"use strict";

var popularLinkPluginControllers = angular.module('popularLinkPluginControllers', []);

popularLinkPluginControllers.controller('popularProductsController', ['$scope', '$routeParams', 'dbAdaptor',
        function ($scope, $routeParams, dbAdaptor) {

            var promie = dbAdaptor.getPopularProducts($routeParams.productId);
            promie.then(
                function (data) {
                var popularLink = data;

                // -----------------------------
                popularLink.defaultOption = {
                    "urlBase" : "#/product"
                }

                popularLink.option = {};
                $.extend(true, popularLink.option, ez.data.defaultOption, popularLink.defaultOption);

                popularLink.getUrl = ez.helper.getUrl(popularLink.option.urlBase);
                popularLink.getImageUrl = ez.helper.getThumbnailUrl(popularLink.option.imageUrlBase);
                // -----------------------------
                $scope.popularLink = popularLink;
                $scope.popularLink.type = "product";
            })
        }
    ]);

popularLinkPluginControllers.controller('popularCategoriesController', ['$scope', 'dbAdaptor',
        function ($scope, dbAdaptor) {

            var promise = dbAdaptor.getPopularCategories();
            promise.then(
                function (data) {
                var popularCategories = data;

                // -----------------------------
                popularCategories.defaultOption = {
                    "urlBase" : "#/result"
                }

                popularCategories.option = {};
                $.extend(true, popularCategories.option, ez.data.defaultOption, popularCategories.defaultOption);

                popularCategories.getUrl = ez.helper.getCategoryUrl(popularCategories.option.urlBase);
                popularCategories.getImageUrl = ez.helper.getThumbnailUrl(popularCategories.option.imageUrlBase);

                // -----------------------------

                $scope.popularLink = popularCategories;
                $scope.popularLink.type = "category";
            })
        }
    ]);
