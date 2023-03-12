var authPlugin = {
	register: function (server, options) {

		const users = {
			edu: {
				username: 'edu',
				name: 'Eduardo',
				password: 'secret',
				id: '2133d32a'
			}
		},

		validate = function (request, username, password) {
			
			var user = users[username];
			if (!user) {
				return { credentials: null, isValid: false };
			}

			var isValid = (password === user.password);
			var credentials = { id: user.id, name: user.name };

			return { isValid: isValid, credentials: credentials };
		}

	}
}