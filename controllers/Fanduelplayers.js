var request = require("request");
var cheerio = require('cheerio');

//database below this
var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasytables.js');
var social = require('../model/social.js');
var connection = require('../config/connection.js');

// var FanduelListNBA = function() {
//   var now = new Date().getHours();
//
//   setInterval(function(){
//     if (now == 16) {
//       console.log(now);
//     }
//   }, 100);
// }



module.exports = FanduelListNBA;
