'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            return 'welcome';
        }
    },
    {
        method: 'GET',
        path: '/restricted',
        options: {
            auth: 'simple'
        },
        handler: function (request, h) {
            console.log(h);
            return request.auth.credentials
        }
    }
]