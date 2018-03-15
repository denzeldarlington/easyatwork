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
            emptyCart: function () {
                cart = [];
            },
            getAmount: function () {
                var total = 0;

                cart.forEach(function (item) {
                    total += item.amount;
                });

                return total;
            },
            getSum: function () {
                var total = 0;

                cart.forEach(function (item) {
                    total += item.price * item.amount;
                });

                return total;
            },
            isInCart: function (id) {
                for(var i = 0; i < cart.length; i++) {
                    if (cart[i].id === id) {
                        return true;
                    }
                }

                return false;
            },
            addToCart: function (book) {
                var inCart = false;
                var index = 0;

                if (cart.length < 1) {
                    cart.push(angular.copy(book));
                    cart[0].amount = 1;
                } else {
                    while (index < cart.length) {
                        if(book.id === cart[index].id) {
                            cart[index].amount += 1;
                            inCart = true;
                        }

                        ++index;
                    }

                    if(!inCart) {
                        cart.push(angular.copy(book));
                        cart[cart.length - 1].amount = 1;
                    }
                }
            },
            decrease: function (item) {
                item.amount -= 1;
            },
            removeFromCart: function (item) {
                var index = cart.indexOf(item);
                cart.splice(index, 1);
            }
        };
    });