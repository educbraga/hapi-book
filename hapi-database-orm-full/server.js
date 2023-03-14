'use strict';

const config = require('./config');
const hapi = require('@hapi/hapi');
const routes = require('./routes');

const start = async () => {
	const server = hapi.server({ port: config.appConfig.DEVELOPMENT.APP_PORT });
  	server.route(routes);

  	await server.start();
  	console.log(`Server running at: ${server.info.uri}`);
};

start()

