'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // console.log('What does server have to offer?');
    // for(let [key, value] of Object.entries(server)) {
    //     console.log(`${key}: ${value}`);
    // }

    await server.start();
    console.log('Server running on %s', server.info.uri);

    server.route({
        method: 'GET',
        path: '/home',
        handler: (request, h) => {

            return '<h3>Hello Edu!<h3>';
        }
    });

    server.route({
        method: 'GET',
        path: '/home/{name}',
        handler: (request, h) => {

            return `Hello ${request.params.name}!`;
        }
    });

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init(); 