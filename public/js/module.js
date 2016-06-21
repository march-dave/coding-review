"use strict";

angular.module('myApp', ['nvd3'])
       .controller('myCtrl', function('$scope'){
           $scope.options = { /* JSON data */ };
           $scope.data = { /* JSON data */ }
        })


        $scope.callback = function(scope, element){
            // this code will be applied once directive has been created
            // scope - is the directive internal scope
            // element - directive DOM element
            var api = scope.api;
            var chart = scope.chart;
            var svg = scope.svg;
            // ... do smth
        };
