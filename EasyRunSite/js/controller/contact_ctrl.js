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

             console.log(productInquire);

             $http.post('/api/productinquire', {data:productInquire}).
             then(function(response) {
                 // this callback will be called asynchronously
                 // when the response is available
                 alert(replyMessage);
                 console.log(response);
             }, function(response) {
                 // called asynchronously if an error occurs
                 // or server returns response with an error status.
                 console.error(response);
             });

             var replyMessage = "Dear Customer, "
             + "Thank you for your interests on our products. "
             + "Your inquiry is well received. We will send you our feedback in 24 hours. In case of urgency & importance, pls call our manger MR. Henry BAO :+0086 18621322288."
             + "Thank you for your patience."

             + "Your trustworthy,"
             + "Easyrun Sales Team"
            }
        }
    ]);
