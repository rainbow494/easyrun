'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);

productControllers.controller('productSiteMapController', ['$scope', '$routeParams', 'ezSiteMapPluginFactory',
        function ($scope, $routeParams, ezSiteMapPluginFactory) {
            $scope.siteMapData = ezSiteMapPluginFactory.getSiteMap($routeParams.productId);
        }
    ]
);

productControllers.controller('productSiderBarController', ['$scope', '$routeParams', 'ezSliderBarPluginFactory',
        function ($scope, $routeParams, ezSliderBarPluginFactory) {
            $scope.siderBarData = ezSliderBarPluginFactory.initSiderBarData($routeParams.productId);

            $scope.changeSliderBarDisplayImage = function (displayImageNo) {
                $scope.siderBarData.currentImgNo = displayImageNo;
                //alert(displayImageNo);
            }
        }
    ]
);

productControllers.controller('productCurrentProductController', ['$scope', '$routeParams', 'getProductById',
        function ($scope, $routeParams, getProductById) {
            $scope.currentProduct = getProductById($routeParams.productId);
        }
    ]
);