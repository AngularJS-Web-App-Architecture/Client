(function () {

    var EventsController = function ($scope, identity, notifier, data) {
        var vm = this;

        vm.event = {};
        vm.filterType = 'StartDate';

        vm.sendEvent = function (event) {
            data.post('api/events', event)
                .then(function (success) {
                    if (success !== 'Failure') {
                        notifier.success('Event successfully added!');
                        vm.events.push(event);
                    }
                    else {
                        notifier.warning('Event insertion failed. The selected country does not exist.');
                    }
                }, function (err) {
                    notifier.warning('Event has errors or is empty!');
                });
        }

        vm.removeEvent = function (event) {
            data.remove('api/events', event)
                .then(function (success) {
                    notifier.success('Event successfully removed!');

                    var index = vm.events.indexOf(event);
                    vm.events.splice(index, 1);

                }, function (err) {
                    notifier.warning(err);
                });
        }

        $scope.identity = identity;

        data.get('api/events')
            .then(function (result) {
                vm.events = result;
            })

        data.get('api/countries')
            .then(function (result) {
                vm.countries = result;
            })
    }

    angular.module('myApp.controllers')
        .controller('EventsController', ['$scope', 'identity', 'notifier', 'data', EventsController])
}())