'use strict';

angular.module('myApp')
    .factory('books', function ($http) {

        return {
            load: function () {
                return $http.get('books.json')
            }
        };
    });



var exampleApp = angular.module('exampleApp',['sap.imageloader']);

exampleApp.controller('ExampleController', ['$scope', 'ImageLoader', function($scope, ImageLoader) {
    var myImageSrc = 'http://someimagesource.com/example.jpg';
    ImageLoader.loadImage(myImageSrc).then(function(loadedSrc) {
        $scope.imageSrc = loadedSrc;
    });
}]);