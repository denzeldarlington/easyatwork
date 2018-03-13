'use strict';

angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/book/:id/:slug', {
            templateUrl: 'view4/view4.html',
            controller: 'View4Ctrl'
        });
    }])

    .controller('View4Ctrl', ['shoppingCart', '$scope', function(shoppingCart, $scope, $routeParams) {
        console.log($routeParams.id);
        console.log($routeParams.slug);

        var id = parseInt($routeParams.id, 10);

        books.load().then(function (listOfBooks) {
            var allBooks = listOfBooks.data;
            for(var book in allBooks) {
                if (book.id === id) {
                    $scope.book = book;
                    break;
                }
            }
        });



    }]);