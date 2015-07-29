'use strict';

/* Controllers */
var contactControllers = angular.module('contactControllers', []);

contactControllers.subjectTemplate = 'I want to inquire product ';

contactControllers.controller('contactController', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.subject = '';
            if ($routeParams.productId) {
                $scope.subject = contactControllers.subjectTemplate + $routeParams.productId;
            }
        }
    ]
);