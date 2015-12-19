(function () {
    'use strict';

    function config($routeProvider) {

        var CONTROLLER_AS_VIEW_MODEL = 'vm';

        $routeProvider
            .when('/', {
                template: '<h1>Home</h1>'
            })
            .when('/unauthorized', {
                template: '<h1 class="text-center">YOU ARE NOT AUTHORIZED!</h1>'
            })
            .when('/Register', {
                templateUrl: 'app/pages/register/register.html',
                controller: 'RegisterController'
            })
            .when('/Login', {
                templateUrl: 'app/pages/login/login.html',
                controller: 'RegisterController'
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('myApp.services', []);
    angular.module('myApp.directives', []);
    angular.module('myApp.filters', []);
    angular.module('myApp.controllers', ['myApp.services']);
    angular.module('myApp', ['ngRoute', 'ngCookies', 'kendo.directives', 'myApp.controllers', 'myApp.directives', 'myApp.filters']).
        config(['$routeProvider', config])
        .value('toastr', toastr)
        .constant('baseServiceUrl', 'http://localhost:38013/')
        .constant('VALIDATION', {
            'minEmailLength': 3,
            'maxEmailLength': 60,
            'minPasswordLength': 6,
            'maxPasswordLength': 32,
            'minUsernameLength': 3,
            'maxUsernameLength': 100,
        });
}());