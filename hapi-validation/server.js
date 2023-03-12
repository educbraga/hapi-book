'use strict';

const Hapi = require('@hapi/hapi');
const { configureRoutes } = require('./routes');

const users = {
    edu: {
        username: 'edu',
        password: 'secret',   // 'secret'
        name: 'Eduardo Braga',
        id: '2333d32a'
    }
};

const validate = async (request, username, password, h) => {

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    const isValid = await (password === user.password)? true : false;
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();

    await server.register(require('@hapi/basic'));
    server.auth.strategy('simple', 'basic', { validate });
    server.auth.default('simple');
    
    await configureRoutes(server);
    
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();