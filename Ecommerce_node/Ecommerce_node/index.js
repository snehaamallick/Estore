var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Server listening on port 3000');




/*var server = require('./server');

server().listen(3000);
console.log('Server listening on port 3000!');



*/


/*var fn = require('./myfile.js');
fn();

var otherFn = require('./test').other;
otherFn();
*/
/*var mongodb = require('mongodb');

var uri = "mongodb://localhost:27017/example";
mongodb.MongoClient.connect(uri, function(error, db){
	if(error){
		console.log(error);
		process.exit(1);
	}
	
	db.collection('sample').insert({ x:1}, function(error,result){
		if(error){
			console.log(error);
			process.exit(1);
		}
		db.collection('sample').find().toArray(function(error, docs){
			if(error){
				console.log(error);
				process.exit(1);
			}
			
			console.log('Found docs:');
			docs.forEach(function(doc){
				console.log(JSON.stringify(doc));
			});
			process.exit(0);
		});
	});
});*/