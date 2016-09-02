var express = require('express');
var router = express.Router();
//models below
var userdata = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

var connection = require('../config/connection.js');

router.get('/', function(req, res){
  var hbsObject = {
    logged_in: req.session.logged_in
  }
  res.render('index', hbsObject);
});

router.get('/sign-out', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  });
});


module.exports = router;
