'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['books', 'shoppingCart', '$scope', '$location', function(books, shoppingCart, $scope, $location) {

    $scope.shopCart = shoppingCart;

    books.load().then(function (listOfBooks) {
        $scope.allBooks = listOfBooks.data;
    });

    $scope.checkOut = function () {
        var url = 'view2';
        $location.url(url);
    };

    $scope.goTo = function (book) {
        var id = book.id;
        var url = 'book/'+id+'/qwerty';
        $location.url(url);
    }
}]);