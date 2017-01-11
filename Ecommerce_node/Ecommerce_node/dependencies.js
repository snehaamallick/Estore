var Stripe = require('stripe');
var fx = require('./fx');
var fs = require('fs');

module.exports = function(wagner) {
    wagner.factory('Config', function() {
        return JSON.parse(fs.readFileSync('./config.json').toString());
    });

    var stripe = wagner.invoke(function(Config) {
        return Stripe(Config.stripeKey);
    });

    wagner.factory('Stripe', function() {
        return stripe;
    });
    
    wagner.factory('fx', fx);
};