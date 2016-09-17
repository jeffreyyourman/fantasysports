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
var connection = require('../config/connection.js');
var bla = require('../config/blabla.js');
//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "fantasy";
var collections = ["fantasynews", "fantasytweets"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});

router.get('/', function(req, res){
  var url = 'http://www.cbssports.com/fantasy/football/players/news/all/';
  var url2 = 'http://www.cbssports.com/fantasy/football/players/news/all/2/';
  var url3 = 'http://www.cbssports.com/fantasy/football/players/news/all/3/';
  var url4 = 'http://www.cbssports.com/fantasy/football/players/news/all/4/';
  request(url, function (error, response, html) {
    var $ = cheerio.load(html);
    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};
  $('div.player-news-desc').filter(function(i, element){
      var playernameandteam = $(element).children('h4').text();
        if (playernameandteam) {
          db.fantasynews.save({
            playernameandteam:playernameandteam
          }, function(err,saved){
            if (err) {
              console.log(err);
            } else {
              console.log(saved);
            }
          });
        }
    });
  });

  request(url2, function (error, response, html) {
    var $ = cheerio.load(html);
    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};
    $('div.player-news-desc').filter(function(i, element){
      var playernameandteam = $(element).children('h4').text()
        if (playernameandteam) {
          db.fantasynews.save({
            playernameandteam:playernameandteam
          }, function(err,saved){
            if (err) {
              console.log(err);
            } else {
              console.log(saved);
            }
          });
        }
    });
  });
  var client = new Twitter(bla.twitterKeys);

  var params = {screen_name: 'Jeff12D21'};
    client.get('statuses/user_timeline', params, function(error, tweets, response){
      if (!error) {
        for(var i=0; i < tweets.length; i++){
          var fantasytweets = {
            created_at: tweets[i].created_at,
            text: tweets[i].text
          }
          if (fantasytweets) {
            db.fantasytweets.save({
              fantasytweets:fantasytweets
            }, function(err,saved){
              if (err) {
                console.log(err);
              } else {
                console.log(saved);
              }
            });
          }
        }
      }
    });

    
  var email = req.session.user_email;
  var condition = "email = '" + email + "'";
  db.fantasynews.find({},function(err, docnews){
    db.fantasytweets.find({},function(err, doctweets){
      user.findOneUser(condition, function(user){
        var hbsObject = {
          logged_in: req.session.logged_in,
          user: user,
          docnews:docnews,
          doctweets:doctweets
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
