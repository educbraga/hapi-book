'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/getUsers',
        handler: function (request, h) {
            console.log("Get Users");
            return {user: "edu :)"}
        }
    },
]