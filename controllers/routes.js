var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
// var dateFormat = require('dateformat');
// var now = new Date();
// date: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

//models below
var user = require('../model/userdata.js');
var fantasydata = require('../model/fantasydata.js');

var connection = require('../config/connection.js');

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "fantasy";
var collections = ["fantasynews"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});


router.get('/', function(req, res){
  var url = 'http://www.cbssports.com/fantasy/football/players/news/all/';
  var url2 = 'http://www.cbssports.com/fantasy/football/players/news/all/2/';
  var url3 = 'http://www.cbssports.com/fantasy/football/players/news/all/3/';
  var url4 = 'http://www.cbssports.com/fantasy/football/players/news/all/4/';
  request(url, function (error, response, html) {

  // console.log('my name is tim',html);
    var $ = cheerio.load(html);

    var name,time,title,injuryreport;
    // var json = {playernameandteam: '', time: '', playerreport: ''};
    var json = {playernameandteam: ''};

    $('div.player-news-desc').filter(function(i, element){

      var playernameandteam = $(element).children('h4').text();

      console.log('this is playername and team ', playernameandteam);

        if (playernameandteam) {
          db.fantasynews.save({
            playernameandteam:playernameandteam

          }, function(err,saved){
            if (err) {
              console.log(err);
            } else {
              console.log(saved);
            }
          });
        }
    });
  });

  // request(url2, function (error, response, html) {
  // // console.log('my name is tim',html);
  // var $ = cheerio.load(html);
  //
  // var name,time,title,injuryreport;
  // // var json = {playernameandteam: '', time: '', playerreport: ''};
  // var json = {playernameandteam: ''};
  //
  // $('div.player-news-desc').filter(function(i, element){
  //
  //   var playernameandteam = $(element).children('h4').text()
  //
  //   console.log('this is playername and team ', playernameandteam);
  //
  //     if (playernameandteam) {
  //       db.fantasynews.save({
  //         playernameandteam:playernameandteam
  //
  //
  //       }, function(err,saved){
  //         if (err) {
  //           // console.log('timmy');
  //           console.log(err);
  //         } else {
  //           // console.log('jason');
  //           console.log(saved);
  //         }
  //       });
  //     }
  // });
  // });


  var email = req.session.user_email;
  var condition = "email = '" + email + "'";

  db.fantasynews.find({},function(err, docs){
    // console.log('this is the docs',docs);
    user.findOneUser(condition, function(user){
      // console.log('this is the user logged in log', user);
      var hbsObject = {
        logged_in: req.session.logged_in,
        user: user,
        docs:docs
      }
      res.render('index', hbsObject)
      });
    });
});

router.get('/sign-out', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  });
});
module.exports = router;






var duplicates = [];

// db.fantasynews.aggregate([
//   { $match: {
//     name: { "$ne": '' }
//   }},
//   { $group: {
//     _id: { name: "$jsonplayername"},
//     dups: { "$addToSet": "$_id" },
//     count: { "$sum": 1 }
//   }},
//   { $match: {
//     count: { "$gt": 1 }
//   }}
// ])
// .result
// .forEach(function(doc) {
//     doc.dups.shift();
//     doc.dups.forEach( function(dupId){
//         duplicates.push(dupId);
//         }
//     )
// })
//
// printjson(duplicates);
//
// db.fantasynews.remove({_id:{$in:duplicates}})




// ================= original for duplicates below
// var duplicates = [];
//
// db.collectionName.aggregate([
//   { $match: {
//     name: { "$ne": '' }  // discard selection criteria
//   }},
//   { $group: {
//     _id: { name: "$name"}, // can be grouped on multiple properties
//     dups: { "$addToSet": "$_id" },
//     count: { "$sum": 1 }
//   }},
//   { $match: {
//     count: { "$gt": 1 }    // Duplicates considered as count greater than one
//   }}
// ])               // You can display result until this and check duplicates
// // If your result getting response in "result" then use else don't use ".result" in query
// .result
// .forEach(function(doc) {
//     doc.dups.shift();      // First element skipped for deleting
//     doc.dups.forEach( function(dupId){
//         duplicates.push(dupId);   // Getting all duplicate ids
//         }
//     )
// })
//
// // If you want to Check all "_id" which you are deleting else print statement not needed
// printjson(duplicates);
//
// // Remove all duplicates in one go
// db.collectionName.remove({_id:{$in:duplicates}})
