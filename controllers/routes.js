var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
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

  request('http://www.rotoworld.com/playernews/nfl/football/', function (error, response, html) {
  // console.log('my name is tim',html);
    var $ = cheerio.load(html);
    var result = [];
    $('.report').each(function(i, element){

      var title = $(this).text();

      // var title = $(this).children('.report').text();
      // var impact = $(this).children('.impact').text();
      // var info = $(this).children('.info').text();
      console.log(title);
      if (title) {
        db.fantasynews.save({
          title:title
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
