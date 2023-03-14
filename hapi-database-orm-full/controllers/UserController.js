var utils = require('../utils');

async function fetchUsers(){
	console.log("Inside controllers::userController.js::fetchUsers");
	var users = {};
	try{
		users = await utils.userUtil.fetchUsers().then(
			function(users) {
				return users;
			}
		)
	}catch(err){
		console.error('Ouch', err);
	}
	return { users:users };
}

module.exports = { fetchUsers: fetchUsers };