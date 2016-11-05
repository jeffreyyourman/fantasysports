var request = require("request");
var cheerio = require('cheerio');

var FanduelListNBA = function() {
  var urlplayers = 'https://www.numberfire.com/nba/daily-fantasy/daily-basketball-projections';

    request(urlplayers, function (error, response, html) {

      var $ = cheerio.load(html);

      $('a.full').each(function(i, element){
        var c = $(this);

        var players = c.text();
        console.log(players);

        fantasynews.createFanduelPlayersNBA(['nbaplayers'], [players], function(fanduelnbaplayers){
          console.log(fanduelnbaplayers);
        })
      // '<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j])
      });
    });
}

module.exports = FanduelListNBA;
