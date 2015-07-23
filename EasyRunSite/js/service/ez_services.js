'use strict';

/* Controllers */

var ezServices = angular.module('ezServices', []);

ezServices.factory('getHotGoods', [
		function () {
			return ez.data.hotgoods;
		}
	]);

ezServices.factory('getHotCategorys', [
		function () {
			return ez.data.hotgoods;
		}
	]);

/*example for getData from web api*/
//ezControllers.controller('homeControl', ['$scope', '$http',
//  function ($scope, $http) {
//      // $http({ method: 'GET', url: 'dataSource/hot_commodiate.json' }).success(function (data) {
//      $http.get('dataSource/hot_commodiate.json').success(function (data) {
//          $scope.carousels = data;
//      }).error(function (data) {
//          console.log('error from ezControllers http get' + data);
//      });
//  } ]);


/* Test Data Start */

ez = window.createNamespace("ez");
ez.data = window.createNamespace("ez.data");
ez.data.defaultOption = {
	"urlbase" : "#/home",
	"imageurlbase" : "./resource/image/"
}

var hotGoodsData = [{
		"productId" : 1,
		"url" : "#/product",
		"imageUrl" : "categroy/wall_murals/sku_7/1.jpg",
		"name" : "name displayed when hover",
	}, {
		"productId" : 2,
		"url" : "#/product",
		"imageUrl" : "categroy/wall_murals/sku_7/2.jpg",
		"name" : "name displayed when hover",
	}, {
		"productId" : 3,
		"url" : "#/product",
		"imageUrl" : "categroy/wall_murals/sku_8/1.jpg",
		"name" : "name displayed when hover",
	}
]
ez.data.hotgoods = hotGoodsData;
ez.data.hotgoods.defaultOption = {
	"urlbase" : "#/product/"
}

ez.data.hotgoods.defaultOption = $.extend(ez.data.defaultOption, ez.data.hotgoods.defaultOption);
/* Test Data End */