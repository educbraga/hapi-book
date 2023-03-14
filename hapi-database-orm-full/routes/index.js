'use strict';

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function (request, h) {
			console.log('/');
			return {message: 'Olá :)'};
		}
	},
	{
		method: 'GET',
		path: '/getUsers',
		options: {
			auth: 'simple'
		},
		handler: function (request, h) {
			console.log('getUsers');
			return {user: 'Edu'};
		}
	}
]