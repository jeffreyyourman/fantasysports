var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require('cheerio');

var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasytables.js');
var social = require('../model/social.js');
var connection = require('../config/connection.js');

var RotoWorld = require('./Rotoworld.js');
//fantasydata = fantasytables
// fantasynews = social
router.get('/', function(req, res){

  // var hbsObject = {
  //   logged_in: req.session.logged_in,
  //   user: user
  // }
  res.render('index');
});

router.get('/AllFantasy', function(req,res){

  social.allNewsNBA(function(fantasynewsNBA){
    social.allNews(function(fantasynewsNFL){

        var hbsObject = {
          logged_in: req.session.logged_in,
          user: user,
          fantasynewsNFL: fantasynewsNFL,
          fantasynewsNBA: fantasynewsNBA
        }
        res.render('users/chat', hbsObject)

      });
    });
});

router.get('/NFL', function (req,res){
      var hbsObject = {
        logged_in:req.session.logged_in,
      }
      res.render('fantasydata/NFLfantasy_data', hbsObject);
});

router.get('/NBA', function (req,res){
      var hbsObject = {
        logged_in:req.session.logged_in,
      }
      res.render('fantasydata/NBAfantasy_data', hbsObject);
});


router.get('/Profile', function(req,res){
    res.render('users/profile');
});

module.exports = router;
