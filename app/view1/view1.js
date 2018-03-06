'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['books', 'shoppingCart', '$scope', '$location', function(books, shoppingCart, $scope, $location) {
    books.load().success(function (data, status, headers, config) {
        $scope.books = data;
    }).error(function(data, status, headers, config) {
        console.error(data, status, headers, config);
        if(status === 404) {
            window.alert('Not found');
        } else {
            window.alert('Unknown Error');
        }
    });

    $scope.thisCart = shoppingCart.getCart();

    $scope.addToCart = function (book) {
        $scope.thisCart.push(book);
        shoppingCart.setCart($scope.thisCart);
    };

    $scope.checkOut = function () {
        var url = 'view2'
        $location.url(url);
    };

    $scope.emptyCart = function () {
        $scope.thisCart = [];
        shoppingCart.setCart($scope.thisCart);
    };
}]);