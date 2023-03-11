'use strict';

// const Joi = require('joi');

exports.configureRoutes = async (server) => {

    return server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Hello World!';
            }
        },
    ]);
};