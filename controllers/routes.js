var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
// var dateFormat = require('dateformat');
// var now = new Date();
// date: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

//models below
var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

var connection = require('../config/connection.js');

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "fantasy";
var collections = ["fantasynews"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});


router.get('/', function(req, res){
  var url = 'http://www.cbssports.com/fantasy/football/players/news/all/';
  var url2 = 'http://www.cbssports.com/fantasy/football/players/news/all/2/';
  var url3 = 'http://www.cbssports.com/fantasy/football/players/news/all/3/';
  var url4 = 'http://www.cbssports.com/fantasy/football/players/news/all/4/';

  request(url2, function (error, response, html) {
  // console.log('my name is tim',html);
    var $ = cheerio.load(html);

    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};

      $('div.latest-updates').filter(function(i, element){

        var player = $(this);
        playernameandteam = player.text();

        json.playernameandteam = playernameandteam;
        var jsonplayername = json.playernameandteam
        console.log('playernameandteam log', json.playernameandteam);

        if (jsonplayername) {
          db.fantasynews.save({
            jsonplayername:jsonplayername,


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
    request(url, function (error, response, html) {
    // console.log('my name is tim',html);
      var $ = cheerio.load(html);

      var name,time,title,injuryreport;
      // var json = {playernameandteam: '', time: '', playerreport: ''};
      var json = {playernameandteam: ''};

        $('div.latest-updates').filter(function(i, element){

          var player = $(this);
          playernameandteam = player.text();

          json.playernameandteam = playernameandteam;
          var jsonplayername = json.playernameandteam
          console.log('playernameandteam log', json.playernameandteam);

          if (jsonplayername) {
            db.fantasynews.save({
              jsonplayername:jsonplayername,
              date: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

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

  var email = req.session.user_email;
  var condition = "email = '" + email + "'";

  user.findOneUser(condition, function(user){
    console.log('this is the user logged in log', user);
    var hbsObject = {
      logged_in: req.session.logged_in,
      user: user
    }
    res.render('index', hbsObject)
  });
});





router.get('/sign-out', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  });
});
module.exports = router;
