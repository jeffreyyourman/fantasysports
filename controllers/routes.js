var express = require('express');
var router = express.Router();
//models below
var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

var connection = require('../config/connection.js');

router.get('/', function(req, res){
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
