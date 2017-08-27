var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var loginSchema = new Schema({
	userName:  { type: String },
	firstName: { type: String },
	lastName:  { type: String },
	password:  { type: Number },
	email:     { type: String }
});

var Login = mongoose.model('Login', loginSchema)

module.exports = Login;