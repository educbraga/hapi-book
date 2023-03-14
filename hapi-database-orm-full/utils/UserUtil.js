const models = require('../model');

async function fetchUsers(){
	console.log("Inside utils::userUtil.js::fetchUsers");
	var listUsers = {};
	try{
		listUsers = await models.usersModel.findAll({
			attributes: ['firstName', 'lastName']
		})
	}catch(err){
		console.error(err);
		throw err;
	}
	return { listUsers:listUsers };
}

module.exports = {
	fetchUsers:fetchUsers
}