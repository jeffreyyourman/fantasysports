var request = require("request");
var dateFormat = require('dateformat');

//database below this
// var lineupbuilderquery = require('./lineupbuilderquery');
var user = require('../model/userdata.js');
var fanduel = require('../model/fanduelinfo.js');
var connection = require('../config/connection.js');

var moment = require('moment-timezone');
// lineupbuilderquery
var now = new Date();
var newupdatedDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

var lineupBuilder = function () {

  var body = JSON.parse(body)
  connection.query(lineupBuilder, function(err, fanduelData) {
      if (err) throw err;

      console.log("Clean NBA Top plays table, ready for update");
  });
}


module.exports = lineupBuilder;
