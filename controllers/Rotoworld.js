var request = require("request");
var cheerio = require('cheerio');

function Rotoworld () {
  var urlNFL = 'http://www.rotoworld.com/playernews/nfl/'
  var urlNBA = "http://www.rotoworld.com/playernews/nba/"


    request(urlNBA, function (error, response, html) {

      var $ = cheerio.load(html);

    $('div.report').each(function(i, element){
      var c = $(this);

      var players = c.text();
      var impact = c.nextAll('div.impact').text();
      var info = c.nextAll('div.info').children('div.date').text();

        fantasynews.createNewsNBA(['fantasynews', 'fantasyimpact', 'fantasyinfo'], [players, impact, info], function(fantasynewsnba){

          var queryString = "delete t2 from FantasyNewsNBA t1 join FantasyNewsNBA t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);";

          connection.query(queryString, function(err, deleteduplicates) {
            // console.log(deleteduplicates);
          });
        })
      });
    });


    request(urlNFL, function (error, response, html) {

    var $ = cheerio.load(html);

    $('div.report').each(function(i, element){
      var c = $(this)
      var players = c.text();
      var impact = c.nextAll('div.impact').text();
      var info = c.nextAll('div.info').children('div.date').text();

        fantasynews.createNews(['fantasynews', 'fantasyimpact', 'fantasyinfo'], [players, impact, info], function(fantasynewsnfl){

          var queryString = "delete t2 from FantasyNews t1 join FantasyNews t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);"

          connection.query(queryString, function(err, deleteduplicates) {
            // console.log(deleteduplicates);
          });
        })
      });
    });
}


module.exports = Rotoworld;
