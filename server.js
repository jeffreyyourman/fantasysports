// URL Blocked: This redirect failed because the redirect URI is not whitelisted in the app’s Client OAuth Settings. Make sure Client and Web OAuth Login are on and add all your app domains as Valid OAuth Redirect URIs.

var cookieParser = require('cookie-parser');
// var session = require('express-session');
var express = require('express');
var app = express();
// const keys = require("./keys.js");
// var methodOverride = require('method-override');
//Database configuration
// var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var request = require("request");
var passport = require("passport");
var Strategy = require("passport-facebook").Strategy;
var path = require("path");


// Passport / Facebook Authentication Information
passport.use(new Strategy({
  clientID: process.env.CLIENT_ID || "408732649970689",
  clientSecret: process.env.CLIENT_SECRET || "7bdae4fb8fd3ce8041fe52d0910e9e95",
  callbackURL: "https://dfsanalysts.herokuapp.com/login/facebook/return"
  // clientID: process.env.CLIENT_ID || "1887065321512806",
  // clientSecret: process.env.CLIENT_SECRET || "5678c2982556970548de43a64789bba7",
  // callbackURL: "http://localhost:3000/login/facebook/return"

},
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user"s Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application"s database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
//
// If the above doesn"t make sense... don"t worry. I just copied and pasted too.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});



//allow sessions
app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("express-session")({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(session({secret: 'app', cookie: { maxAge: 60000}}));
app.use(passport.initialize());
app.use(passport.session());
//
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/main_routes.js');
var userdata_controller = require('./controllers/userdata_controller.js');
var Fanduelplayers = require('./controllers/Fanduelplayers.js');
var FanduelplayersNFL = require('./controllers/FanduelplayersNFL.js');
var lineupbuilder = require('./controllers/lineupbuilder.js');


app.get('/load', function(req,res){
	var nbateams = new Fanduelplayers()
	res.redirect('/');
});

app.get('/loadnfl', function(req,res){
	var NFLteams = new FanduelplayersNFL()
	res.redirect('/');
});

app.get("/login/facebook", passport.authenticate("facebook"));

// When Facebook is done, it uses the below route to determine where to go
app.get("/login/facebook/return",
  passport.authenticate("facebook", { failureRedirect: "/login" }),

  function(req, res) {
    res.redirect("/");
  });
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


  app.get('/', function(req, res){
    var requser = req.user;
    var hbsObject = {
      requser:requser
    }
      res.render('index', hbsObject);
  });

  app.get('/NFL', function (req,res){
    var requser = req.user;
  // "SELECT * FROM googlesheetsapiNFL where POS = 'QB' ORDER BY CritRank ASC;"
    connection.query("SELECT * FROM googlesheetsapiNFL where Player <> '' ORDER BY POS DESC, Sal DESC;", function(err,fantasyNFL){
      connection.query("SELECT DISTINCT Team FROM googlesheetsapiNFL order by Team;", function(err,fantasyNFLTeams){
        connection.query("SELECT * FROM googlesheetsapiNFL limit 1;", function(err,fantasyNFLDate){
          if(err) throw err;
            var hbsObject = {
              fantasyNFL: fantasyNFL,
              fantasyNFLDate: fantasyNFLDate,
              fantasyNFLTeams: fantasyNFLTeams,
              requser:requser
            }
          res.render('fantasydata/NFLfantasy_data', hbsObject);
        })
      })
    })
  });


app.get('/NBAFanduel', function (req,res){

var requser = req.user;

  connection.query("SELECT * FROM googlesheetsapi where Player <> '' ORDER BY ProjMins DESC, Salary DESC, CriteriaRanking DESC;", function(err,fantasyNBA){
    connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'PG' AND topPlayerValue = 'Top' AND Site='FD'", function(err,fantasyNBATopPGPlay){
      connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'SG' AND topPlayerValue = 'Top' AND Site='FD'", function(err,fantasyNBATopSGPlay){
        connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'SF' AND topPlayerValue = 'Top' AND Site='FD'", function(err,fantasyNBATopSFPlay){
          connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'PF' AND topPlayerValue = 'Top' AND Site='FD'", function(err,fantasyNBATopPFPlay){
            connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'C' AND topPlayerValue = 'Top' AND Site='FD'", function(err,fantasyNBATopCPlay){
              connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'PG' AND topPlayerValue = 'Value' AND Site='FD' ORDER BY PlayerRanking;", function(err,fantasyNBATopPGValue){
                connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'SG' AND topPlayerValue = 'Value' AND Site='FD' ORDER BY PlayerRanking;", function(err,fantasyNBATopSGValue){
                  connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'SF' AND topPlayerValue = 'Value' AND Site='FD' ORDER BY PlayerRanking;", function(err,fantasyNBATopSFValue){
                    connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'PF' AND topPlayerValue = 'Value' AND Site='FD' ORDER BY PlayerRanking;", function(err,fantasyNBATopPFValue){
                      connection.query("SELECT * FROM googlesheetsapiNBATopPlays where POS = 'C' AND topPlayerValue = 'Value' AND Site='FD' ORDER BY PlayerRanking;", function(err,fantasyNBATopCValue){

                        connection.query("SELECT * FROM googlesheetsapi limit 1;", function(err,fantasyNBADate){
                          connection.query("SELECT DISTINCT Team FROM googlesheetsapi Where Team <> '' order by Team;", function(err,fantasyNBATeams){
                            if(err) throw err;
                              var hbsObject = {
                                fantasyNBA: fantasyNBA,
                                fantasyNBADate: fantasyNBADate,
                                fantasyNBATopPGPlay: fantasyNBATopPGPlay,
                                fantasyNBATopSGPlay: fantasyNBATopSGPlay,
                                fantasyNBATopSFPlay: fantasyNBATopSFPlay,
                                fantasyNBATopPFPlay: fantasyNBATopPFPlay,
                                fantasyNBATopCPlay: fantasyNBATopCPlay,
                                fantasyNBATopPGValue: fantasyNBATopPGValue,
                                fantasyNBATopSGValue: fantasyNBATopSGValue,
                                fantasyNBATopSFValue: fantasyNBATopSFValue,
                                fantasyNBATopPFValue: fantasyNBATopPFValue,
                                fantasyNBATopCValue: fantasyNBATopCValue,
                                fantasyNBATeams: fantasyNBATeams,
                                requser:requser
                              }
                            res.render('fantasydata/NBAfantasy_data', hbsObject);
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});

app.get('/NBADraftkings', function (req,res){

var requser = req.user;

connection.query("SELECT * FROM googlesheetsapi where Player <> '' ORDER BY ProjMins DESC, Salary DESC, CriteriaRanking DESC;", function(err,fantasyNBA){
  connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%PG%' AND topPlayerValue = 'Top' AND Site='DK' ORDER BY ProjectedPts DESC;", function(err,fantasyNBATopPGPlay){
    connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%SG%' AND topPlayerValue = 'Top' AND Site='DK' ORDER BY ProjectedPts DESC;", function(err,fantasyNBATopSGPlay){
      connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%SF%' AND topPlayerValue = 'Top' AND Site='DK' ORDER BY ProjectedPts DESC;", function(err,fantasyNBATopSFPlay){
        connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%PF%' AND topPlayerValue = 'Top' AND Site='DK' ORDER BY ProjectedPts DESC;", function(err,fantasyNBATopPFPlay){
          connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%C%' AND topPlayerValue = 'Top' AND Site='DK' ORDER BY ProjectedPts DESC;", function(err,fantasyNBATopCPlay){
            connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%PG%' AND topPlayerValue = 'Value' AND Site='DK' ORDER BY PlayerRanking;", function(err,fantasyNBATopPGValue){
              connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%SG%' AND topPlayerValue = 'Value' AND Site='DK' ORDER BY PlayerRanking;", function(err,fantasyNBATopSGValue){
                connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%SF%' AND topPlayerValue = 'Value' AND Site='DK' ORDER BY PlayerRanking;", function(err,fantasyNBATopSFValue){
                  connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%PF%' AND topPlayerValue = 'Value' AND Site='DK' ORDER BY PlayerRanking;", function(err,fantasyNBATopPFValue){
                    connection.query("SELECT DISTINCT Player, POS, Sal, ProjectedPts, PlayerValue FROM googlesheetsapiNBATopPlays where POS like '%C%' AND topPlayerValue = 'Value' AND Site='DK' ORDER BY PlayerRanking;", function(err,fantasyNBATopCValue){
                        connection.query("SELECT DISTINCT Team FROM googlesheetsapi Where Team <> '' order by Team;", function(err,fantasyNBATeams){

                        connection.query("SELECT * FROM googlesheetsapi limit 1;", function(err,fantasyNBADate){
                          if(err) throw err;

                            var hbsObject = {
                              fantasyNBA: fantasyNBA,
                              fantasyNBADate: fantasyNBADate,
                              fantasyNBATopPGPlay: fantasyNBATopPGPlay,
                              fantasyNBATopSGPlay: fantasyNBATopSGPlay,
                              fantasyNBATopSFPlay: fantasyNBATopSFPlay,
                              fantasyNBATopPFPlay: fantasyNBATopPFPlay,
                              fantasyNBATopCPlay: fantasyNBATopCPlay,
                              fantasyNBATopPGValue: fantasyNBATopPGValue,
                              fantasyNBATopSGValue: fantasyNBATopSGValue,
                              fantasyNBATopSFValue: fantasyNBATopSFValue,
                              fantasyNBATopPFValue: fantasyNBATopPFValue,
                              fantasyNBATopCValue: fantasyNBATopCValue,
                              fantasyNBATeams: fantasyNBATeams,
                              requser:requser
                            }
                          res.render('fantasydata/nbadk', hbsObject);
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});


  app.get('/NBAAdvice', function(req,res){
    var requser = req.user;

    var hbsObject = {
    requser:requser
    }
    res.render('fantasydata/blog', hbsObject);
  });
  app.get('/FanduelLineup', function(req,res){
    var requser = req.user;

    var lineupbuilderQuery = "select * from fanduellineup";
      connection.query(lineupbuilderQuery, function(err, lineupbuilderQuery1) {
        if (err) throw err;
        console.log('===============');
        console.log(lineupbuilderQuery1);
          var hbsObject = {
          requser:requser,
          lineupbuilderQuery1: lineupbuilderQuery1
          }
          res.render('fantasydata/lineupbuilder', hbsObject);
        });
      });

  app.get('/NBAPodcast', function(req,res){
    var requser = req.user;

    var hbsObject = {
    requser:requser
    }
    res.render('fantasydata/podcast', hbsObject);
    // res.render('fantasydata/nextBlogPage', hbsObject);
  });

// This route is available for retrieving the information associated with the authentication method
  app.get("/willyDJ", function(req, res) {
    res.json(req.user);
  });



  app.get('/loadlineup', function(req,res){
    var nbabuilderquery = new lineupbuilder()
    res.redirect('/NBAFanduel');
  });
  app.get('/Contact', function(req,res){
    var requser = req.user;

    var hbsObject = {
    requser:requser
    }
    res.render('users/contactus', hbsObject);
  });

  app.get('/Comparison', function(req,res){
    var requser = req.user;

    var hbsObject = {
    requser:requser
    }
    res.render('fantasydata/comparison', hbsObject);
  });

app.use('/', routes);
app.use('/users', routes);
// app.use('/users', userdata_controller);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
