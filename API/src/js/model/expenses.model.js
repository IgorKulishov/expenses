var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var expensesSchema = new Schema({
	username: 		 { type: String },
	expenseName:     { type: String },
	beneficiaryName: { type: String },
	amountPaid: 	 { type: Number },
	dateOfPaiment: 	 { type: String }
});

var Expenses = mongoose.model('Expenses', expensesSchema);

module.exports = Expenses;