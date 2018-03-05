'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
    var bookList = [{
        title: 'Book 1',
        image: '',
        description: 'This is a funny book'
    },
    {
        title: 'Book 2',
        image: '',
        description: 'This is a sci-fi book'
    },
    {
        title: 'Book 3',
        image: '',
        description: 'This is a factual book'
    }]
}]);