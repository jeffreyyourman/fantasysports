/*
Here is where you setup a model for how to interface with the NFLDataQBbase.
*/

var orm = require('../config/orm.js');

var NFLData = {
	findOneFantasyDataQB: function(condition, cb) {
	  orm.findOneFantasyDataQB('NFLDataQB', condition, function(res){
	      cb(res);
	  });
  },
	allFantasyDataQB: function(cb) {
		orm.allFantasyDataQB('NFLDataQB', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createFantasyDataQB: function(cols, vals, cb) {
		orm.createFantasyDataQB('NFLDataQB', cols, vals, function(res){
			cb(res);
		});
	},
	updateFantasyDataQB: function(objColVals, condition, cb) {
		orm.updateFantasyDataQB('NFLDataQB', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteFantasyDataQB: function(condition, cb){
		orm.deleteFantasyDataQB('NFLDataQB', condition, function(res){
			cb(res);
		});
	},
	findOneFantasyDataRB: function(condition, cb) {
		orm.findOneFantasyDataRB('NFLDataRB', condition, function(res){
				cb(res);
		});
	},
	allFantasyDataRB: function(cb) {
		orm.allFantasyDataRB('NFLDataRB', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createFantasyDataRB: function(cols, vals, cb) {
		orm.createFantasyDataRB('NFLDataRB', cols, vals, function(res){
			cb(res);
		});
	},
	updateFantasyDataRB: function(objColVals, condition, cb) {
		orm.updateFantasyDataRB('NFLDataRB', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteFantasyDataRB: function(condition, cb){
		orm.deleteFantasyDataRB('NFLDataRB', condition, function(res){
			cb(res);
		});
	},
	findOneFantasyDataWR: function(condition, cb) {
		orm.findOneFantasyDataWR('NFLDataWR', condition, function(res){
				cb(res);
		});
	},
	allFantasyDataWR: function(cb) {
		orm.allFantasyDataWR('NFLDataWR', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createFantasyDataWR: function(cols, vals, cb) {
		orm.createFantasyDataWR('NFLDataWR', cols, vals, function(res){
			cb(res);
		});
	},
	updateFantasyDataWR: function(objColVals, condition, cb) {
		orm.updateFantasyDataWR('NFLDataWR', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteFantasyDataWR: function(condition, cb){
		orm.deleteFantasyDataWR('NFLDataWR', condition, function(res){
			cb(res);
		});
	},
	findOneFantasyDataTE: function(condition, cb) {
		orm.findOneFantasyDataTE('NFLDataTE', condition, function(res){
				cb(res);
		});
	},
	allFantasyDataTE: function(cb) {
		orm.allFantasyDataTE('NFLDataTE', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createFantasyDataTE: function(cols, vals, cb) {
		orm.createFantasyDataTE('NFLDataTE', cols, vals, function(res){
			cb(res);
		});
	},
	updateFantasyDataTE: function(objColVals, condition, cb) {
		orm.updateFantasyDataTE('NFLDataTE', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteFantasyDataTE: function(condition, cb){
		orm.deleteFantasyDataTE('NFLDataTE', condition, function(res){
			cb(res);
		});
	},
	findOneFantasyDataK: function(condition, cb) {
		orm.findOneFantasyDataK('NFLDataK', condition, function(res){
				cb(res);
		});
	},
	allFantasyDataK: function(cb) {
		orm.allFantasyDataK('NFLDataK', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createFantasyDataK: function(cols, vals, cb) {
		orm.createFantasyDataK('NFLDataK', cols, vals, function(res){
			cb(res);
		});
	},
	updateFantasyDataK: function(objColVals, condition, cb) {
		orm.updateFantasyDataK('NFLDataK', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteFantasyDataK: function(condition, cb){
		orm.deleteFantasyDataK('NFLDataK', condition, function(res){
			cb(res);
		});
	},
	findOneFantasyDataDef: function(condition, cb) {
		orm.findOneFantasyDataDef('NFLDataDef', condition, function(res){
				cb(res);
		});
	},
	allFantasyDataDef: function(cb) {
		orm.allFantasyDataDef('NFLDataDef', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	createFantasyDataDef: function(cols, vals, cb) {
		orm.createFantasyDataDef('NFLDataDef', cols, vals, function(res){
			cb(res);
		});
	},
	updateFantasyDataDef: function(objColVals, condition, cb) {
		orm.updateFantasyDataDef('NFLDataDef', objColVals, condition, function(res){
			cb(res);
		});
	},
	deleteFantasyDataDef: function(condition, cb){
		orm.deleteFantasyDataDef('NFLDataDef', condition, function(res){
			cb(res);
		});
	}
};

module.exports = NFLData;
