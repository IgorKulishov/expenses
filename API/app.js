//librarries
var express = require('express'),
	app = express(),
	port = 8000,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	expressSession = require('express-session'),
	db = mongoose.connect('mongodb://localhost/expenses');

var loginRouter = require('./src/js/routes/login.routes.js')(),
	appRouter = require('./src/js/routes/expenses.routes.js')();

//use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(expressSession({secret: 'schedule', resave: false, saveUninitialized: true}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
//passport configuration
require('./src/js/passConfig/passport.js')(app);

//routes
app.use('/login',  loginRouter)
   .use('/expenses', appRouter).listen(port, () => {
	console.log('listening on port ' + port);
});