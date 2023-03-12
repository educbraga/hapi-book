'use strict'

const Hapi = require('@hapi/hapi');
const Auth = require('./auth');

const init = async () => {

    const server = Hapi.server({ 
        port: 4000,
        host: 'localhost' 
    });

    await server.start();

    await server.register(require('@hapi/basic'));
    await server.register({plugin: Auth});
    server.auth.strategy('simple', 'basic', { validate: Auth.validate });
    // server.auth.default('simple');

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

    console.log(`Server listening on ${server.info.uri}`)
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();