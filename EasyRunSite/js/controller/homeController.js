'use strict';

/* Controllers */

var ezControllers = angular.module('ezControllers', []);

ezControllers.controller('homeControl', ['$scope',
  function ($scope) {

      $scope.carousels = [
        {
            "id": 0,
            "url": "#/product",
            "imageUrl": "./resource/image/categroy/wall_murals/sku_8/1.jpg",
            "name": "name displayed when hover"
        },
        //{
        //    "id": 1,
        //    "url": "#/product",
        //    "imageUrl": "./resource/image/categroy/wall_murals/sku_7/1.jpg",
        //    "name": "name displayed when hover"
        //}
        ];

  } ]);