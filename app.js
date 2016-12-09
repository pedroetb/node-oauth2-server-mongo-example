var express = require('express'),
	bodyParser = require('body-parser'),
	oauthserver = require('oauth2-server'),
	mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoUri = 'mongodb://localhost/oauth';
mongoose.connect(mongoUri, function(err, res) {
	if (err) {
		return console.error('Error connecting to "%s":', mongoUri, err);
	}
	console.log('Connected successfully to "%s"', mongoUri);
});

app.oauth = oauthserver({
	model: require('./model.js'),
	grants: ['password'],
	debug: true
});

app.all('/oauth/token', app.oauth.grant());

app.get('/', app.oauth.authorise(), function (req, res) {
	res.send('Congratulations, you are in a secret area!');
});

app.use(app.oauth.errorHandler());

app.listen(3000);
