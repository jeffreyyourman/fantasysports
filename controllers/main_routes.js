var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require('cheerio');

var user = require('../model/userdata.js');
var connection = require('../config/connection.js');

var RotoWorld = require('./Rotoworld.js');
router.get('/', function(req, res){

  // var hbsObject = {
  //   logged_in: req.session.logged_in,
  //   user: user
  // }
  res.render('index');
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

router.get('/Contact', function(req,res){
  res.render('users/contactus');
});

module.exports = router;
