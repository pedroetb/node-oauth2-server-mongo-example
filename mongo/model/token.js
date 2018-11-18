var mongoose = require('mongoose'),
	modelName = 'token',
	schemaDefinition = require('../schema/' + modelName),
	schemaInstance = mongoose.Schema(schemaDefinition);

schemaInstance.index({ "accessTokenExpiresAt": 1 }, { expireAfterSeconds: 0 });

var modelInstance = mongoose.model(modelName, schemaInstance);

module.exports = modelInstance;
