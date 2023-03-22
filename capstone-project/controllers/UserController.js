'use strict'

const models = require('../models');

// index
// create
// store
// show
// edit
// update
// destroy

async function create(firstName, lastName, password, email){
	console.log("Inside contollers::UserController::index()")
	var result = {};
	try{
		var user = await models.User.build({
			first_name: firstName,
			last_name: lastName,
			password: password,
			email: email,
		}).save()
		result = user.toJSON();
	}catch(error){
		console.log('O erro é: ', error);
	}
	return result;
}

module.exports = {
	index,
}