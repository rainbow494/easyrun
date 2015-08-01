"use strict";

var ezSliderBarPlugin = angular.module("ezSliderBarPlugin", []);

ezSliderBarPlugin.factory("ezSliderBarPluginFactory", [
		function (productId) {
		    var self = this;

		    var _allProducts = ez.data.products;

		    self.initSiderBarData = function (productId) {
		        var siderBarData = {};
		        siderBarData.currentImgNo = 1;
		        siderBarData.product = {};
		        if (!productId) {
		            return currentProduct;
		        }

		        for (i = 0; i < _allProducts.length; i++) {
		            if (_allProducts[i].productId === productId) {
		                siderBarData.product = _allProducts[i];
		                break;
		            }
		        }
		        return siderBarData;
		    }

		    return self;
		}
	]);
