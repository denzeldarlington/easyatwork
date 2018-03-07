'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function(shoppingCart, $scope) {
    $scope.books = [{
        title: 'Book 1',
        image: '',
        description: 'This is a funny book',
        price: 19.99
    },
    {
        title: 'Book 2',
        image: '',
        description: 'This is a sci-fi book',
        price: 14.99
    },
    {
        title: 'Book 3',
        image: '',
        description: 'This is a factual book',
        price: 9.99
    }];

    $scope.thisCart = shoppingCart.getCart();

    $scope.addToCart = function (book) {
        $scope.thisCart.push(book);
        shoppingCart.setCart($scope.thisCart);
    };

    $scope.checkOut = function () {

    };

    $scope.emptyCart = function () {
        $scope.thisCart = [];
        shoppingCart.setCart($scope.thisCart);
    };
});