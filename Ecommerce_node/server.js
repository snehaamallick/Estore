
var app = require('./server');
var assert = require('assert');
var superagent = require('superagent');

describe('server', function() {
	var server;
	
	beforeEach(function() {
		server = app().listen(3000);
	});
	afterEach(function() {
		server.close();
	});
	 it('prints out "Hello, world" when user goes to/', function(done) {
		 superagent.get('http://localhost:3000/', function(error, res) {
			 assert.ifError(error);
			 assert.equal(res.status, 200);
			 assert.equal(res.text, "Hello, world!");
			 done();
		 });
	 });
});


describe('server', function() {
	var server;
	
	beforeEach(function() {
		server = app().listen(3000);
	});
	
	afterEach(function() {
		server.close();
	});
	it('prints out "Hello, worls" when user goes to /', function(done) {
		superagent.get('http://localhost:3000/', function(error, res) {
			assert.ifError(error);
			assert.equal(res.status, 200);
			assert.equal(res.text, "Hello, world!");
			done();
	});
	});
});

/*var express = require('express');

module.exports = function() {
	var app = express();
	
	app.get('/', function(req, res) {
		res.send('Hello, world!');
		});
		
		app.get('/user/:user', function(req, res) {
			res.send('Page for user' + req.params.user+ 'with option' +
				req.query.option);
				});
				
				return app;
				};
				*/