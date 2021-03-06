/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var fandueldata = {
	searchfandueldata: function(condition,cb){
		orm.searchfandueldata("googlesheetsapi","Player",condition,function(res){
			cb(res);
		});
	},


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
	// start
	searchfandueldata: function(condition,cb){
		orm.searchfandueldata("fanduellineup","Player",condition,function(res){
			cb(res);
		});
	},

	findOnefanduellineup: function(condition, cb) {
		orm.findOnefanduellineup('fanduellineup', condition, function(res){
				cb(res);
		});
	},
	allfanduellineup: function(cb) {
		orm.allfanduellineup('fanduellineup', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createfanduellineup: function(cols, vals, cb) {
		orm.createfanduellineup('fanduellineup', cols, vals, function(res){
			cb(res);
		});
	},
	updatefanduellineup: function(objColVals, condition, cb) {
		orm.updatefanduellineup('fanduellineup', objColVals, condition, function(res){
			cb(res);
		});
	},
	deletefanduellineup: function(condition, cb){
		orm.deletefanduellineup('fanduellineup', condition, function(res){
			cb(res);
		});
	},
	// end
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
	},
	findOnefanduelNBATopPlays: function(condition, cb) {
		orm.findOnefanduelNBATopPlays('googlesheetsapiNBATopPlays', condition, function(res){
				cb(res);
		});
	},
	allfanduelNBATopPlays: function(cb) {
		orm.allfanduelNBATopPlays('googlesheetsapiNBATopPlays', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createfanduelNBATopPlays: function(cols, vals, cb) {
		orm.createfanduelNBATopPlays('googlesheetsapiNBATopPlays', cols, vals, function(res){
			cb(res);
		});
	},
	updatefanduelNBATopPlays: function(objColVals, condition, cb) {
		orm.updatefanduelNBATopPlays('googlesheetsapiNBATopPlays', objColVals, condition, function(res){
			cb(res);
		});
	},
	deletefanduelNBATopPlays: function(condition, cb){
		orm.deletefanduelNBATopPlays('googlesheetsapiNBATopPlays', condition, function(res){
			cb(res);
		});
	}
};

module.exports = fandueldata;
