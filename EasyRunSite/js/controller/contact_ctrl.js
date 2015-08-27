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
                    'from' : $scope.email,
                    'subject' : $scope.subject,
                    'text' : $scope.message,
                }

                $http.post('/api/productinquire', {data:productInquire}).
                then(function(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        $scope.inquireSentSuccess = true;
                }, function(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.error(response);
                        $scope.inquireSentFailed = true;
                });
            }
        }
    ]);
