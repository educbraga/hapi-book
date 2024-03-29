'use strict';

const authPlugin = {
    register: function(server, options) {

        const Bcrypt = require('bcrypt');

        const users = {
            edu: {
                username: 'edu',
                password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm', // 'secret'
                name: 'Eduardo',
                id: '2133d32a'
            }
        };

        module.exports.validate = async (request, username, password) => {

            const user = users[username];
            if (!user) {
                return {
                    credentials: null,
                    isValid: false
                };
            }

            const isValid = await Bcrypt.compare(password, user.password);
            const credentials = {
                id: user.id,
                name: user.name
            };

            return {
                isValid,
                credentials
            };
        }
    },
    name: 'authPlugin',
};

module.exports = authPlugin;
