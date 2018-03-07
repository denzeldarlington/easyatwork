'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['books', 'shoppingCart', '$scope', '$location', function(books, shoppingCart, $scope, $location) {
   books.load().then(function (listOfBooks) {
        $scope.allBooks = listOfBooks.data;
    });

    $scope.thisCart = shoppingCart.getCart();

    $scope.addToCart = function (book) {
        var inCart = false;
        var index = 0;

        if ($scope.thisCart.length < 1) {
            $scope.thisCart.push(angular.copy(book));
            $scope.thisCart[0].amount = 1;
        } else {
            while (index < $scope.thisCart.length) {
                if(book.title === $scope.thisCart[index].title) {
                    $scope.thisCart[index].amount += 1;
                    inCart = true;
                }

                ++index;
            }

            if(!inCart) {
                $scope.thisCart.push(angular.copy(book));
                $scope.thisCart[$scope.thisCart.length - 1].amount = 1;
            }
        }

        shoppingCart.setCart($scope.thisCart);
    };

    $scope.checkOut = function () {
        var url = 'view2';
        $location.url(url);
    };

    $scope.emptyCart = function () {
        $scope.thisCart = [];
        shoppingCart.setCart($scope.thisCart);
    };

    $scope.cartAmount = function () {
        return shoppingCart.getAmount();
    }
}]);