var express = require('express'),
	router  = express.Router(),
	ExpensesModel = require('../model/expenses.model.js'),
	newExpense;
// all routes
var expensesRouters = function(){
	return router
			//show all expenses
			.get('/all-expenses', (req,res) => {
			    // res.header('Access-Control-Allow-Origin', '*');
			    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			    // res.header('Access-Control-Allow-Headers', 'Content-Type');
				ExpensesModel.find((err, data) => {
					if(err) {
						console.log('error fetching data' , err);
					} else {
						res.json(data);
					}
				});
			})
			//show selected expense for a user
			.get('/expense-details/:username', (req,res) => {
				if(req.session) {
					console.log('---START data from expense-details ---');
					console.log('req.user in expenses ',  req.user      );
					console.log('req.params in expenses', req.params    );
					console.log('cookes: ' ,              req.cookies   );
					console.log('session: ',              req.session.id);
					console.log('--END DATA FROM expenses-details---'   );
					if(!req.user) {
						console.log('req.user is not defined');
						// res.redirect('/login/login')
					} if(req.user) {
						ExpensesModel.find({ username: req.params.username }, (err, data) => {
						    res.header('Access-Control-Allow-Origin' , 'http://localhost:4200');
						    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
						    res.header('Access-Control-Allow-Headers', 'Content-Type');
						    res.header('Access-Control-Allow-Credentials', true);
							if(err) {
								console.log('error fetching data' , err);
							} else {
								console.log('data', data);
								res.json(data);
							}
						});
					} else {
						res.redirect('/login/login');
					}
				}

				// req.login(req.query, () => {
				// 	if(!req.session.id) {
				// 		res.redirect('http://localhost:4200/login/');
				// 	} else {
				// 		console.log('session.id from expenses : ', req.session.id);
				// 		ExpensesModel.find({ username: req.params.username }, (err, data) => {
				// 			console.log('cookes: ' , req.cookies   );
				// 			console.log('session: ', req.session.id);
				// 		    res.header('Access-Control-Allow-Origin' , '*');
				// 		    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
				// 		    res.header('Access-Control-Allow-Headers', 'Content-Type');
				// 		    // res.cookie('token', '123456', { domain: 'localhost:4200', path: '/expenses/' + req.params.username, maxAge: 18000})
				// 			if(err) {
				// 				console.log('error fetching data' , err);
				// 			} else {
				// 				res.json(data);
				// 			}
				// 		});
				// 	}
				// });
			})
			//add expense
			.post('/post-new-expense/:username', (req, res) => {
				console.log('req.body:', req.body);
				console.log('req.cookies:', req.cookies);
				console.log('req.params.username: ', req.params.username);
				console.log('session: ', req.session);
				console.log('user: ', req.user);

				if(req && req.params.username) {
					newExpense = new ExpensesModel({
						beneficiaryName : req.body.expense,
						amountPaid : req.body.amount,
						dateOfPaiment : req.body.date,
						username: req.params.username
					});
					newExpense.save((err, newExpense) => {
						if(err) {
							console.error('error: ', err)
						} else {
							res.json(newExpense);
						}
					});
				}
			});
};

module.exports = expensesRouters;