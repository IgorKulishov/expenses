var passport = require('passport');

var passportConfig = function(app) {

	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser((user, done) => {
		done(null, user);
	});
	passport.deserializeUser((user, done) => {
		done(null, user);
	});

	require('../passportStrategy/strategy.js')();
}

module.exports = passportConfig;