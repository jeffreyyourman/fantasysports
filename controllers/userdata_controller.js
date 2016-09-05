var bcrypt = require("bcryptjs");
var express = require("express");
var router = express.Router();
var user = require('../model/userdata.js');
//db connection below
var connection = require('../config/connection.js');

router.post('/login', function(req,res){
  var email = req.body.email;

  var condition = "email = '" + email + "'";

  user.findOneUser(condition, function(user){

    if (user){
			bcrypt.compare(req.body.password, user.password, function(err, result) {
					if (result == true){

						req.session.logged_in = true;
						req.session.user_id = user.userId;
						req.session.user_email = user.email;
						console.log('this is req.session log', req.session);
						res.redirect('/');
					}else{
            res.send('You put in the wrong password.')
          }
			});
		}else{
			res.send('an account with this email does not exist - please sign up')
		}
  });
});

router.post('/register', function(req,res){
	var queryString = "Select * from Users where email = '" + req.body.email + "'";

	connection.query(queryString, function(err,Users){
		if (err) throw err;
		if (users.length > 0) {
			res.send('we already have an email or username for this account');
		} else {
			bcrypt.genSalt(10, function(err,salt){
				bcrypt.hash(req.body.password,salt, function(err,hash){
					user.createUser(["fullname", "email","username", "password"], [req.body.fullname, req.body.email,req.body.username, hash], function(user){

	          req.session.username = req.body.username;//we need to grab the username from the form because we don't get it back from MySQL. If we wanted to grab it, then we'd have to do another sql query but it's unnecessary since we already have it here.
	          req.session.user_email = req.body.email; //we need to grab the email from the form because we don't get it back from MySQL. If we wanted to grab it, then we'd have to do another sql query but it's unnecessary since we already have it here.
	          req.session.logged_in = true;
	          req.session.user_id = user.insertId; //the MySQL npm package returns the id of the record inserted with a key of insertId.

	          res.redirect('/')
						console.log(req.session);
						console.log(req.session.logged_in);
						console.log(req.session.username);
					});
				});
			});
		}
	});
});
module.exports = router;
