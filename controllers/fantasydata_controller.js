var express = require('express');
var router = express.Router();
var dataTables = require('./main.js');


//connection to model files
var userdata = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

//connection to database;
var connection = require('../config/connection.js');

router.get('/tables', function(req,res){

var quarterback = new dataTables("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw", ".fantasyQB");

  quarterback.tableCall()

  setTimeout(function(){
    y = quarterback.displayData()
    res.json(y)
  },1000)


});

router.get('/NFL', function(req,res){
      var hbsObject = {
        logged_in:req.session.logged_in,
      }
      res.render('fantasydata/fantasy_data', hbsObject);
});
module.exports = router;
