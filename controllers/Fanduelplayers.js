var request = require("request");
var cheerio = require('cheerio');

//database below this
var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasytables.js');
var social = require('../model/social.js');
var connection = require('../config/connection.js');

var FanduelListNBA = function() {
//   var urlplayers = 'https://www.numberfire.com/nba/daily-fantasy/daily-basketball-projections';
//
//     request(urlplayers, function (error, response, html) {
//
//       var $ = cheerio.load(html);
//
//       $('a.full').each(function(i, element){
//         var c = $(this);
//
//         var players = c.text();
//         console.log(players);
//
//         social.createFanduelPlayersNBA(['nbaplayers'], [players], function(fanduelnbaplayers){
//           console.log(fanduelnbaplayers);
//         })
//       // '<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j])
//       });
//     });
// .toLocaleString("en-US", {timeZone: "America/New_York"})
var now = new Date();
console.log(now);
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 22, 0, 0) - now;
  if (millisTill10 < 0) {
       millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
       console.log('inside if statement' , now);
  }
  setInterval(function(){
  	console.log('my names timmy');
  }, millisTill10);
}



module.exports = FanduelListNBA;
