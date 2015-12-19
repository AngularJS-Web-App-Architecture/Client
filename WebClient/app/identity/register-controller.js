(function () {
    'use strict';

    function RegisterController($scope, $location, auth, notifier, VALIDATION) {
        var vm = this;

        vm.validation = VALIDATION;

        $scope.signup = function (user) {
            auth.signup(user).then(function () {
                notifier.success('Registration successful!');
                $location.path('/Login');
            }, function (error) {
                notifier.error(error);
            })
        }

        vm.isFormDirty = function (registerForm) {
            return registerForm.emailInputField.$dirty &&
                registerForm.usernameInputField.$dirty &&
                registerForm.passwordInputField.$dirty &&
                registerForm.confirmPasswordInputField.$dirty;
        }

        vm.isPasswordMatching = function (user) {
            return user.password === user.confirmPassword;
        }
    }

    angular.module('myApp.controllers').controller('RegisterController', ['$scope', '$location', 'auth', 'notifier', 'VALIDATION', RegisterController]);
}());