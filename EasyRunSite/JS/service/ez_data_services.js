"use strict";

var ezDataServices = angular.module("ezDataServices", ['ngResource']);
/*
ezDataServices.factory('getDecalsProducts', ['$resource',
  function($resource){
    return $resource('data_source/:dataId.json', {}, {
      query: {method:'GET', params:{dataId:'er-data-test'}, isArray:true}
    });
  }]);

  */


ezDataServices.factory("getWallHangingsProducts", [
        function () {
            var allProducts = ez.data.products;
            var wallHangingsProducts = [];
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].popular) {
                    wallHangingsProducts.push(allProducts[i]);
                }
            }

            wallHangingsProducts.defaultOption = {
                "urlBase" : "#/product"
            }

            wallHangingsProducts.option = {};
            $.extend(true, wallHangingsProducts.option, ez.data.defaultOption, wallHangingsProducts.defaultOption);

            var getUrl = function (data) {
                return wallHangingsProducts.option.urlBase + "/" + data.productId;
            }
            var getImageUrl = function (data) {
                return wallHangingsProducts.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1.jpg";
            }

            wallHangingsProducts.getUrl = getUrl;
            wallHangingsProducts.getImageUrl = getImageUrl;

            return (function () {
                return wallHangingsProducts;
            })();
        }
    ]);
    