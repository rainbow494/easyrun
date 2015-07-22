'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homeHotGoodsControler',
    [
        '$scope',
        'getHotGoods',
        function ($scope, getHotGoods) {
            $scope.carousels = getHotGoods;
        }
    ]
);

homeControllers.controller('homeHotCategorysControler',
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