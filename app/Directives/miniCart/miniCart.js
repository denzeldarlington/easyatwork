angular.module('myApp')
    .directive('miniCart', function (shoppingCart, $location) {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'directives/miniCart/miniCart.html',
            controller: ['$scope', function ($scope) {


                $scope.sum = function () {
                    return shoppingCart.getSum();
                };

                $scope.empty = function () {
                    shoppingCart.emptyCart();
                };

                $scope.getCart = function () {
                    return shoppingCart.getCart();
                };

                $scope.getBuy = function () {
                    var loc = $location.$$path;
                    if(loc === '/view2') {
                        return true;
                    } else {
                        return false;
                    }
                };

                $scope.checkout = function () {
                    $location.url('view2');
                };
            }]
        }
    });