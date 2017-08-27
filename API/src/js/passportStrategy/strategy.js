var passport = require('passport'),
	localStrategy = require('passport-local').Strategy,
	loginModel = require('../model/login.model.js');

module.exports = function() {
	passport.use(new localStrategy({
		usernameField: 'userName',
		passwordField: 'password'
	},
	function(username, password, done) {
		var user = {
			username: username,
			password: password
		};
		console.log('Strategy user ', user);
		//verify password
		loginModel.find({ userName: username, password: password }, (err, data) => {
			console.log('data:', data)
			if(err) {
				console.log('error fetching data' , err);
				res.render('<h1>There is no such record</h1>');
			} else {
				if(data.length == 0) {
					console.log('no results');
					done('Wrong password', null);
				} else if(data[0].password == password) {
					console.log('password matches');
					done(null, user);
				} else {
					console.log('password does not match');
					done('Wrong password', null);
				}
			}
		});
		
	}));
}