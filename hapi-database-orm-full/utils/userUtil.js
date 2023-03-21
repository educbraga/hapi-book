const models = require('../models')

async function fetchUsers(){
	console.log("Inside utils::user.Util.js::fetchUsers()")
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