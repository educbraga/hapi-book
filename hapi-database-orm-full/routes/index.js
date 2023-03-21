'use strict';
var controllers = require('../controllers');

module.exports = [
    {
        method: 'GET',
        path: '/',
        options: {
            auth: 'simple',
        },
        handler: function (request, h) {
            console.log(h)
            return request.auth.credentials
        },
        method: 'GET',
        path: '/get-users',
        handler: async function (request, h) {
            try {
                var allUsers = controllers.userController.index();
                console.log("success");
                return allUsers;
            }catch(error){
                console.log("O erro é: " + error);
            }
        }
    },
]