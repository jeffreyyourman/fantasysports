/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var user = {
	findOneFantasyData: function(condition, cb) {
	  orm.findOneFantasyData('data', condition, function(res){
	      cb(res);
	  });
  },
	allFantasyData: function(cb) {
		orm.allFantasyData('data', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createFantasyData: function(cols, vals, cb) {
		orm.createFantasyData('data', cols, vals, function(res){
			cb(res);
		});
	},
	updateFantasyData: function(objColVals, condition, cb) {
		orm.updateFantasyData('data', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteFantasyData: function(condition, cb){
		orm.deleteFantasyData('data', condition, function(res){
			cb(res);
		});
	}
};

module.exports = user;
