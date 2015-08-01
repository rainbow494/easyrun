"use strict";

var ezSiteMapPlugin = angular.module("ezSiteMapPlugin", []);

ezSiteMapPlugin.factory("ezSiteMapPluginFactory", [
		function (productId) {
            var self = this;

		    var _allProducts = ez.data.products;

		    self.getSiteMap = function (productId) {// Get product logic need move to services
		        var product = {};
		        if (!productId) {
		            return currentProduct;
		        }

		        for (i = 0; i < _allProducts.length; i++) {
		            if (_allProducts[i].productId === productId) {
		                product = _allProducts[i];
		                break;
		            }
		        }
		        return product;
		    }

		    return self;
		}
	]);
