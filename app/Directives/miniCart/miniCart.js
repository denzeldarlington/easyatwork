angular.module('myApp')
    .directive('miniCart', function (shoppingCart, $location) {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'directives/miniCart/miniCart.html',
            controller: ['$scope', function ($scope) {

                $scope.shopCart = shoppingCart;

                $scope.getBuy = function () {
                    return ($location.$$path === '/view2');
                };

                $scope.checkout = function () {
                    $location.url('view2');
                };
            }]
        }
    });