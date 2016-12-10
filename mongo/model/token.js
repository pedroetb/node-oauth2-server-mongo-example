var mongoose = require('mongoose'),
	modelName = 'token',
	schemaDefinition = require('../schema/' + modelName);

var schemaInstance = mongoose.Schema(schemaDefinition);
schemaInstance.index({ "expires": 1 }, { expireAfterSeconds: 0 });

var modelInstance = mongoose.model(modelName, schemaInstance);

module.exports = modelInstance;
