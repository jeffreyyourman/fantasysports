var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');

var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');
var fantasynews = require('../model/fantasynews.js');
var connection = require('../config/connection.js');

router.get('/', function(req, res){
  // var url2NFL = 'http://www.cbssports.com/fantasy/football/players/news/all/2/';
  // var urlNBA = "http://www.cbssports.com/fantasy/basketball/players/news/all/";
  // var url2NBA = "http://www.cbssports.com/fantasy/basketball/players/news/all/2/";
  var urlNFL = 'http://www.rotoworld.com/playernews/nfl/football/'
  var urlNBA = "http://www.rotoworld.com/playernews/nba/basketball"

  function cheerioNBA(url) {
    request(url, function (error, response, html) {
      var $ = cheerio.load(html);
    $('div.report').each(function(i, element){
      var players = $(this).text();
      var impact = $(this).nextAll('div.impact').text();
      var info = $(this).nextAll('div.info').children('div.date').text();
        fantasynews.createNewsNBA(['fantasynews', 'fantasyimpact', 'fantasyinfo'], [players, impact, info], function(fantasynewsnba){
          var queryString = "delete t2 from fantasynewsnba t1 join fantasynewsnba t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);"

          connection.query(queryString, function(err, deleteduplicates) {

          });
        })
      });
    });
  }

  function cheerioNFL(url) {
    request(url, function (error, response, html) {
      var $ = cheerio.load(html);
    $('div.report').each(function(i, element){
      var players = $(this).text();
      var impact = $(this).nextAll('div.impact').text();
      var info = $(this).nextAll('div.info').children('div.date').text();
        fantasynews.createNews(['fantasynews', 'fantasyimpact', 'fantasyinfo'], [players, impact, info], function(fantasynewsnba){
          var queryString = "delete t2 from fantasynews t1 join fantasynews t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);"

          connection.query(queryString, function(err, deleteduplicates) {

          });
        })
      });
    });
  }
  cheerioNBA(urlNBA);
  cheerioNFL(urlNFL);


  // var email = req.session.user_email;
  // var condition = "email = '" + email + "'";
  fantasynews.allNewsNBA(function(fantasynewsNBA){
    fantasynews.allNews(function(fantasynewsNFL){
      // user.findOneUser(condition, function(user){
        var hbsObject = {
          logged_in: req.session.logged_in,
          user: user,
          fantasynewsNFL: fantasynewsNFL,
          fantasynewsNBA: fantasynewsNBA
        }
        res.render('index', hbsObject)
        // });
      });
    });
});
router.get('/sign-out', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  });
});

router.get('/Chat', function(req,res){
  res.render('users/chat')
});
module.exports = router;




// var now = new Date();

//models below
