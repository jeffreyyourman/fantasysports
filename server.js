var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

//allow sessions
app.use(session({secret: 'app', cookie: { maxAge: 60000}}));
app.use(cookieParser());

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

//this allows me to use handlebars
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
var fantasydata_controller = require('./controllers/fantasydata_controller.js');
var userdata_controller = require('./controllers/userdata_controller.js');

app.use('/', routes);
app.use('/users', routes);
app.use('/', fantasydata_controller);
app.use('/NFL', fantasydata_controller);
// app.use('/users', fantasydata_controller);
// app.use('/fantasydata', userdata_controller);
app.use('/users', userdata_controller);


var PORT = process.env.PORT || 3002;

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
