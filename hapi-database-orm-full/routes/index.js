'use strict';

var controllers = require('../controllers');

module.exports = [
	{
		method: 'GET',
		path: '/',
		options: {
			auth: 'simple'
		},
		handler: function (request, h) {
			console.log('/');
			return request.auth.credentials;
		}
	},
	{
		method: 'GET',
		path: '/getUsers',
		handler: async function (request, h) {
			try{
				var allUsers = controllers.userController.fetchUsers();
				console.log('success', allUsers);
				return allUsers
			}catch(err)
				{ throw err }
		}
	}];
