module.exports = [
	{
		method: 'GET',
		path: '/getUsers',
		handler: function (request, h) {
			console.log('getUsers');
			return {user: 'Edu'};
		}
	}
]