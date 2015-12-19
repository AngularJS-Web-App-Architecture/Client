(function () {

    var HomeController = function (notifier) {
        var vm = this;

        vm.introduction = "Hello, this is my online coaching system. I would be very pleased to work with you."

        vm.notifySuccess = function () {
            notifier.success("Yeyy");
        }
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['notifier', HomeController])
}())