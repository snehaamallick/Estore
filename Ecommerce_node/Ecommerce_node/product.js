var mongoose = require('mongoose');
var Category = require('./category');

module.exports = function(db, fx) {
  var productSchema = {
    name: {
      type: String,
      required: true
    },
    pictures: [{
      type: String,
      // pictures must start with http://
      match: /^http:\/\//i
    }],
    price: {
      amount: {
        type: Number,
        required: true,
        set: function(v) {
          this.internal.approximatePriceUSD = v / (fx()[this.price.currency] || 1);
          return v;
        }
      },
      currency: {
        type: String,
        // only three currencies supported for now
        enum: ['USD', 'EUR', 'GPB'],
        required: true,
        set: function(v) {
          this.internal.approximatePriceUSD = this.price.amount / (fx()[v] || 1);
          return v;
        }
      }
    },
    category: Category.categorySchema,
    internal: {
      approximatePriceUSD: Number
    }
  };

  var schema = new mongoose.Schema(productSchema);

  schema.index({ name: 'text' });

  var currencySymbols = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£'
  };

  // Human readable string form of price
  // $25 rather than 25 USD
  schema.virtual('displayPrice').get(function() {
    return currencySymbols[this.price.currency] + '' + this.price.amount;
  });

  schema.set('toObject', { virtuals: true });
  schema.set('toJSON', { virtuals: true });
  
  return db.model('Product', schema, 'products');
}
