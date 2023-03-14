'use strict';

var authPlugin = {
    register: function (server, options) {

        const users = {
            edu: {
                username: 'edu',
                password: 'secret',   // 'secret'
                name: 'Eduardo',
                id: '2133d32a'
            }
        };

        module.exports.validate = async (request, username, password) => {
    
            const user = users[username];
            if (!user) {
                return { credentials: null, isValid: false };
            }
        
            const isValid = password === user.password;
            const credentials = { id: user.id, name: user.name, username: user.username };
        
            return { isValid, credentials };
        };
    },
    name: 'authPlugin'
}

module.exports = authPlugin;
