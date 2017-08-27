var express = require('express'),
	router  = express.Router(),
	loginModel = require('../model/login.model.js'),
	passport = require('passport'),
	newUser;

// all routes
var loginRouters = function(){
	return router
			.post('/login', passport.authenticate('local', {
				// failureRedirect: '/login/login'
			}), (req, res) => {
				console.log('user from login  before redirect: ', req.user);
				console.log('session from login  before redirect: ', req.session.id);
				res.redirect('/expenses/expense-details/' + req.user.username);
				// res.redirect('/login/logintest');
			})
			.get('/login', passport.authenticate('local', {
				// failureRedirect: '/login/login'
			}), (req, res) => {
				console.log('user from login  before redirect: ', req.user);
				console.log('session from login  before redirect: ', req.session.id);
				res.redirect('/expenses/expense-details/' + req.user.username);
				// res.redirect('/login/logintest');
			})
			.get('/logout', (req, res) => {
					req.session.destroy((err) => {
						console.log('destroy session ', req.session);
						console.log('destroy user ', req.user);
						res.redirect('/login/login');
					});
			})
			//register new user
			.get('/register', (req, res) => {
				if(req) {
					newUser = new loginModel({
						userName  : req.query.userName,
						firstName : req.query.firstName,
						lastName  : req.query.lastName,
						password  : req.query.password,
						email	  : req.query.email
					});
					newUser.save((err, newUserResult) => {
						if(err) {
							console.error('could not save user, error: ', err)
						} else {
							req.login(newUserResult, () => {
								console.log('session from register: ', req.session.id)
								console.log('newUserResult', newUserResult);
								//temp need to change redirect to home page
								res.redirect('/expenses/expense-details/' + newUserResult.userName);							
							})

						}
					});
				}
			});
};

module.exports = loginRouters;