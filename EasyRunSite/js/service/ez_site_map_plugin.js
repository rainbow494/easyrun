"use strict";

var ezSiteMapPlugin = angular.module("ezSiteMapPlugin", []);

ezSiteMapPlugin.factory("ezSiteMapPluginFactory", [
		function (productId) {
            var self = this;

		    var _allGoods = ez.data.goods;

		    self.getSiteMap = function (productId) {// Get good logic need move to services
		        var good = {};
		        if (!productId) {
		            return currentGood;
		        }

		        for (i = 0; i < _allGoods.length; i++) {
		            if (_allGoods[i].productId === productId) {
		                good = _allGoods[i];
		                break;
		            }
		        }
		        return good;
		    }

		    return self;
		}
	]);
