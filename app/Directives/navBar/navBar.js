angular.module('myApp')
    .directive('navBar', function ($location) {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'directives/navBar/navBar.html',
            controller: ['$scope', function ($scope) {
                $scope.currentNavItem = $location.$$path;

                $scope.goTo = function (path) {
                    $location.url(path);
                };
            }]
        }
    });