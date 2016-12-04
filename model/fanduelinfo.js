/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var fandueldata = {

	findOnefandueldata: function(condition, cb) {
	  orm.findOnefandueldata('googlesheetsapi', condition, function(res){
	      cb(res);
	  });
  },
	allfandueldata: function(cb) {
		orm.allfandueldata('googlesheetsapi', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createfandueldata: function(cols, vals, cb) {
		orm.createfandueldata('googlesheetsapi', cols, vals, function(res){
			cb(res);
		});
	},
	updatefandueldata: function(objColVals, condition, cb) {
		orm.updatefandueldata('googlesheetsapi', objColVals, condition, function(res){
			cb(res);
		});
	},
	deletefandueldata: function(condition, cb){
		orm.deletefandueldata('googlesheetsapi', condition, function(res){
			cb(res);
		});
	},
};

module.exports = fandueldata;
