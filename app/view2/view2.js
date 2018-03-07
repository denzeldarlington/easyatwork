'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['shoppingCart', '$scope', function(shoppingCart, $scope) {
    $scope.thisCart = shoppingCart.getCart();
    $scope.cartAmount = shoppingCart.getAmount();

    $scope.getSum = function() {
        var total = 0;

        $scope.thisCart.forEach(function (item) {
            total += item.price * item.amount;
        });

        return total;
    };

    $scope.emptyCart = function () {
        $scope.thisCart = [];
        shoppingCart.setCart($scope.thisCart);
    };

}]);