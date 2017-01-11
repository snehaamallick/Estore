var p =new Product({
	name: 'test', 
	price: {
		amount: 5,
		currency: 'USD'
		},
		category: {
			name: 'test'
	}
});
console.log(p.displayPrice); //"5USD"

p.price.amount =20;
console.log(p.displayPrice);

console.log(JSON.stringify(p));

var obj = p.toObject(p));
console.log(obj.displayPrice);	
		