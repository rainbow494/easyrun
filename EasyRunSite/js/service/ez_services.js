"use strict";

var ezServices = angular.module("ezServices", []);

ezServices.factory("getGoodById", [
		function (productId) {

            var _allGoods = ez.data.goods;

		    var getGoodById = function (productId) {// Get good logic need move to services
		        var good = {};
		        if (!productId) {
		            return currentGood;
		        }

		        for (i = 0; i < _allGoods.length; i++) {
		            if (_allGoods[i].productId === productId) {
		                good = _allGoods[i];
		                break;
		            }
		        }
		        return good;
		    }

		    return getGoodById;
		}
	]);

ezServices.factory("getAllGoods", [
		function () {
		    return ez.data.goods;
		}
	]);

ezServices.factory("getHotGoods", [
		function () {
		    return ez.data.hotGoods;
		}
	]);

ezServices.factory("getHotCategories", [
		function () {
		    return ez.data.hotCategories;
		}
	]);

/* Test Data Start */

/*example for getData from web api*/
//ezControllers.controller("homeControl", ["$scope", "$http",
//  function ($scope, $http) {
//      // $http({ method: "GET", url: "dataSource/hot_commodiate.json" }).success(function (data) {
//      $http.get("dataSource/hot_commodiate.json").success(function (data) {
//          $scope.carousels = data;
//      }).error(function (data) {
//          console.log("error from ezControllers http get" + data);
//      });
//  } ]);
