"use strict";

var ezServices = angular.module("ezServices", []);

ezServices.factory("getProductById", [
		function (productId) {

            var _allProducts = ez.data.products;

		    var getProductById = function (productId) {// Get product logic need move to services
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

ezServices.factory("getAllProducts", [
		function () {
		    return ez.data.products;
		}
	]);

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
                return popularProducts.option.imageUrlBase + "/" + data.imageUrl + "/" + "1.jpg";
            }

            popularProducts.getUrl = getUrl;
            popularProducts.getImageUrl =getImageUrl;

            return (function () {
                return popularProducts;
            })();
        }
    ]);

ezServices.factory("getPopularCategories", [
		function () {
		    return ez.data.popularCategories;
		}
	]);

/* Test Data Start */

/*example for getData from web api*/
//ezControllers.controller("homeControl", ["$scope", "$http",
//  function ($scope, $http) {
//      // $http({ method: "GET", url: "dataSource/popular_commodiate.json" }).success(function (data) {
//      $http.get("dataSource/popular_commodiate.json").success(function (data) {
//          $scope.carousels = data;
//      }).error(function (data) {
//          console.log("error from ezControllers http get" + data);
//      });
//  } ]);
