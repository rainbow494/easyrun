"use strict";

var ezServices = angular.module("ezServices", []);

ezServices.factory("dbAdaptor", ["$http", "$q",
        function ($http, $q) {
            var dbAdaptor = {};

            dbAdaptor.getAllProducts = function () {
                var defer = $q.defer();

                $http.get("data_source/product_data.json")
                .success(function (data) {
                    var allProducts = data || {};
                    defer.resolve(allProducts);
                })
                .error(function (error) {
                    console.error("error from getProductById" + error);
                    defer.resolve(error);
                });
                
                return defer.promise  
            }

            dbAdaptor.getProductById = function (productId) {
                if (!productId) {
                    console.error("getProductById: there is no productId.");
                    return;
                }

                var defer = $q.defer();
                $http.get("data_source/product_data.json")
                .success(function (data) {
                    var allProducts = data || {};
                    var product = {};

                    for (i = 0; i < allProducts.length; i++) {
                        if (allProducts[i].productId === productId) {
                            product = allProducts[i];
                            break;
                        }
                    }
                    defer.resolve(product);

                })
                .error(function (data) {
                    console.log("error from getProductById" + data);
                    defer.resolve(data);
                });
                return defer.promise;
            }

            dbAdaptor.getHomePageProducts = function () {
                var defer = $q.defer();

                $http.get("data_source/homepage_product_data.json")
                .success(function (data) {
                    var homePageProductKeyData = data || {};

                    $http.get("data_source/product_data.json")
                    .success(function (data) {
                        var popularProducts = [];

                        var allProducts = data || {};
                        for (var i = 0; i < homePageProductKeyData.length; i++) {
                            for (var j = 0; j < allProducts.length; j++) {
                                if (homePageProductKeyData[i].productId === allProducts[j].productId) {
                                    popularProducts.push(allProducts[j]);
                                    break;
                                }
                            }
                        }
                        defer.resolve(popularProducts);
                    })
                    .error(function (error) {
                        console.error("error from getHomePageProducts" + error);
                        defer.resolve(error);
                    });
                })
                .error(function (error) {
                    console.error("error from getHomePageProducts" + error);
                    defer.resolve(error);
                });

                return defer.promise;
            }

            dbAdaptor.getPopularProducts = function (productId) {
                var defer = $q.defer();
                
                var promise = dbAdaptor.getProductById(productId);

                promise.then(function(product){
                    $http.get("data_source/populator_product_data.json")
                    .success(function (data) {
                        var populatorProductKeyData = data || {};
                        
                        var filteredProductKeyData = [];
                        for  (var k = 0; k < populatorProductKeyData.length; k++)
                        {
                            if(populatorProductKeyData[k].categoryId === product.categoryId)  
                            {
                                filteredProductKeyData.push(populatorProductKeyData[k]);
                            }
                        }

                        $http.get("data_source/product_data.json")
                        .success(function (data) {
                            var populatorProducts = [];

                            var allProducts = data || {};
                            for (var i = 0; i < filteredProductKeyData.length; i++) {
                                for (var j = 0; j < allProducts.length; j++) {
                                    if (filteredProductKeyData[i].productId === allProducts[j].productId) {
                                        populatorProducts.push(allProducts[j]);
                                        break;
                                    }
                                }
                            }
                            defer.resolve(populatorProducts);
                        })
                        .error(function (error) {
                            console.error("error from getPopularCategories" + error);
                            defer.resolve(error);
                        });
                    })
                    .error(function (error) {
                        console.error("error from getPopularCategories" + error);
                        defer.resolve(error);
                    });
                })
                
                return defer.promise;
            }

            dbAdaptor.getPopularCategories = function () {
                var defer = $q.defer();

                $http.get("data_source/populator_category_data.json")
                .success(function (data) {
                    var populatorCategoryKeyData = data || {};

                    $http.get("data_source/product_data.json")
                    .success(function (data) {
                        var populatorCategories = [];

                        var allProducts = data || {};
                        for (var i = 0; i < populatorCategoryKeyData.length; i++) {
                            for (var j = 0; j < allProducts.length; j++) {
                                if (populatorCategoryKeyData[i].productId === allProducts[j].productId) {
                                    populatorCategories.push(allProducts[j]);
                                    break;
                                }
                            }
                        }
                        defer.resolve(populatorCategories);
                    })
                    .error(function (error) {
                        console.error("error from getPopularCategories" + error);
                        defer.resolve(error);
                    });
                })
                .error(function (error) {
                    console.error("error from getPopularCategories" + error);
                    defer.resolve(error);
                });

                return defer.promise;
            }

            return dbAdaptor;
        }
    ]);