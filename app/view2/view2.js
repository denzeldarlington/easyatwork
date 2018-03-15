'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['shoppingCart', '$scope', '$location', function(shoppingCart, $scope, $location) {

    $scope.shopCart = shoppingCart;

    $scope.goTo = function (item) {
        var id = item.id;
        var url = 'book/'+id+'/qwerty';
        $location.url(url);
    }

}]);

