var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var Twitter = require('twitter');

var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');
var fantasynews = require('../model/fantasynews.js');
var connection = require('../config/connection.js');

router.get('/', function(req, res){
  var urlNFL = 'http://www.cbssports.com/fantasy/football/players/news/all/';
  var url2NFL = 'http://www.cbssports.com/fantasy/football/players/news/all/2/';
  var urlNBA = "http://www.cbssports.com/fantasy/basketball/players/news/all/";
  var url2NBA = "http://www.cbssports.com/fantasy/basketball/players/news/all/2/";

  function cheerioNBA(url) {
    request(url, function (error, response, html) {
      var $ = cheerio.load(html);
      var json = {playernameandteam: ''};
    $('div.player-news-desc').filter(function(i, element){
        var playernameandteam = $(element).children('h4').text();
        fantasynews.createNewsNBA(['fantasynews'], [playernameandteam], function(fantasynewsnba){
          //can log here if i like
        })
      });
    });
  }

  function cheerioNFL(url) {
    request(url, function (error, response, html) {
      var $ = cheerio.load(html);
      var json = {playernameandteam: ''};
    $('div.player-news-desc').filter(function(i, element){
        var playernameandteam = $(element).children('h4').text();
        fantasynews.createNews(['fantasynews'], [playernameandteam], function(fantasynewsnba){
          //can log here if i like
        })
      });
    });
  }
  cheerioNBA(urlNBA);
  cheerioNBA(url2NBA);

  cheerioNFL(urlNFL);
  cheerioNFL(url2NFL);

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



// var dateFormat = require('dateformat');
// var now = new Date();
// date: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")
//models below
