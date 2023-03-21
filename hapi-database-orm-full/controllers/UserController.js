const models = require('../models')

// index
// create
// store
// show
// edit
// update
// destroy

async function getAll(){
	console.log("Inside contollers::UserController::getAll()")
	var listUsers = {};
	try{
		listUsers = await models.User.findAll({attributes: ['firstName', 'lastName']});
	}catch(error){
		console.log('O erro é: ', error);
	}
	return listUsers;
}

module.exports = {
	fetchUsers
}