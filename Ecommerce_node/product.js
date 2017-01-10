var mongoose = require('mongoose');
var Category = require('./category');

var productSchema={
	name: {type: String, required: true},
	//Pictures must start with "http://"
	price:{
		amount:{type: Number, required:true},
		//Only 3 supported currencies for now
		currency:{
			type:String,
			enum:['USD', 'EUR', 'GBP'],
			required: true
		}
	},
	category: Category.catgorySchema
};

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;

