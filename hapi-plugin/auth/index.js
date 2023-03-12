var authPlugin = {
	register: function (server, options) {

		const users = {
			edu: {
				username: 'edu',
				name: 'Eduardo',
				password: 'secret',
				id: '2133d32a'
			}
		};

		module.exports.validate = async (request, username, password) => {

			// console.log(request, 'request')
			// console.log(username, 'username')
			// console.log(password, 'password')
			
			var user = users[username];
			if (!user) {
				return { credentials: null, isValid: false };
			}

			var isValid = (password === user.password);
			var credentials = { id: user.id, name: user.name };

			return { isValid: isValid, credentials: credentials };
		}

	},
	name: 'authPlugin'
}

module.exports = authPlugin;