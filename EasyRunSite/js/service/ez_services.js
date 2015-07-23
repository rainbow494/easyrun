'use strict';

/* Controllers */

var ezServices = angular.module('ezServices', []);

ezServices.factory('getHotGoods', [
		function () {
			return ez.data.hotGoods;
		}
	]);

ezServices.factory('getHotCategories', [
		function () {
			return ez.data.hotCategories;
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

/* commonData*/
ez = window.createNamespace("ez");
ez.data = window.createNamespace("ez.data");
ez.data.defaultOption = {
	"urlBase" : "#/home",
	"imageUrlBase" : "./resource/image/"
}

/* hotGoods */
var hotGoodsData = [{
		"productId" : 71,
		"categoryId" : 7,
		"imageUrl" : "category/wall_murals/sku_7/1.jpg",
		"name" : "name displayed when hover",
	}, {
		"productId" : 72,
		"categoryId" : 7,
		"imageUrl" : "category/wall_murals/sku_7/2.jpg",
		"name" : "name displayed when hover",
	}, {
		"productId" : 81,
		"categoryId" : 8,
		"imageUrl" : "category/wall_murals/sku_8/1.jpg",
		"name" : "name displayed when hover",
	}
]
ez.data.hotGoods = hotGoodsData;
ez.data.hotGoods.defaultOption = {
	"urlBase" : "#/product"
}

ez.data.hotGoods.option = {};
$.extend(true, ez.data.hotGoods.option, ez.data.defaultOption, ez.data.hotGoods.defaultOption);

ez.data.hotGoods.getUrl = function(data)
{
	return ez.data.hotGoods.option.urlBase + "/" + data.productId;
}

ez.data.hotGoods.getImageUrl = function(data)
{
	return ez.data.hotGoods.option.imageUrlBase + "/" + data.imageUrl;
}

/* hotCategories */
var hotCategoriesData = [{
		"productid" : 11,
		"categoryId" : 1,
		"imageurl" : "category/decals/sku_1/1.jpg",
		"name" : "name displayed when hover",
	}, {
		"productid" : 21,
		"categoryId" : 2,
		"imageurl" : "category/decals/sku_2/1.jpg",
		"name" : "name displayed when hover",
	}, {
		"productid" : 31,
		"categoryId" : 3,
		"imageurl" : "category/decals/sku_3/1.jpg",
		"name" : "name displayed when hover",
	}
]
ez.data.hotCategories = hotCategoriesData;

ez.data.hotCategories.defaultOption = {
	"urlBase" : "#/product_search_filter"
}

ez.data.hotCategories.option = {};
$.extend(true, ez.data.hotCategories.option, ez.data.defaultOption, ez.data.hotCategories.defaultOption);

ez.data.hotCategories.getUrl = function(data)
{
	//return ez.data.hotCategories.option.urlBase + "/" + data.categoryId;
	return ez.data.hotCategories.option.urlBase;
}

ez.data.hotCategories.getImageUrl = function(data)
{
	return ez.data.hotCategories.option.imageUrlBase + "/" + data.imageurl;
}

/* Test Data End */











