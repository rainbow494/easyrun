//'use strict';

///* Controllers */

//var phonecatControllers = angular.module('phonecatControllers', []);

//phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
//  function ($scope, $http) {
//      //$http.get('phones/phones.json').success(function(data) {
//      //  $scope.phones = data;
//      //});

//      $scope.phones = [
//    {
//        "age": 0, 
//        "id": "motorola-xoom-with-wi-fi", 
//        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
//        "name": "Motorola XOOM\u2122 with Wi-Fi", 
//        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
//    }, 
//    {
//        "age": 1, 
//        "id": "motorola-xoom", 
//        "imageUrl": "img/phones/motorola-xoom.0.jpg", 
//        "name": "MOTOROLA XOOM\u2122", 
//        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
//    }
//]
//;

//      $scope.orderProp = 'age';
//  } ]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//  function($scope, $routeParams) {
//    $scope.phoneId = $routeParams.phoneId;
//  }]);