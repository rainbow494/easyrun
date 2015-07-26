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

productControllers.controller('productCurrentGoodController', ['$scope', '$routeParams', 'getGoodById',
        function ($scope, $routeParams, getGoodById) {
            $scope.currentGood = getGoodById($routeParams.productId);
        }
    ]
);

productControllers.controller('productHotGoodsController', ['$scope', 'getHotGoods',
        function ($scope, getHotGoods) {
            $scope.hotSuggestGallery = getHotGoods;
            $scope.hotSuggestGallery.title = "Try These";
        }
    ]
);

productControllers.controller('productHotCategoriesController', ['$scope', 'getHotCategories',
        function ($scope, getHotCategories) {
            $scope.hotSuggestGallery = getHotCategories;
            $scope.hotSuggestGallery.title = "Category";
        }
    ]
);