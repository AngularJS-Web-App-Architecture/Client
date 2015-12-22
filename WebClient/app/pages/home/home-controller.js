(function () {

    var HomeController = function (notifier) {
        var vm = this;

        vm.smilePath = 'app/pages/events/smile.ico';
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['notifier', HomeController])
}())