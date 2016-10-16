var express = require('express');
var router = express.Router();
var dataTables = require('./main');

//connection to model files
var userdata = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

//connection to database;
var connection = require('../config/connection.js')

router.get('/NFL', function(req,res){
      console.log(dataTables);
      var hbsObject = {
        logged_in:req.session.logged_in
      }
      res.render('fantasydata/fantasy_data', hbsObject);
});
module.exports = router;
