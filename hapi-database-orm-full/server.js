'use strict'

const Hapi = require('@hapi/hapi');
const BasicAuthPlugin = require('@hapi/basic')
const authPlugin = require('./auth');
const { routes } = require('./routes');

const app = async () => {

    const server = Hapi.server({ port: 3000, host: 'localhost' });

    await server.register({ plugin: BasicAuthPlugin });
    await server.register({ plugin: authPlugin });

    server.auth.strategy('simple', 'basic', { validate: authPlugin.validate });

    await routes(server)

    await server.start();

    return server;
};

app()
.then((server) => console.log(`Server listening on ${server.info.uri}`))
.catch((err) => {

    console.error(err);
    process.exit(1);
});