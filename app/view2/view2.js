'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['shoppingCart', '$scope', function(shoppingCart, $scope) {

    $scope.getCart = function () {
        return shoppingCart.getCart();
    };

    $scope.getSum = function() {
        var total = 0;

        $scope.getCart().forEach(function (item) {
            total += item.price * item.amount;
        });

        return total;
    };

    $scope.getAmount = function () {
        return shoppingCart.getAmount();
    };

    $scope.emptyCart = function () {
        shoppingCart.setCart([]);
    };
    
    $scope.decrease = function (item) {
        item.amount -= 1;
    };

    $scope.increase = function (item) {
        item.amount += 1;
    };

    $scope.remove = function (item) {
        var index = $scope.getCart().indexOf(item);
        $scope.getCart().splice(index, 1);
    };

}]);

