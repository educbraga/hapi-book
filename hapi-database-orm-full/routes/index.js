'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/get-users',
        handler: function (request, h) {
            console.log("Get Users");
            return {user: "edu :)"}
        }
    },
]