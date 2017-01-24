var request = require("request");
var cheerio = require('cheerio');
var dateFormat = require('dateformat');

//database below this
var user = require('../model/userdata.js');
var fanduel = require('../model/fanduelinfo.js');
var connection = require('../config/connection.js');

var moment = require('moment-timezone');

var spreadsheetIDNFL = "1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw";
var urlNFL = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNFL + "/od6/public/values?alt=json";

var spreadsheetIDNBA = "1iC9-Db33FCOaSA8avYkrgf4uMvMiTf1xJw3m5RbyH5A";
var urlNBA = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNBA + "/od6/public/values?alt=json";


// https://docs.google.com/spreadsheets/d/11T73fHMeUdNzcVHiVDjDKWsa7cLQCdF5RBbX60SYCek/pubhtml
var spreadsheetIDNBATopPlays = "11T73fHMeUdNzcVHiVDjDKWsa7cLQCdF5RBbX60SYCek";
var urlNBATopPlays = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNBATopPlays + "/od6/public/values?alt=json";
var fanduelSports = function() {
  var NBATopPlayers = function() {
      request(urlNBATopPlays, function(error, response, body) {
          if (!error && response.statusCode == 200) {
              var body = JSON.parse(body)
              connection.query("delete from googlesheetsapiNBATopPlays", function(err, fanduelData) {
                  if (err) throw err;

                  console.log("Clean NBA Top plays table, ready for update");
              })

              for (var i = 0; i < body.feed.entry.length; i++) {
                  var myNBATopPlays = body.feed.entry[i];

                  var turtle = [myNBATopPlays.gsx$name.$t, myNBATopPlays.gsx$pos.$t, myNBATopPlays.gsx$sal.$t,  myNBATopPlays.gsx$points.$t, myNBATopPlays.gsx$value.$t, myNBATopPlays.gsx$topplayervalue.$t, myNBATopPlays.gsx$site.$t, myNBATopPlays.gsx$rank.$t];
                  // add the below line to the end of the turtle array

                  var now = new Date();
                  var newupdatedDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

                  fanduel.createfanduelNBATopPlays(["Player", "POS", "Sal", "ProjectedPts", "PlayerValue", "topPlayerValue", "Site", "PlayerRanking", "updated"
                  // add the below line to before "updated"
                    // "Site"
                    // "Value"
                ], [turtle[0], turtle[1], turtle[2], turtle[3], turtle[4],turtle[5], turtle[6], turtle[7], newupdatedDate], function(nbatopdata) {
                  // add the below line to before "newupdatedDate"


                  });
              }
          }
      });
    }
var fanduelNBADB = function() {
    request(urlNBA, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var body = JSON.parse(body)

            connection.query("delete from googlesheetsapi", function(err, fanduelData) {
                if (err) throw err;

                console.log("Clean NBA table, ready for update");
            })

            for (var i = 0; i < body.feed.entry.length; i++) {
                var myNBA = body.feed.entry[i]
                // var projmins = myNBA.gsx$projmins.$t;
                // var ovp = myNBA.gsx$ovp.$t;
                // var ppm = myNBA.gsx$ppm.$t;
                var projscore = myNBA.gsx$projscore.$t;
                var gameline = myNBA.gsx$gameline.$t;
                // var projectedpts = myNBA.gsx$projectedpts.$t;
                // var value = myNBA.gsx$value.$t;
                var salaryadjust = myNBA.gsx$salaryadjust.$t;
                var recpr = myNBA.gsx$recpr.$t;
                var ptsvspos = myNBA.gsx$ptsvpos.$t;
                var criteriaranking = myNBA.gsx$criteriaranking.$t;
                var score = myNBA.gsx$score.$t;



                
                var projmins = parseFloat(myNBA.gsx$projmins.$t);
                var ovp = parseFloat(myNBA.gsx$ovp.$t);
                var ppm = parseFloat(myNBA.gsx$ppm.$t);
                // var projscore = parseFloat(myNBA.gsx$projscore.$t);
                // var gameline = parseFloat(myNBA.gsx$gameline.$t);
                var projectedpts = parseFloat(myNBA.gsx$projectedpts.$t);
                var value = parseFloat(myNBA.gsx$value.$t);
                // var salaryadjust = parseFloat(myNBA.gsx$salaryadjust.$t);
                // var recpr = parseFloat(myNBA.gsx$recpr.$t);
                // var ptsvspos = parseFloat(myNBA.gsx$ptsvpos.$t);
                // var criteriaranking = parseFloat(myNBA.gsx$criteriaranking.$t);
                // var score = parseFloat(myNBA.gsx$score.$t);
                var mybool = false;

                if ((isNaN(projmins) == mybool) && (isNaN(ovp) == mybool) && (isNaN(ppm) == mybool) && (isNaN(projectedpts) == mybool) && (isNaN(value) == mybool)) {
                  //bla bla
                } else {
                  projmins = 0;
                  ovp = 0;
                  ppm = 0;
                  projectedpts = 0;
                  value = 0;
                }

                var turtle = [myNBA.gsx$player.$t, myNBA.gsx$ha.$t, myNBA.gsx$position.$t, myNBA.gsx$team.$t, myNBA.gsx$opp.$t, myNBA.gsx$condition.$t, myNBA.gsx$details.$t, myNBA.gsx$posid.$t, myNBA.gsx$avgminsl10.$t, projmins, myNBA.gsx$salary.$t, myNBA.gsx$useage.$t, myNBA.gsx$ppgl10.$t, ppm, ovp, myNBA.gsx$gladjust.$t, myNBA.gsx$totaladjust.$t, projscore, gameline, projectedpts, value, myNBA.gsx$ownership.$t, myNBA.gsx$pathcompare.$t, myNBA.gsx$expectedvalue.$t, myNBA.gsx$netvalue.$t, myNBA.gsx$gamesplayed.$t, salaryadjust, recpr, score, ptsvspos, myNBA.gsx$delete.$t, criteriaranking, myNBA.gsx$gametime.$t, myNBA.gsx$awaygame.$t, myNBA.gsx$b2bgame.$t, myNBA.gsx$threeinfour.$t, myNBA.gsx$playercount.$t,myNBA.gsx$dkppm.$t, myNBA.gsx$dkproj.$t, myNBA.gsx$dksal.$t, myNBA.gsx$dkpos.$t, myNBA.gsx$dkvalue.$t ]

                var now = new Date();
                var newupdatedDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

                // var updateDate = new Date();
                // var newupdatedDate = moment.tz(updateDate, "America/New_York").format();
                //
                fanduel.createfandueldata(['Player', "HomeAway", "Position", "Team", "Opp", "Mycondition", "details", "posid", "AvgMinsL10", "ProjMins", "Salary", "Useage", "PPGL10", "PPM", "OVP", "GLAdjust", "TotalAdjust", "ProjScore", "GameLine", "ProjectedPts", "Value", "Ownership", "PathCompare", "ExpectedValue", "NetValue",
                    "GamesPlayed", "SalaryAdjust", "RecPr", "Score", "PTsVPos", "DeleteSuggested", "CriteriaRanking", 'GameTime', "awaygame", "B2BGame", 'ThreeinFour', "PlayerCount", "PPMDK", "ProjectedPtsDK", "SalaryDK", "PositionDK", "ValueDK", 'updated'
                ], [turtle[0], turtle[1], turtle[2], turtle[3], turtle[4], turtle[5], turtle[6], turtle[7], turtle[8], turtle[9], turtle[10], turtle[11], turtle[12],

                    turtle[13], turtle[14], turtle[15], turtle[16], turtle[17], turtle[18], turtle[19], turtle[20], turtle[21], turtle[22], turtle[23], turtle[24], turtle[25], turtle[26], turtle[27], turtle[28],
                    turtle[29], turtle[30], turtle[31], turtle[32], turtle[33], turtle[34], turtle[35], turtle[36],turtle[37],turtle[38],turtle[39],turtle[40],turtle[41], newupdatedDate
                ], function(nbadata) {

                });
            }
        }
    });
  }
  fanduelNBADB();
  NBATopPlayers();
}
module.exports = fanduelSports;
