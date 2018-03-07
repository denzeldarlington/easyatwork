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
            },
            getAmount: function () {
                var total = 0;

                cart.forEach(function (item) {
                    total += item.amount;
                });

                return total;
            }
        };
    });