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

                $http.post(url:"/api/productinquire",, productInquire).success(function (data, status, headers, config) {
                    alert("success");
                }).error(function (data, status, headers, config) {
                    alert("error");
                })
            })
        }
    ]);
