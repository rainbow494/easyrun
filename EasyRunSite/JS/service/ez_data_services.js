"use strict";

var ezDataServices = angular.module("ezDataServices", ['ngResource']);



ezDataServices.factory("getWallHangingsProducts", [
        function () {
            var allProducts = ez.data.products;
            var wallHangingsProducts = [];
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].categoryId == '1') {
                    wallHangingsProducts.push(allProducts[i]);
                }
            }

            wallHangingsProducts.defaultOption = {
                "urlBase": "#/product"
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

            var searchByApplication = function (applicationId) {
                var products = [];
                for (var i = 0; i < wallHangingsProducts.length; i++) {
                    if (wallHangingsProducts[i].applicationIdList.indexOf(applicationId) != -1) {
                        products.push(wallHangingsProducts[i]);
                    }
                }
                return products;
            }
            wallHangingsProducts.searchByApplication = searchByApplication;
            wallHangingsProducts.searchByApplication.getUrl = getUrl;
            wallHangingsProducts.searchByApplication.getImageUrl = getImageUrl;

            return (function () {
                return wallHangingsProducts;
            })();
        }
    ]);
    

ezDataServices.factory("getWallDecalsProducts", [
        function () {
            var allProducts = ez.data.products;
            var wallDecalsProducts = [];
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].categoryId == '2') {
                    wallDecalsProducts.push(allProducts[i]);
                }
            }

            wallDecalsProducts.defaultOption = {
                "urlBase" : "#/product"
            }

            wallDecalsProducts.option = {};
            $.extend(true, wallDecalsProducts.option, ez.data.defaultOption, wallDecalsProducts.defaultOption);

            var getUrl = function (data) {
                return wallDecalsProducts.option.urlBase + "/" + data.productId;
            }
            var getImageUrl = function (data) {
                return wallDecalsProducts.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1.jpg";
            }

            wallDecalsProducts.getUrl = getUrl;
            wallDecalsProducts.getImageUrl = getImageUrl;

            var searchByApplication = function (applicationId) {
                var products = [];
                for (var i = 0; i < wallDecalsProducts.length; i++) {
                    if (wallDecalsProducts[i].applicationIdList.indexOf(applicationId) != -1) {
                        products.push(wallDecalsProducts[i]);
                    }
                }
                return products;
            }
            wallDecalsProducts.searchByApplication = searchByApplication;
            wallDecalsProducts.searchByApplication.getUrl = getUrl;
            wallDecalsProducts.searchByApplication.getImageUrl = getImageUrl;

            return (function () {
                return wallDecalsProducts;
            })();
        }
    ]);

ezDataServices.factory("getWallPaperProducts", [
        function () {
            var allProducts = ez.data.products;
            var wallPaperProducts = [];
            for (var i = 0; i < allProducts.length; i++) {
                if (allProducts[i].categoryId == '3') {
                    wallPaperProducts.push(allProducts[i]);
                }
            }

            wallPaperProducts.defaultOption = {
                "urlBase" : "#/product"
            }

            wallPaperProducts.option = {};
            $.extend(true, wallPaperProducts.option, ez.data.defaultOption, wallPaperProducts.defaultOption);

            var getUrl = function (data) {
                return wallPaperProducts.option.urlBase + "/" + data.productId;
            }
            var getImageUrl = function (data) {
                return wallPaperProducts.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1.jpg";
            }

            wallPaperProducts.getUrl = getUrl;
            wallPaperProducts.getImageUrl = getImageUrl;

            var searchByApplication = function (applicationId) {
                var products = [];
                for (var i = 0; i < wallPaperProducts.length; i++) {
                    if (wallPaperProducts[i].applicationIdList.indexOf(applicationId) != -1) {
                        products.push(wallPaperProducts[i]);
                    }
                }
                return products;
            }
            wallPaperProducts.searchByApplication = searchByApplication;
            wallPaperProducts.searchByApplication.getUrl = getUrl;
            wallPaperProducts.searchByApplication.getImageUrl = getImageUrl;

            return (function () {
                return wallPaperProducts;
            })();
        }
    ]);