'use strict';

const Joi = require('joi');

exports.routes = async (server) => {

    return server.route([
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
    ]);
};