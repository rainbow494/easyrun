'use strict';

/* Controllers */

var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('homeHotGoodsController', ['$scope', 'getHotGoods',
        function ($scope, getHotGoods) {
            $scope.hotGoods = getHotGoods;
        }
    ]
);