'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function(shoppingCart, $scope) {
    $scope.thisCart = shoppingCart.getCart();
    $scope.totalSum = 0;

    $scope.getSum = function() {
        $scope.total = 0;
        $scope.thisCart.forEach(function (item) {
          $scope.total += item.price;
        })

        return $scope.total;
    }

});