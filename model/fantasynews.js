/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var information = {
	findOneNews: function(condition, cb) {
		orm.findOneNews('FantasyNews', condition, function(res){
				cb(res);
		});
	},
	allNews: function(cb) {
		orm.allNews('FantasyNews', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createNews: function(cols, vals, cb) {
		orm.createNews('FantasyNews', cols, vals, function(res){
			cb(res);
		});
	},
	updateNews: function(objColVals, condition, cb) {
		orm.updateNews('FantasyNews', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteNews: function(condition, cb){
		orm.deleteNews('FantasyNews', condition, function(res){
			cb(res);
		});
	},
	findOneNewsNBA: function(condition, cb) {
		orm.findOneNewsNBA('FantasyNewsNBA', condition, function(res){
				cb(res);
		});
	},
	allNewsNBA: function(cb) {
		orm.allNewsNBA('FantasyNewsNBA', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createNewsNBA: function(cols, vals, cb) {
		orm.createNewsNBA('FantasyNewsNBA', cols, vals, function(res){
			cb(res);
		});
	},
	updateNewsNBA: function(objColVals, condition, cb) {
		orm.updateNewsNBA('FantasyNewsNBA', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteNewsNBA: function(condition, cb){
		orm.deleteNewsNBA('FantasyNewsNBA', condition, function(res){
			cb(res);
		});
	}
};

module.exports = information;
