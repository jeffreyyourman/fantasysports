
// function cheerioNBA(url) {
//   request(url, function (error, response, html) {
//     var $ = cheerio.load(html);
//     var json = {playernameandteam: ''};
//   $('div.player-news-desc').filter(function(i, element){
//     var playernameandteam = $(element).children('h4').text();
//
//     // console.log(newtime, time);
//       fantasynews.createNewsNBA(['fantasynews'], [playernameandteam], function(fantasynewsnba){
//          // can log here if i like
//          // delete t2 from fantasynewsnba t1 join fantasynewsnba t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);
//       })
//     });
//   });
// }
//
// function cheerioNFL(url) {
//   request(url, function (error, response, html) {
//     var $ = cheerio.load(html);
//     var json = {playernameandteam: ''};
//   $('div.player-news-desc').filter(function(i, element){
//       var playernameandteam = $(element).children('h4').text();
//       fantasynews.createNews(['fantasynews'], [playernameandteam], function(fantasynewsnba){
//         //can log here if i like
//       })
//     });
//   });
// }
// cheerioNBA(url2NBA);

//
// cheerioNFL(url2NFL);
// cheerioNFL(urlNFL);


// heroku restart -a wearefantasy .

// mysql -h uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com -u bx2ajv69tsflz7fv -pbk7cnbekaw907zll wl8zg20cpj22w77k < backup.sql

// mysqldump -h localhost -u root -p fantasy > backup.sql

//  delete t2 from fantasynewsnba t1 join fantasynewsnba t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);

// https://fantasydata.com/rss/rotoworld/?format=json

// SELECT * FROM fantasynewsnba ORDER BY fantasyinfo DESC;

// var email = req.session.user_email;
// var condition = "email = '" + email + "'";
    // user.findOneUser(condition, function(user){
      // });
// router.get('/sign-out', function(req,res){
// req.session.destroy(function(err){
//   res.redirect('/')
// });
// });
