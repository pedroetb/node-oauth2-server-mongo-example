var mongoose = require('mongoose');

function getModelInstance(modelName) {

	var schemaDefinition = require('../schema/' + modelName),
		schemaInstance = mongoose.Schema(schemaDefinition),
		modelInstance = mongoose.model(modelName, schemaInstance);

	return modelInstance;
}

module.exports = {
	getModelInstance: getModelInstance
};
