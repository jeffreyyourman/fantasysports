var request = require("request");
var cheerio = require('cheerio');

//database below this
var user = require('../model/userdata.js');
var fanduel = require('../model/fanduelinfo.js');
var connection = require('../config/connection.js');

var spreadsheetIDNFL = "1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw";
var urlNFL = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNFL + "/od6/public/values?alt=json";
var spreadsheetIDNBA = "1iC9-Db33FCOaSA8avYkrgf4uMvMiTf1xJw3m5RbyH5A";
var urlNBA = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDNBA + "/od6/public/values?alt=json";

var fanduelSports = function() {
var fanduelNFLDB = function() {
    request(urlNFL, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var body = JSON.parse(body)

            connection.query("delete from googlesheetsapiNFL", function(err, fanduelData) {
                if (err) throw err;

                console.log("Clean NFL table, ready for update");
            })


            for (var i = 0; i < body.feed.entry.length; i++) {
                var myNFL = body.feed.entry[i];

                var turtle = [myNFL.gsx$player.$t, myNFL.gsx$sal.$t, myNFL.gsx$pos.$t, myNFL.gsx$team.$t, myNFL.gsx$rvp.$t, myNFL.gsx$totalopp.$t, myNFL.gsx$teamvaluevspos.$t, myNFL.gsx$winvsopp.$t, myNFL.gsx$ou.$t, myNFL.gsx$linechange.$t, myNFL.gsx$salchange.$t, myNFL.gsx$criteriascore.$t, myNFL.gsx$critrank.$t, myNFL.gsx$ppa.$t, myNFL.gsx$snapcount.$t, myNFL.gsx$fps.$t, myNFL.gsx$opp.$t, myNFL.gsx$playercount.$t, myNFL.gsx$injurystatus.$t, myNFL.gsx$recpre.$t, myNFL.gsx$ownership.$t,];
                fanduel.createfandueldataNFL(["Player", "Sal", "POS", "Team", "RvP", "TotalOpp", "TeamValueVsPos", "WinVsOpp", "OU", "Line_Change", "Sal_Change", "CriteriaScore", "CritRank", "PPA", "Snap_Count", "FPS", "Opp", "PlayerCount", "Injury_Status", "RecPre", "Ownership",
                ], [turtle[0], turtle[1], turtle[2], turtle[3], turtle[4], turtle[5], turtle[6], turtle[7], turtle[8], turtle[9], turtle[10], turtle[11], turtle[12],
                  turtle[13], turtle[14], turtle[15], turtle[16],turtle[17],
                  turtle[18],turtle[19],turtle[20]], function(nfldata) {
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

                var turtle = [myNBA.gsx$player.$t, myNBA.gsx$ha.$t, myNBA.gsx$position.$t, myNBA.gsx$team.$t, myNBA.gsx$opp.$t, myNBA.gsx$condition.$t, myNBA.gsx$details.$t, myNBA.gsx$posid.$t, myNBA.gsx$avgminsl10.$t, myNBA.gsx$projmins.$t, myNBA.gsx$salary.$t, myNBA.gsx$useage.$t, myNBA.gsx$ppgl10.$t, myNBA.gsx$ppm.$t, myNBA.gsx$ovp.$t, myNBA.gsx$gladjust.$t, myNBA.gsx$totaladjust.$t, myNBA.gsx$projscore.$t, myNBA.gsx$gameline.$t, myNBA.gsx$projectedpts.$t, myNBA.gsx$value.$t, myNBA.gsx$ownership.$t, myNBA.gsx$pathcompare.$t, myNBA.gsx$expectedvalue.$t, myNBA.gsx$netvalue.$t, myNBA.gsx$gamesplayed.$t, myNBA.gsx$salaryadjust.$t, myNBA.gsx$recpr.$t, myNBA.gsx$score.$t, myNBA.gsx$ptsvpos.$t, myNBA.gsx$delete.$t, myNBA.gsx$criteriaranking.$t, myNBA.gsx$playercount.$t]

                fanduel.createfandueldata(['Player', "HomeAway", "Position", "Team", "Opp", "Mycondition", "details", "posid", "AvgMinsL10", "ProjMins", "Salary", "Useage", "PPGL10", "PPM", "OVP", "GLAdjust", "TotalAdjust", "ProjScore", "GameLine", "ProjectedPts", "Value", "Ownership", "PathCompare", "ExpectedValue", "NetValue",
                    "GamesPlayed", "SalaryAdjust", "RecPr", "Score", "PTsVPos", "DeleteSuggested", "CriteriaRanking", "PlayerCount"
                ], [turtle[0], turtle[1], turtle[2], turtle[3], turtle[4], turtle[5], turtle[6], turtle[7], turtle[8], turtle[9], turtle[10], turtle[11], turtle[12],

                    turtle[13], turtle[14], turtle[15], turtle[16], turtle[17], turtle[18], turtle[19], turtle[20], turtle[21], turtle[22], turtle[23], turtle[24], turtle[25], turtle[26], turtle[27], turtle[28],
                    turtle[29], turtle[30], turtle[31], turtle[32]
                ], function(nbadata) {

                });
            }
        }
    });
  }
  fanduelNFLDB();
  fanduelNBADB();
}
module.exports = fanduelSports;
