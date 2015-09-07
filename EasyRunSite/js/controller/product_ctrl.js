'use strict';

var productControllers = angular.module('productControllers', []);

productControllers.controller('productSiteMapController', ['$scope', '$routeParams', 'dbAdaptor',
function ($scope, $routeParams, dbAdaptor) {

        var promise = dbAdaptor.getProductById($routeParams.productId);
        promise.then(
            function(result) {
                $scope.siteMapData = result;
            },
            function(error) {
                console.log('getProductById error: ' + error);
            });
    }
]);

productControllers.controller('productSiderBarController', ['$scope', '$routeParams', 'ezSliderBarPluginFactory',
function ($scope, $routeParams, ezSliderBarPluginFactory) {
    $scope.siderBarData = ezSliderBarPluginFactory.initSiderBarData($routeParams.productId);

    $scope.changeSliderBarDisplayImage = function (displayImageNo) {
            $scope.siderBarData.currentImgNo = displayImageNo;
        }
    }
]);

productControllers.controller('productCurrentProductController', ['$scope', '$routeParams', 'dbAdaptor',
function ($scope, $routeParams, dbAdaptor) {
    var promise = dbAdaptor.getProductById($routeParams.productId);
    promise.then(
        function(result) {
            $scope.product = result;
            $scope.unit = $scope.product.length == 'customize' ? '' : 'mm';
        },
        function(error) {
            console.log('getProductById error: ' + error);
        });
    }
]);
