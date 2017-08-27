var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var expensesSchema = new Schema({
	beneficiaryName: { type: String },
	amountPaid: { type: Number },
	dateOfPaiment: { type: String },
	username: {type: String }
});

var Expenses = mongoose.model('Expenses', expensesSchema);

module.exports = Expenses;