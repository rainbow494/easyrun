"use strict";

var ezSliderBarPlugin = angular.module("ezSliderBarPlugin", []);

ezSliderBarPlugin.factory("ezSliderBarPluginFactory", [
		function (productId) {
		    var self = this;

		    var _allGoods = ez.data.goods;

		    self.initSiderBarData = function (productId) {
		        var siderBarData = {};
		        siderBarData.currentImgNo = 1;
		        siderBarData.good = {};
		        if (!productId) {
		            return currentGood;
		        }

		        for (i = 0; i < _allGoods.length; i++) {
		            if (_allGoods[i].productId === productId) {
		                siderBarData.good = _allGoods[i];
		                break;
		            }
		        }
		        return siderBarData;
		    }

		    return self;
		}
	]);
