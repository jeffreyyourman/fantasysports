var express = require('express');
var router = express.Router();

//connection to model files
var userdata = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

//connection to database;
var connection = require('../config/connection.js')

router.get('/NFL', function(req,res){
  // fantasydata.allFantasyDataQB(function(fantasydataQB){
    // console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    // var hbsObject = {
      // logged_in: req.session.logged_in,
      // fantasydataQB:fantasydataQB
    // }
    res.render('fantasydata/fantasy_data');
  // });
});
router.get('/NFL/QB', function(req,res){
  fantasydata.allFantasyDataQB(function(fantasydataQB){
    console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    var hbsObject = {
      logged_in: req.session.logged_in,
      fantasydataQB:fantasydataQB
    }
    res.render('fantasydata/fantasy_data', hbsObject);
  });
});
router.get('/NFL/RB', function(req,res){
  fantasydata.allFantasyDataRB(function(fantasydataQB){
    console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    var hbsObject = {
      logged_in: req.session.logged_in,
      fantasydataQB:fantasydataQB
    }
    res.render('fantasydata/fantasy_data', hbsObject);
  });
});
router.get('/NFL/WR', function(req,res){
  fantasydata.allFantasyDataWR(function(fantasydataQB){
    console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    var hbsObject = {
      logged_in: req.session.logged_in,
      fantasydataQB:fantasydataQB
    }
    res.render('fantasydata/fantasy_data', hbsObject);
  });
});
router.get('/NFL/TE', function(req,res){
  fantasydata.allFantasyDataTE(function(fantasydataQB){
    console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    var hbsObject = {
      logged_in: req.session.logged_in,
      fantasydataQB:fantasydataQB
    }
    res.render('fantasydata/fantasy_data', hbsObject);
  });
});
router.get('/NFL/K', function(req,res){
  fantasydata.allFantasyDataK(function(fantasydataQB){
    console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    var hbsObject = {
      logged_in: req.session.logged_in,
      fantasydataQB:fantasydataQB
    }
    res.render('fantasydata/fantasy_data', hbsObject);
  });
});
router.get('/NFL/Def', function(req,res){
  fantasydata.allFantasyDataDef(function(fantasydataQB){
    console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    var hbsObject = {
      logged_in: req.session.logged_in,
      fantasydataQB:fantasydataQB
    }
    res.render('fantasydata/fantasy_data', hbsObject);
  });
});

module.exports = router;
