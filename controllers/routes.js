var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var Twitter = require('twitter');
// var dateFormat = require('dateformat');
// var now = new Date();
// date: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")
//models below
var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');
var fantasynews = require('../model/fantasynews.js');
var connection = require('../config/connection.js');

router.get('/', function(req, res){
  var urlNFL = 'http://www.cbssports.com/fantasy/football/players/news/all/';
  var url2NFL = 'http://www.cbssports.com/fantasy/football/players/news/all/2/';
  var url3NFL = 'http://www.cbssports.com/fantasy/football/players/news/all/3/';
  var url4NFL = 'http://www.cbssports.com/fantasy/football/players/news/all/4/';
  var urlNBA = "http://www.cbssports.com/fantasy/basketball/players/news/all/";
  var url2NBA = "http://www.cbssports.com/fantasy/basketball/players/news/all/2/";

  request(url2NBA, function (error, response, html) {
    var $ = cheerio.load(html);
    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};
  $('div.player-news-desc').filter(function(i, element){
      var playernameandteam = $(element).children('h4').text();
      fantasynews.createNewsNBA(['fantasynews'], [playernameandteam], function(fantasynewsnba){
        //can log here if i like
      })
    });
  });

  request(urlNBA, function (error, response, html) {
    var $ = cheerio.load(html);
    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};
  $('div.player-news-desc').filter(function(i, element){
      var playernameandteam = $(element).children('h4').text();
      fantasynews.createNewsNBA(['fantasynews'], [playernameandteam], function(fantasynewsnba){
        //can log here if i like
      })
    });
  });

  request(url2NFL, function (error, response, html) {
    var $ = cheerio.load(html);
    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};
  $('div.player-news-desc').filter(function(i, element){
      var playernameandteam = $(element).children('h4').text();
      fantasynews.createNews(['fantasynews'], [playernameandteam], function(fantasynews){
        //can log here if i like
      })
    });
  });

  request(urlNFL, function (error, response, html) {
    var $ = cheerio.load(html);
    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};
  $('div.player-news-desc').filter(function(i, element){
      var playernameandteam = $(element).children('h4').text();
      fantasynews.createNews(['fantasynews'], [playernameandteam], function(fantasynews){
        //can log here if i like
      })
    });
  });

  var email = req.session.user_email;
  var condition = "email = '" + email + "'";
  fantasynews.allNewsNBA(function(fantasynewsNBA){
    console.log('all fantasynews log for nnba',fantasynewsNBA);
    fantasynews.allNews(function(fantasynewsNFL){
      console.log('all fantasynews log for nfl',fantasynewsNFL);
      user.findOneUser(condition, function(user){
        var hbsObject = {
          logged_in: req.session.logged_in,
          user: user,
          fantasynewsNFL: fantasynewsNFL,
          fantasynewsNBA: fantasynewsNBA
        }
        res.render('index', hbsObject)
        });
      });
    });
});
router.get('/sign-out', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  });
});
module.exports = router;
