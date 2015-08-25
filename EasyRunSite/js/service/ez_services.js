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
<<<<<<< HEAD
                }

                // -----------------------------
                popularProducts.defaultOption = {
                    "urlBase" : "#/product"
                }

                popularProducts.option = {};
                $.extend(true, popularProducts.option, ez.data.defaultOption, popularProducts.defaultOption);

                var getUrl = function (data) {
                    return popularProducts.option.urlBase + "/" + data.productId;
                }
                var getImageUrl = function (data) {
                    return popularProducts.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1.jpg";
                }

                popularProducts.getUrl = getUrl;
                popularProducts.getImageUrl = getImageUrl;
                //------------------------------

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

    dbAdaptor.getPopularProducts = function (categoryId) {
        var allProducts = ez.data.products;
        var popularProducts = [];
        for (var i = 0; i < allProducts.length; i++) {
            if (allProducts[i].popular) {
                popularProducts.push(allProducts[i]);
=======
                    defer.resolve(product);

                })
                .error(function (data) {
                    console.log("error from getProductById" + data);
                    defer.resolve(data);
                });
                return defer.promise
>>>>>>> 701bd78... 添加linkedin图标，修改数据源，修改热门推荐功能
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

            dbAdaptor.getPopularProducts = function (categoryId) {
                var allProducts = ez.data.products;
                var popularProducts = [];
                for (var i = 0; i < allProducts.length; i++) {
                    if (allProducts[i].popular) {
                        popularProducts.push(allProducts[i]);
                    }
                }

                popularProducts.defaultOption = {
                    "urlBase" : "#/product"
                }

                popularProducts.option = {};
                $.extend(true, popularProducts.option, ez.data.defaultOption, popularProducts.defaultOption);

<<<<<<< HEAD
    dbAdaptor.getPopularCategories = function () {
        var allProducts = ez.data.products;
        var popularCategories = [];
        for (var i = 0; i < allProducts.length; i++) {
            if (allProducts[i].popular) {
                popularCategories.push(allProducts[i]);
            }
        }

        popularCategories.defaultOption = {
            "urlBase" : "#/category"
        }

        popularCategories.option = {};
        $.extend(true, popularCategories.option, ez.data.defaultOption, popularCategories.defaultOption);

        var getUrl = function (data) {
            return popularCategories.option.urlBase + "/" + data.productId;
        }
        var getImageUrl = function (data) {
            return popularCategories.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1_thumb.jpg";
        }

        popularCategories.getUrl = getUrl;
        popularCategories.getImageUrl = getImageUrl;

        return popularCategories;
    }

    return dbAdaptor;
}
]);
=======
                var getUrl = function (data) {
                    return popularProducts.option.urlBase + "/" + data.productId;
                }
                var getImageUrl = function (data) {
                    return popularProducts.option.imageUrlBase + "/" + data.categoryName + "/" + data.productId + "/" + "1_thumb.jpg";
                }

                popularProducts.getUrl = getUrl;
                popularProducts.getImageUrl = getImageUrl;

                return popularProducts;
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
>>>>>>> 701bd78... 添加linkedin图标，修改数据源，修改热门推荐功能
