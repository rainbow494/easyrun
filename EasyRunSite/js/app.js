'use strict';

/* App Module */

var ezApp = angular.module('ezApp', [
  'ngRoute',
  'ezControllers'
]);

ezApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/home', {
          templateUrl:'./html/content/home.html',
          controller: ''
      }).
      when('/product', {
          templateUrl:'./html/content/product.html',
          controller: ''
      }).
       when('/product_search_filter', {
          templateUrl:'./html/content/product_search_filter.html',
          controller: ''
      }).
       when('/contact', {
          templateUrl:'./html/content/contact.html',
          controller: ''
      }).
      otherwise({
        redirectTo: '/home'
      });
  } ]);
