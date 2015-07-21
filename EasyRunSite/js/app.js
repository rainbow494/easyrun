'use strict';

/* App Module */

var ezApp = angular.module('ezApp', [
  'ngRoute',
  'ezControllers',
  'searchFilterController'
]);

ezApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/home', {
          templateUrl:'./html/content/home.html',
          controller: 'homeControl'
      }).
      when('/product', {
          templateUrl:'./html/content/product.html',
          controller: ''
      }).
       when('/product_search_filter', {
          templateUrl:'./html/content/product_search_filter.html',
          controller: 'product_search_filter_control'
      }).
       when('/contact', {
          templateUrl:'./html/content/contact.html',
          controller: ''
      }).
      otherwise({
        redirectTo: '/home'
      });
  } ]);