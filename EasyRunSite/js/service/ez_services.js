'use strict';

/* Controllers */


var ezServices = angular.module('ezServices', []);

ezServices.factory('getHotGoods', [
  function () {
      return EZ.Data.HotGoods;
  } ]);

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

EZ = window.createNamespace("EZ");
EZ.Data =  window.createNamespace("EZ.Data");
EZ.Data.HotGoods = [
        {
            "id": 0,
            "url": "#/product",
            "imageUrl": "./resource/image/categroy/wall_murals/sku_7/1.jpg",
            "name": "name displayed when hover",
            "active":"active"
        },
        {
            "id": 1,
            "url": "#/product",
            "imageUrl": "./resource/image/categroy/wall_murals/sku_7/2.jpg",
            "name": "name displayed when hover",
            "active":""
        },
        {
            "id": 2,
            "url": "#/product",
            "imageUrl": "./resource/image/categroy/wall_murals/sku_8/1.jpg",
            "name": "name displayed when hover",
            "active":""
        }
     ]

/* Test Data End */