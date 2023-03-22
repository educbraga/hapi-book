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
            return {'message': 'Seja muito bem vindo!'};
        },
    },
    {
        method: 'GET',
        path: '/get-users',
        handler: async function (request, h) {
            return controllers.UserController.index();
        }
    },
]