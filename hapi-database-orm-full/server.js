'use strict'

const Hapi = require('@hapi/hapi');
const BasicAuthPlugin = require('@hapi/basic')
const authPlugin = require('./auth');

const app = async () => {

    const server = Hapi.server({ port: 3000, host: 'localhost' });

    await server.register({ plugin: BasicAuthPlugin });
    await server.register({ plugin: authPlugin });

    server.auth.strategy('simple', 'basic', { validate: authPlugin.validate });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {

            return 'welcome';
        }
    });

    server.route({
        method: 'GET',
        path: '/restricted',
        options: {
            auth: 'simple'
        },
        handler: function (request, h) {
            console.log(h);
            return request.auth.credentials
        }
    });

    await server.start();

    return server;
};

app()
.then((server) => console.log(`Server listening on ${server.info.uri}`))
.catch((err) => {

    console.error(err);
    process.exit(1);
});