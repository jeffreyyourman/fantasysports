
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

// ========




  var spreadsheetIDqb = "1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw";
  var urlqb = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDqb + "/od6/public/values?alt=json";

      // if emptdy show all the appointments
      $.get(urlqb , function( data ) {

        //display all appointments with DATA
        $('.fantasyQB').DataTable({

          data: data.feed.entry,

          "dom": '<"NFLtable">frtip',
          "scrollX": true,
          "order": [[ 9, "desc" ]],

          "ordering": true,
          "info":     false,
          "bLengthChange": true,

          columns: [
            { data : 'gsx$week.$t' },
            { data : 'gsx$player.$t' },
            { data : 'gsx$sal.$t' },
            { data : 'gsx$pos.$t' },
            { data : 'gsx$team.$t' },
            { data : 'gsx$teamname.$t' },
            { data : 'gsx$id.$t' },
            { data : 'gsx$injurystatus.$t' },
            { data : 'gsx$typeinjury.$t' },
            { data : 'gsx$rvp.$t' },
            { data : 'gsx$playerrank.$t' },
            { data : 'gsx$oppdefrank.$t' },
            { data : 'gsx$fppg.$t' },
            { data : 'gsx$passattemptgame.$t' },
            { data : 'gsx$rushattgame.$t' },
            { data : 'gsx$totalopp.$t' },
            { data : 'gsx$ppa.$t' },
            { data : 'gsx$dova.$t' },
            { data : 'gsx$expectedwins.$t' },
            { data : 'gsx$pathexpectation.$t' },
            { data : 'gsx$ou.$t' },
            { data : 'gsx$ml.$t' },
            { data : 'gsx$sl.$t' },
            { data : 'gsx$endingml.$t' },
            { data : 'gsx$linechange.$t' },
            { data : 'gsx$salchange.$t' },
            { data : 'gsx$olscore.$t' },
            { data : 'gsx$playerrating.$t' },
            { data : 'gsx$criteriascore.$t' },
            { data : 'gsx$critrank.$t' },
            { data : 'gsx$recpre.$t' },
            { data : 'gsx$fps.$t' }
      ],
            "columnDefs": [
              { // Date columns
                "targets": 7,
                "createdCell": function (td, cellData, rowData, row, col) {
                  if ( cellData >= 20 ) {
                    $(td).css('background-color', 'lightgreen')
                  } else if ((cellData >= 10) && (cellData <= 19)) {
                    $(td).css('background-color', '#FFBD00')
                  } else if ((cellData) >= 0 && (cellData <= 9)) {
                    $(td).css('background-color', 'red')
                  }
                }
              },
              {
                targets: 11,
                "createdCell": function (td, cellData, rowData, row, col) {
                  // if ( cellData >= "35.00%" ) {
                  //   $(td).css('background-color', 'lightgreen')
                  // } else if ((cellData >= "24.00%") && (cellData <= "34.99%")) {
                  //   $(td).css('background-color', 'yellow')
                  // } else if ((cellData >= "16.00%") && (cellData <= "23.99%")) {
                  //   $(td).css('background-color', '#FFBD00')
                  // } else if (cellData <= "15.99%") {
                  //   $(td).css('background-color', 'red')
                  // }
                }
              }
            ]
          });
        });
    var spreadsheetIDrb = "15mSJN1WKrxFVJtIYT20sJS9mGr7f65Ow1XGLhHVuzDo";
    // Make sure it is public or set to Anyone with link can view
    var urlrb = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDrb + "/od6/public/values?alt=json";

      // if empty show all the appointments
      $.get(urlrb , function( data ) {

        //display all appointments with DATA
        $('.fantasyRB').DataTable( {

          data: data.feed.entry,

          "dom": '<"NFLtable">frtip',
          "scrollX": true,
          "order": [[ 9, "desc" ]],

          "ordering": true,
          "info":     false,
          "bLengthChange": true,

          columns: [
            { data : 'gsx$week.$t' },
            { data : 'gsx$player.$t' },
            { data : 'gsx$sal.$t' },
            { data : 'gsx$pos.$t' },
            { data : 'gsx$team.$t' },
            { data : 'gsx$teamname.$t' },
            { data : 'gsx$id.$t' },
            { data : 'gsx$injurystatus.$t' },
            { data : 'gsx$typeinjury.$t' },
            { data : 'gsx$spread.$t' },
            { data : 'gsx$rvp.$t' },
            { data : 'gsx$playerrank.$t' },
            { data : 'gsx$ppg.$t' },
            { data : 'gsx$rushattgame.$t' },
            { data : 'gsx$rectarg.$t' },
            { data : 'gsx$totalopp.$t' },
            { data : 'gsx$ppa.$t' },
            { data : 'gsx$rdova.$t' },
            { data : 'gsx$expectedwins.$t' },
            { data : 'gsx$pathexpectation.$t' },
            { data : 'gsx$ou.$t' },
            { data : 'gsx$ml.$t' },
            { data : 'gsx$sl.$t' },
            { data : 'gsx$endingml.$t' },
            { data : 'gsx$linechange.$t' },
            { data : 'gsx$salchange.$t' },
            { data : 'gsx$snapcount.$t' },
            { data : 'gsx$olrank.$t' },
            { data : 'gsx$recpre.$t' },
            { data : 'gsx$playerrating.$t' },
            { data : 'gsx$criteriascore.$t' },
            { data : 'gsx$critrank.$t' },
            { data : 'gsx$fps.$t' }
            ]
          });
        });

  var spreadsheetIDwr = "1gNVt-L_tVtvNSvoZpmocD91q7JShDjC370JqXo4E6Ko";
  var urlwr = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDwr + "/od6/public/values?alt=json";

    // if empty show all the appointments
    $.get(urlwr , function( data ) {
      $('.fantasyWR').DataTable( {

        data: data.feed.entry,

        "dom": '<"NFLtable">frtip',
        "scrollX": true,
        "order": [[ 9, "desc" ]],

        "ordering": true,
        "info":     false,
        "bLengthChange": true,

        columns: [
          { data : 'gsx$week.$t' },
          { data : 'gsx$player.$t' },
          { data : 'gsx$sal.$t' },
          { data : 'gsx$pos.$t' },
          { data : 'gsx$team.$t' },
          { data : 'gsx$teamname.$t' },
          { data : 'gsx$id.$t' },
          { data : 'gsx$injurystatus.$t' },
          { data : 'gsx$typeinjury.$t' },
          { data : 'gsx$spread.$t' },
          { data : 'gsx$qbscore.$t' },
          { data : 'gsx$rvp.$t' },
          { data : 'gsx$playerrank.$t' },
          { data : 'gsx$ppg.$t' },
          { data : 'gsx$rushattgame.$t' },
          { data : 'gsx$rectarg.$t' },
          { data : 'gsx$recs.$t' },
          { data : 'gsx$totalopp.$t' },
          { data : 'gsx$ppa.$t' },
          { data : 'gsx$pdova.$t' },
          { data : 'gsx$expectedwins.$t' },
          { data : 'gsx$pathexpectation.$t' },
          { data : 'gsx$ou.$t' },
          { data : 'gsx$ml.$t' },
          { data : 'gsx$sl.$t' },
          { data : 'gsx$endingml.$t' },
          { data : 'gsx$linechange.$t' },
          { data : 'gsx$salchange.$t' },
          { data : 'gsx$snapcount.$t' },
          { data : 'gsx$recpre.$t' },
          { data : 'gsx$playerrating.$t' },
          { data : 'gsx$criteriascore.$t' },
          { data : 'gsx$critrank.$t' },
          { data : 'gsx$fps.$t' }
          ]
        });
      });
