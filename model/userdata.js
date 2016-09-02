/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var user = {
	findOneUser: function(condition, cb) {
	  orm.findOneUser('users', condition, function(res){
	      cb(res);
	  });
  },
	allUsers: function(cb) {
		orm.allUsers('users', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createUser: function(cols, vals, cb) {
		orm.createUser('users', cols, vals, function(res){
			cb(res);
		});
	},
	updateUser: function(objColVals, condition, cb) {
		orm.updateUser('users', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteUser: function(condition, cb){
		orm.deleteUser('users', condition, function(res){
			cb(res);
		});
	}
};

module.exports = user;
