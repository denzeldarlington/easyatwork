'use strict';

angular.module('myApp')
    .factory('books', function ($http) {

        var booksRequest = null;

        return {
            load: function () {
                if(!booksRequest) {
                    booksRequest = $http.get('books.json');
                }
                return booksRequest;
            }
        };
    });