'use strict';
const joi = require('joi');

var controllers = require('../controllers');

module.exports = [{
    method: 'POST',
    path: '/user/create',
    config: {
        description: 'Create a new user',
        tags: ['api', 'users'],
        validate: {
            payload: joi.object({
                firstName: joi.string().required(),
                lastName: joi.string().required(),
                password: joi.string().required(),
                email: joi.string().email({multiple:true}).required(),
            })
        }
    },
    handler: async function(request, h) {
        return await controllers.UserController.create(request.payload.firstName, request.payload.lastName, request.payload.password, request.payload.email);
    },
}, ]