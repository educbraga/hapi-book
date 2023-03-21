'use strict'

require('dotenv').config();
const Hapi = require('@hapi/hapi');
const BasicAuthPlugin = require('@hapi/basic')
const authPlugin = require('./auth');
const routes = require('./routes');

const app = async () => {

    const server = Hapi.server({ port: process.env.APP_PORT, host: process.env.APP_HOST });

    await server.register({ plugin: BasicAuthPlugin });
    await server.register({ plugin: authPlugin });

    server.auth.strategy('simple', 'basic', { validate: authPlugin.validate });

    // await routes(server);
    server.route(routes)

    await server.start();

    return server;
};

app()
.then((server) => console.log(`Server listening on ${server.info.uri}`))
.catch((err) => {

    console.error(err);
    process.exit(1);
});