define([
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data',
    'underscore',
    'mage/translate'
], function (ko, Component, customerData, _, translate) {
    'use strict';

    return Component.extend({
        toggleState: ko.observable(true),
        cartData: ko.observable({}),
        initialize: function() {
            this._super();
            // initialize threshold
            this.setData(customerData.get('cart')());
            customerData.get('cart').subscribe(data => {
                this.setData(data);
            });

            console.log("initialized >>> ", this);
        },
        setData: function(data) {
            console.log("setData >>> ", data);
            this.cartData(data);
        },
        toggle: function() {
            this.toggleState(!this.toggleState());
            console.log("toggled >>> ", !this.toggleState())
        }
    });
});
