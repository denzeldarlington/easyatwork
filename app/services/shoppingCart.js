'use strict';

angular.module('myApp')
    .factory('shoppingCart', function() {

        var cart = [];

        return {
            getCart: function() {
                return cart;
            },
            setCart: function(_cart) {
                cart = _cart;
            }
        };
    });