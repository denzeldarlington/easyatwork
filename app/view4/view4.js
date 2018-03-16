'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/book/:id/:slug', {
            templateUrl: 'view4/view4.html',
            controller: 'View4Ctrl'
        });
    }])

    .controller('View4Ctrl', ['books', 'shoppingCart', '$scope', '$routeParams',
    function(books, shoppingCart, $scope, $routeParams) {
        var id = parseInt($routeParams.id, 10);

        $scope.shopCart = shoppingCart;

        books.load().then(function (listOfBooks) {
            var allBooks = listOfBooks.data;
            for(var i = 0; i < allBooks.length; i++) {
                if (allBooks[i].id === id) {
                    $scope.book = allBooks[i];
                    break;
                }
            }
        });
    }]);