'use strict';

/* Controllers */
var contactControllers = angular.module('contactControllers', []);

contactControllers.subjectTemplate = 'I want to inquire product ';

contactControllers.controller('contactController', ['$http', '$scope', '$routeParams',
        function ($http, $scope, $routeParams) {
             $scope.subject = '';
             if ($routeParams.productId) {
                 $scope.subject = contactControllers.subjectTemplate + $routeParams.productId;
             }

             $scope.productInquireClick = function ($event) {
                 var productInquire = {
                     'firstName' : $scope.firstName,
                     'lastName' : $scope.lastName,
                     'email' : $scope.email,
                     'subject' : $scope.subject,
                     'message' : $scope.message,
                 }

                 console.log(productInquire);


                 $http.post('/api/productinquire', {data:productInquire}).
                   then(function(response) {
                     // this callback will be called asynchronously
                     // when the response is available
                     alert("success");
                   }, function(response) {
                     // called asynchronously if an error occurs
                     // or server returns response with an error status.
                     alert("error");
                   });

                     //$http.post(url:"http://127.0.0.1:1025/api/productinquire", productInquire).success(function (data, status, headers, config) {
                        //    $http(
                        //       {
                        //           MDTHOD: 'POST',
                        //           URL: '/API/PRODUCTINQUIRE',
                        //           DATA: PRODUCTINQUIRE,
                        //           HEADERS: {'CONTENT-TYPE': 'APPLICATION/JSON'}
                        //       }
                        //   ).success(
                     //          function (data, status, headers, config) {
                     //              alert("success");
                     //          }
                     //      ).error(
                     //          function (data, status, headers, config) {
                     //              alert("error");
                     //          }
                     //      )
                     //  })
            }
        }
    ]);
