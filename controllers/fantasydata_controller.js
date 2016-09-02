var express = require('express');
var router = express.Router();

//connection to model files
var userdata = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

//connection to database;
var connection = require('../config/connection.js')

router.get('/fantasy-data', function(req,res){
  fantasydata.allFantasyData(function(fantasydata){
    console.log('this is fantasydasta log in FDCONTROLLER', fantasydata);
    var hbsObject = {
      logged_in: req.session.logged_in,
      fantasydata:fantasydata
    }
    res.render('fantasydata/fantasy_data', hbsObject);
  });

});

module.exports = router;
