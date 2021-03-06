var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require('cheerio');

var fanduel = require('../model/fanduelinfo.js');
var user = require('../model/userdata.js');
var connection = require('../config/connection.js');

var RotoWorld = require('./Rotoworld.js');

// router.get('/', function(req, res){
//
//   // var hbsObject = {
//   //   logged_in: req.session.logged_in,
//   //   user: user
//   // }
//   res.render('index');
// });
//
// router.get('/NFL', function (req,res){
// // "SELECT * FROM googlesheetsapiNFL where POS = 'QB' ORDER BY CritRank ASC;"
//   connection.query("SELECT * FROM googlesheetsapiNFL where Player <> '' ORDER BY POS DESC, Sal DESC;", function(err,fantasyNFL){
//     connection.query("SELECT * FROM googlesheetsapiNFL limit 1;", function(err,fantasyNFLDate){
//     if(err) throw err;
//       var hbsObject = {
//       fantasyNFL: fantasyNFL,
//       fantasyNFLDate: fantasyNFLDate
//       }
//     res.render('fantasydata/NFLfantasy_data', hbsObject);
//     })
//   })
// });

// router.get('/NBA', function (req,res){
//
//   connection.query("SELECT * FROM googlesheetsapi where Player <> '' ORDER BY ProjMins DESC, Salary DESC, CriteriaRanking DESC;", function(err,fantasyNBA){
//     connection.query("SELECT * FROM googlesheetsapi limit 1;", function(err,fantasyNBADate){
//     if(err) throw err;
//
//     var hbsObject = {
//     fantasyNBA: fantasyNBA,
//     fantasyNBADate: fantasyNBADate
//     }
//     res.render('fantasydata/NBAfantasy_data', hbsObject);
//     })
//   })
// });

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
