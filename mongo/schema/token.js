var userSchema = require('./user');

module.exports = {
	accessToken: String,
	expires: Date,
	clientId: String,
	user: userSchema
};
