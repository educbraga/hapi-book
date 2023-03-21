'use strict';

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
        handler: function (request, h) {
            console.log("Get Users");
            return {user: "edu :)"}
        }
    },
]