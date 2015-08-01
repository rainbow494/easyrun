'use strict';

/* App Module */
var ezApp = angular.module('ezApp', [
  'ngRoute',
  'ezServices',
  'homeControllers',
  'searchFilterController',
  'productControllers',
  'contactControllers',
  'ezSiteMapPlugin',
  'ezSliderBarPlugin',
  'ezDataServices',
  'popularLinkPluginControllers'
]);

ezApp.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.
    when('/home', {
        templateUrl: './html/content/home.html',
        controller: 'homePopularProductsController'
    }).
    when('/product/:productId', {
        templateUrl: './html/content/product.html',
        controller: 'productCurrentProductController'
    }).
    when('/category/:category', {
        templateUrl: './html/content/product_search_filter.html',
        controller: 'product_search_filter_control'
    }).
    when('/category', {
        templateUrl: './html/content/product_search_filter.html',
        controller: 'product_search_filter_control'
    }).
    when('/contact/:productId', {
        templateUrl: './html/content/contact.html',
        controller: 'contactController'
    }).
    when('/contact', {
        templateUrl: './html/content/contact.html',
        controller: 'contactController'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);
