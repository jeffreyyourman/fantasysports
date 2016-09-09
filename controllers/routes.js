var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
// var dateFormat = require('dateformat');
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
  var url = 'http://www.cbssports.com/fantasy/football/players/news/all/'
    request(url, function (error, response, html) {
    // console.log('my name is tim',html);
      var $ = cheerio.load(html);

      var name,time,title,injuryreport;
      var json = {playernameandteam: '', time: '', playerreport: ''};

      $('div.players-annotated').each(function(i, element){
        // $('div.latest-updates').each(function(i, element){

          var player = $(this);
          playernameandteam = player.text();

          json.playernameandteam = playernameandteam;

          console.log('playernameandteam log', json.playernameandteam);

          // var report = $(this);

          // playerreport = report.text();

          // json.playerreport = playerreport;

          // console.log('player report log',json.playerreport);

        // });



      });

        // console.log('this is json object as a whole', json);
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

// if (playernews) {
//   db.fantasynews.save({
//     playernews:playernews,
//
//   }, function(err,saved){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(saved);
//     }
//   });
// }
