'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['shoppingCart', '$scope', '$location', function(shoppingCart, $scope, $location) {

    $scope.getCart = function () {
        return shoppingCart.getCart();
    };

    $scope.getSum = function() {
        return shoppingCart.getSum();
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
        shoppingCart.removeFromCart(item);
    };

    $scope.goTo = function (item) {
        var id = item.id;
        var url = 'book/'+id+'/qwerty';
        $location.url(url);
    }

}]);

