(function () {
    'use strict';

    function addEvents() {
        return {
            restrict: 'A',
            templateUrl: 'app/directives/add-events-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('addEvents', [addEvents]);
}());