'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homeHotGoodsController',
    [
        '$scope',
        'getHotGoods',
        function ($scope, getHotGoods) {
            $scope.carousels = getHotGoods;
        }
    ]
);

homeControllers.controller('homeHotCategorysController',
    [
        '$scope', 
        //'getHotCategorys',
        function ($scope 
        //,getHotCategorys
        ) {
          //alert(1);
          //$scope.carousels = getHotGoods;
        }
    ]
 );