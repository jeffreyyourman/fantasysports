var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require('cheerio');

var fanduel = require('../model/fanduelinfo.js');
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
// "SELECT * FROM googlesheetsapiNFL where POS = 'QB' ORDER BY CritRank ASC;"
  connection.query("SELECT * FROM googlesheetsapiNFL ORDER BY CritRank ASC;", function(err,fantasyNFL){
    if(err) throw err;
      var hbsObject = {
        fantasyNFL: fantasyNFL
      }
        res.render('fantasydata/NFLfantasy_data', hbsObject);
      })
  });

router.get('/NBA', function (req,res){
  connection.query("SELECT * FROM googlesheetsapi ORDER BY CriteriaRanking DESC;", function(err,fantasyNBA){
    if(err) throw err;

      var hbsObject = {
        fantasyNBA: fantasyNBA
      }
        res.render('fantasydata/NBAfantasy_data', hbsObject);
      })
  });

router.get('/Contact', function(req,res){
  res.render('users/contactus');
});

router.get('/search/:id',function(req,res){
  var sTerm = req.params.id

  fanduel.searchfandueldata(sTerm, function(data){
  console.log(data);
  res.json([data])
})
})

module.exports = router;
