'use strict';

/* Controllers */

var ezControllers = angular.module('ezControllers', []);

//ezControllers.controller('homeControl', ['$scope', '$http',
//  function ($scope, $http) {
//      // $http({ method: 'GET', url: 'dataSource/hot_commodiate.json' }).success(function (data) {
//      $http.get('dataSource/hot_commodiate.json').success(function (data) {
//          $scope.carousels = data;
//      }).error(function (data) {
//          console.log('error from ezControllers http get' + data);
//      });
//  } ]);

ezControllers.controller('homeControl', ['$scope',
  function ($scope) {

      $scope.carousels = [
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
} ]);