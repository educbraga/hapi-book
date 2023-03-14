'use strict';

const config = require('./config');
const hapi = require('@hapi/hapi');
const routes = require('./routes');
const auth = require('./auth');

const start = async () => {
	const server = hapi.server({ port: config.appConfig.DEVELOPMENT.APP_PORT });


    await server.register(require('@hapi/basic'));
    await server.register({ plugin: auth });
    await server.auth.strategy('simple', 'basic', { validate: auth.validate });
    await server.auth.default('simple');

    await server.route(routes);
    
  	await server.start();
  	console.log(`Server running at: ${server.info.uri}`);
};

start()

