'use strict';

angular.module('myApp')
    .factory('books', function ($http) {

        return {
            load: function () {
                return $http.get('books.json')
            }
        };
    });