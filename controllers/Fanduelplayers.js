var request = require("request");
var cheerio = require('cheerio');

//database below this
var user = require('../model/userdata.js');
var fanduel = require('../model/fanduelinfo.js');
var connection = require('../config/connection.js');


var spreadsheetIDNBA = "1iC9-Db33FCOaSA8avYkrgf4uMvMiTf1xJw3m5RbyH5A";
var urlNBA = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNBA + "/od6/public/values?alt=json";

request(urlNBA, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var	body = JSON.parse(body)

    connection.query("delete from googlesheetsapi", function(err,fanduelData){
      if(err) throw err;

      console.log("Clean table, ready for update");
    })

    for (var i = 0; i < body.feed.entry.length; i++) {
        var w = body.feed.entry[i]

  var turtle = 	[w.gsx$player.$t,w.gsx$ha.$t,w.gsx$position.$t,w.gsx$team.$t,w.gsx$opp.$t,w.gsx$condition.$t,w.gsx$details.$t,w.gsx$posid.$t,w.gsx$avgminsl10.$t,w.gsx$projmins.$t,w.gsx$salary.$t,w.gsx$useage.$t,w.gsx$ppgl10.$t,w.gsx$ppm.$t,w.gsx$ovp.$t,w.gsx$gladjust.$t,w.gsx$totaladjust.$t,w.gsx$projscore.$t,w.gsx$gameline.$t,w.gsx$projectedpts.$t,w.gsx$value.$t,w.gsx$ownership.$t,w.gsx$pathcompare.$t,w.gsx$expectedvalue.$t,w.gsx$netvalue.$t,w.gsx$gamesplayed.$t,w.gsx$salaryadjust.$t,w.gsx$recpr.$t,w.gsx$score.$t,w.gsx$ptsvpos.$t,w.gsx$delete.$t,w.gsx$criteriaranking.$t,w.gsx$playercount.$t]

    fanduel.createfandueldata(['Player',"HomeAway","Position","Team","Opp","Mycondition","details","posid","AvgMinsL10","ProjMins","Salary","Useage","PPGL10","PPM","OVP","GLAdjust","TotalAdjust","ProjScore","GameLine","ProjectedPts","Value","Ownership","PathCompare","ExpectedValue"
    ,"NetValue",
"GamesPlayed","SalaryAdjust","RecPr","Score","PTsVPos","DeleteSuggested","CriteriaRanking","PlayerCount"],
 [turtle[0], turtle[1], turtle[2],turtle[3],turtle[4],turtle[5],turtle[6],turtle[7],turtle[8],turtle[9],turtle[10],turtle[11],turtle[12],

 turtle[13],turtle[14],turtle[15],turtle[16],turtle[17],turtle[18],turtle[19],turtle[20], turtle[21], turtle[22],turtle[23],turtle[24],turtle[25],turtle[26],turtle[27],turtle[28],
 turtle[29],turtle[30],turtle[31],turtle[31]], function(user){
});
}
}
});

var FanduelListNBA = function() {


  // setInterval(function(){
  //   var now = new Date().getMinutes();
  //   if (now == 19) {
  //     console.log(now);
  //   }
  //   if (now == 21) {
  //     console.log(now);
  //   }
  // }, 6000);
}

FanduelListNBA();

module.exports = FanduelListNBA;
