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
	}
};

module.exports = information;
