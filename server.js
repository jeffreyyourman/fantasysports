// var cookieParser = require('cookie-parser');
// var session = require('express-session');
var express = require('express');
// var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var request = require("request");
var passport = require("passport");
var Strategy = require("passport-facebook").Strategy;
var path = require("path");


// Passport / Facebook Authentication Information
passport.use(new Strategy({
  clientID: process.env.CLIENT_ID || "1887065321512806",
  clientSecret: process.env.CLIENT_SECRET || "5678c2982556970548de43a64789bba7",
  callbackURL: "http://localhost:3000/login/facebook/return"
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

var app = express();

//allow sessions
app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("express-session")({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(session({secret: 'app', cookie: { maxAge: 60000}}));
app.use(passport.initialize());
app.use(passport.session());

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


app.get('/load', function(req,res){
	var nbateams = new Fanduelplayers()
	res.redirect('/');
});

app.get("/login/facebook", passport.authenticate("facebook"));

// When Facebook is done, it uses the below route to determine where to go
app.get("/login/facebook/return",
  passport.authenticate("facebook", { failureRedirect: "/login" }),

  function(req, res) {
    res.redirect("/");
  });

// This page is available for viewing a hello message
// app.get("/inbox",
//   require("connect-ensure-login").ensureLoggedIn(),
//   function(req, res) {
//
//     res.sendFile(path.join(__dirname, "inbox.html"));
//
//   });

// This route is available for retrieving the information associated with the authentication method
// app.get("/api/inbox",
//   require("connect-ensure-login").ensureLoggedIn(),
//   function(req, res) {
//
//     res.json(req.user);
//
//   });



app.use('/', routes);
app.use('/users', routes);
app.use('/users', userdata_controller);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
