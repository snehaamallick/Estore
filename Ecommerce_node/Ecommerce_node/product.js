var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');

var productSchema={
	name: {type: String, required: true},
	//Pictures must start with "http://"
	pictures:[{type: String, match: /^http:\/\//i}],
	price:{
		amount:{
			type: Number, 
			required:true,
			set: function(v) {
				this.internal.approximatePriceUSD =
				v / (fx()[this.price.currency] || 1);
				return v;
			}
		},
		//Only 3 supported currencies for now
		currency:{
			type:String,
			enum:['USD', 'EUR', 'GBP'],
			required: true
		}
	},
	category: Category.catgorySchema
};

var schema = new mongoose.Schema(productSchema);

var currencySymbols = {
	'USD' : '$',
	'EUR' : '€',
	'GBP' : '£'
};

svvhema.virtual('displayPrice').get(function() {
	return currencySymbols[this.price.currency] +
		'' + this.price.amount;
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true});

module.exports = schema;



module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;

