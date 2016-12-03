var request = require("request");
var cheerio = require('cheerio');

//database below this
var user = require('../model/userdata.js');
var connection = require('../config/connection.js');

var FanduelListNBA = function() {

  // setInterval(function(){
  //   if (now == 15) {
  //     console.log(now);
  //   }
  // }, 60000);
  setInterval(function(){
    var now = new Date().getHours();
    console.log('not in if statement', now);
    if (now == 20) {
      console.log(now);
    }
    if (now == 21) {
      console.log(now);
    }
  }, 120000);
}

module.exports = FanduelListNBA;
