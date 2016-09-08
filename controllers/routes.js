var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
//models below
var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

var connection = require('../config/connection.js');

router.get('/', function(req, res){

    request('http://www.rotoworld.com/playernews/nfl/football/', function (error, response, html) {
    // console.log('my name is tim',html);
      var $ = cheerio.load(html);
      var result = [];
      $('div#cp1_ctl00_rptBlurbs_floatingcontainer_0').each(function(i, element){

          var title = $(element).children('.report').text()
          var description = $(element).children('.impact').text()
          var info = $(element).children('.info').text()
            //
            // console.log(title);
            // console.log(description);
            // console.log(info);
          result.push({
            title:title,
            description:description,
            info:info
          });
        });
      console.log(result);
    });

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
