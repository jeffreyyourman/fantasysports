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
	findOnefandueldataNFL: function(condition, cb) {
		orm.findOnefandueldataNFL('googlesheetsapiNFL', condition, function(res){
				cb(res);
		});
	},
	allfandueldataNFL: function(cb) {
		orm.allfandueldataNFL('googlesheetsapiNFL', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createfandueldataNFL: function(cols, vals, cb) {
		orm.createfandueldataNFL('googlesheetsapiNFL', cols, vals, function(res){
			cb(res);
		});
	},
	updatefandueldataNFL: function(objColVals, condition, cb) {
		orm.updatefandueldataNFL('googlesheetsapiNFL', objColVals, condition, function(res){
			cb(res);
		});
	},
	deletefandueldataNFL: function(condition, cb){
		orm.deletefandueldataNFL('googlesheetsapiNFL', condition, function(res){
			cb(res);
		});
	}
};

module.exports = fandueldata;
