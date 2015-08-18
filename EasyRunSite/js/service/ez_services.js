"use strict";

var ezServices = angular.module("ezServices", []);

ezServices.factory("getProductById", ["$http",
        function (productId, $http) {

            //http://stackoverflow.com/questions/16930473/angularjs-factory-http-get-json-file
            //$http({method: 'GET', url: '/someUrl'}).success(function(data, status, headers, config) {
            //var _allProducts = ez.data.products;
            var _allProducts;
            $http.get("data_source/product_data.json").success(function (data) {
                _allProducts = data || {};
            }).error(function (data) {
                console.log("error from ezControllers http get" + data);
            });

            var getProductById = function (productId) { // Get product logic need move to services
                var product = {};
                if (!productId) {
                    return currentProduct;
                }

                for (i = 0; i < _allProducts.length; i++) {
                    if (_allProducts[i].productId === productId) {
                        product = _allProducts[i];
                        break;
                    }
                }
                return product;
            }

            return getProductById;
        }
    ]);

// ezServices.factory("getAllProducts", [
//         function () {
//             return ez.data.products;
//         }
//     ]);

ezServices.factory("getAllProducts", ["$http",
 function ($http) {
     var result;
     // $http({ method: "GET", url: "dataSource/popular_commodiate.json" }).success(function (data) {
     $http.get("data_source/product_data.json").success(function (data) {
         result = data || {};
     }).error(function (data) {
         console.log("error from ezControllers http get" + data);
     });

     return result;
 } ]);

ezServices.factory("getPopularProducts", [
        function () {
            var allProducts = ez.data.products;
            var popularProducts = [];
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].popular) {
                    popularProducts.push(allProducts[i]);
                }
            }

            popularProducts.defaultOption = {
                "urlBase" : "#/product"
            }

            popularProducts.option = {};
            $.extend(true, popularProducts.option, ez.data.defaultOption, popularProducts.defaultOption);

            var getUrl = function (data) {
                return popularProducts.option.urlBase + "/" + data.productId;
            }
            var getImageUrl = function (data) {
                return popularProducts.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1.jpg";
            }

            popularProducts.getUrl = getUrl;
            popularProducts.getImageUrl = getImageUrl;

            return (function () {
                return popularProducts;
            })();
        }
    ]);

ezServices.factory("getPopularCategories", [
        function () {

			var allProducts = ez.data.products;
            var popularCategories = [];
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].popular) {
                    popularCategories.push(allProducts[i]);
                }
            }

            popularCategories.defaultOption = {
                "urlBase" : "#/category"
            }

            popularCategories.option = {};
            $.extend(true, popularCategories.option, ez.data.defaultOption, popularCategories.defaultOption);

            var getUrl = function (data) {
                return popularCategories.option.urlBase + "/" + data.productId;
            }
            var getImageUrl = function (data) {
                return popularCategories.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1.jpg";
            }

            popularCategories.getUrl = getUrl;
            popularCategories.getImageUrl = getImageUrl;

            return (function () {
                return popularCategories;
            })();


            // /* popularCategories */
            // var popularCategoriesData = [productData[0], productData[1], productData[2]]
            // ez.data.popularCategories = popularCategoriesData;

            // ez.data.popularCategories.defaultOption = {
                // "urlBase" : "#/category"
            // }
            // ez.data.popularCategories.option = {};
            // $.extend(true, ez.data.popularCategories.option, ez.data.defaultOption, ez.data.popularCategories.defaultOption);

            // ez.data.popularCategories.getUrl = function (data) {
                // //return ez.data.popularCategories.option.urlBase + "/" + data.categoryId;
                // return ez.data.popularCategories.option.urlBase;
            // }
            // ez.data.popularCategories.getImageUrl = function (data) {
                // return ez.data.popularCategories.option.imageUrlBase + "/" + data.imageUrl + "/" + "1.jpg";
            // }
        }
    ]);

/* Test Data Start */

/*example for getData from web api*/
// ezControllers.controller("homeControl", ["$scope", "$http",
//  function ($scope, $http) {
//      // $http({ method: "GET", url: "dataSource/popular_commodiate.json" }).success(function (data) {
//      $http.get("dataSource/popular_commodiate.json").success(function (data) {
//          $scope.carousels = data;
//      }).error(function (data) {
//          console.log("error from ezControllers http get" + data);
//      });
//  } ]);
