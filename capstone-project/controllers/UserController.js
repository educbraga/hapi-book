'use strict'

const models = require('../models');

// index
// create
// store
// show
// edit
// update
// destroy

async function create(){
	console.log("Inside contollers::UserController::index()")
	var result = {};
	try{
		var user = await models.User.build({
			first_name: 'John',
			last_name: 'Doe',
			email: 'emaildojohn@gmail.com',
		}).save()
		await user.sync();
		result = user.toJSON();
	}catch(error){
		console.log('O erro é: ', error);
	}
	return result;
}

module.exports = {
	index,
}