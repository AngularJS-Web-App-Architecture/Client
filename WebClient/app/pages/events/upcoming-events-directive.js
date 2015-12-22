(function () {
    'use strict';

    function upcomingEvents() {
        return {
            restrict: 'A',
            templateUrl: 'app/directives/upcoming-events-directive.html'
        }
    }

    angular.module('myApp.directives')
        .directive('upcomingEvents', [upcomingEvents]);
}());