//
  var spreadsheetIDte = "1UjVGzANuKJ-_ERg8f4ixjPW6AVL9bjCcIhyq4YK-Z0k";
  var urlte = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDte + "/od6/public/values?alt=json";

    // if empty show all the appointments
    $.get(urlte , function( data ) {
      //display all appointments with DATA
      $('.fantasyTE').DataTable( {

        data: data.feed.entry,

        "dom": '<"NFLtable">frtip',
        "scrollX": true,
        "order": [[ 9, "desc" ]],

        "ordering": true,
        "info":     false,
        "bLengthChange": true,

        columns: [
          { data : 'gsx$week.$t' },
          { data : 'gsx$player.$t' },
          { data : 'gsx$sal.$t' },
          { data : 'gsx$pos.$t' },
          { data : 'gsx$team.$t' },
          { data : 'gsx$teamname.$t' },
          { data : 'gsx$id.$t' },
          { data : 'gsx$injurystatus.$t' },
          { data : 'gsx$typeinjury.$t' },
          { data : 'gsx$spread.$t' },
          { data : 'gsx$qbscore.$t' },
          { data : 'gsx$rvp.$t' },
          { data : 'gsx$playerrank.$t' },
          { data : 'gsx$ppg.$t' },
          { data : 'gsx$rushattgame.$t' },
          { data : 'gsx$rectarg.$t' },
          { data : 'gsx$recs.$t' },
          { data : 'gsx$totalopp.$t' },
          { data : 'gsx$ppa.$t' },
          { data : 'gsx$pdova.$t' },
          { data : 'gsx$expectedwins.$t' },
          { data : 'gsx$pathexpectation.$t' },
          { data : 'gsx$ou.$t' },
          { data : 'gsx$ml.$t' },
          { data : 'gsx$sl.$t' },
          { data : 'gsx$endingml.$t' },
          { data : 'gsx$linechange.$t' },
          { data : 'gsx$salchange.$t' },
          { data : 'gsx$snapcount.$t' },
          { data : 'gsx$recentpre.$t' },
          { data : 'gsx$playerrating.$t' },
          { data : 'gsx$criteriascore.$t' },
          { data : 'gsx$critrank.$t' },
          { data : 'gsx$fps.$t' }
          ]
        });
      });

  var spreadsheetIDk = "1RWrzWmrAZqyLlmpqNnA8kKRk9fjFN3japYiAtztRWKs";
  var urlk = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDk + "/od6/public/values?alt=json";

    $.get(urlk , function( data ) {
      //display all appointments with DATA
      $('.fantasyK').DataTable( {

        data: data.feed.entry,

        "dom": '<"NFLtable">frtip',
        "scrollX": true,
        "order": [[ 9, "desc" ]],

        "ordering": true,
        "info":     false,
        "bLengthChange": true,

        columns: [
          { data : 'gsx$week.$t' },
          { data : 'gsx$player.$t' },
          { data : 'gsx$sal.$t' },
          { data : 'gsx$pos.$t' },
          { data : 'gsx$team.$t' },
          { data : 'gsx$teamname.$t' },
          { data : 'gsx$injurystatus.$t' },
          { data : 'gsx$typeinjury.$t' },
          { data : 'gsx$rvp.$t' },
          { data : 'gsx$playerrank.$t' },
          { data : 'gsx$ppg.$t' },
          { data : 'gsx$totalopp.$t' },
          { data : 'gsx$ppk.$t' },
          { data : 'gsx$expectedwins.$t' },
          { data : 'gsx$pathexpectation.$t' },
          { data : 'gsx$ou.$t' },
          { data : 'gsx$ml.$t' },
          { data : 'gsx$sl.$t' },
          { data : 'gsx$endingml.$t' },
          { data : 'gsx$linechange.$t' },
          { data : 'gsx$salchange.$t' },
          { data : 'gsx$recpre.$t' },
          { data : 'gsx$tdcon.$t' },
          { data : 'gsx$playerrating.$t' },
          { data : 'gsx$criteriascore.$t' },
          { data : 'gsx$critrank.$t' },
          { data : 'gsx$fps.$t' }
          ]
        });
      });

  var spreadsheetIDdef = "1B63c8kUsBMC3nHhIq2vErR-55b-SgiTlhGSYIA-G2X4";

  var urldef = "https://spreadsheets.google.com/feeds/list/" + spreadsheetIDdef + "/od6/public/values?alt=json";
  $.get(urldef , function( data ) {
    //display all appointments with DATA
    $('.fantasyDEF').DataTable( {

      "dom": '<"NFLtable">frtip',
      "scrollX": true,
      "order": [[ 9, "desc" ]],

      "ordering": true,
      "info":     false,
      "bLengthChange": true,

      columns: [
        { data : 'gsx$week.$t' },
        { data : 'gsx$player.$t' },
        { data : 'gsx$sal.$t' },
        { data : 'gsx$pos.$t' },
        { data : 'gsx$team.$t' },
        { data : 'gsx$teamname.$t' },
        { data : 'gsx$opp.$t' },
        { data : 'gsx$ppg.$t' },
        { data : 'gsx$oppqbinjurystatus.$t' },
        { data : 'gsx$typeinjury.$t' },
        { data : 'gsx$opp-qb-score.$t' },
        { data : 'gsx$rvp.$t' },
        { data : 'gsx$playerrank.$t' },
        { data : 'gsx$yardsallowed.$t' },
        { data : 'gsx$defdova.$t' },
        { data : 'gsx$oppodova.$t' },
        { data : 'gsx$combineddova.$t' },
        { data : 'gsx$expectedwins.$t' },
        { data : 'gsx$pathexpectation.$t' },
        { data : 'gsx$ou.$t' },
        { data : 'gsx$ml.$t' },
        { data : 'gsx$sl.$t' },
        { data : 'gsx$endingml.$t' },
        { data : 'gsx$linechange.$t' },
        { data : 'gsx$salchange.$t' },
        { data : 'gsx$playerrating.$t' },
        { data : 'gsx$criteriascore.$t' },
        { data : 'gsx$critrank.$t' },
        { data : 'gsx$recp.$t' },
        { data : 'gsx$fps.$t' }
        ]
      });
    });

    // {
    //   "name": "fantasysports",
    //   "version": "1.0.0",
    //   "description": "",
    //   "main": "server.js",
    //   "scripts": {
    //     "test": "echo \"Error: no test specified\" && exit 1",
    //     "start": "node server.js"
    //   },
    //   "author": "",
    //   "license": "ISC",
    //   "repository": {
    //     "type": "git",
    //     "url": "git+https://https://github.com/jeffreyyourman/fantasysports.git"
    //   },
    //   "dependencies": {
    //     "bcryptjs": "^2.3.0",
    //     "body-parser": "^1.15.2",
    //     "callevery": "^1.0.6",
    //     "cheerio": "^0.22.0",
    //     "cookie-parser": "^1.4.3",
    //     "csv": "^1.1.0",
    //     "dateformat": "^1.0.12",
    //     "express": "^4.14.0",
    //     "express-handlebars": "^3.0.0",
    //     "express-session": "^1.14.1",
    //     "fs": "0.0.1-security",
    //     "google-auth-library": "^0.9.8",
    //     "googleapis": "^14.0.0",
    //     "method-override": "^2.3.6",
    //     "moment": "^2.15.1",
    //     "multer": "^1.2.0",
    //     "mysql": "^2.11.1",
    //     "node-schedule": "^1.2.0",
    //     "nodemailer": "^2.5.0",
    //     "nodemon": "^1.10.2",
    //     "readline": "^1.3.0",
    //     "request": "^2.76.0",
    //     "util": "^0.10.3"
    //   }
    // }
