'use strict';

const hapi = require('@hapi/hapi');
const routes = require('./routes');

const start = async () => {
	const server = hapi.server({port: 3000,});
  	server.route(routes);

  	await server.start();
  	console.log(`Server running at: ${server.info.uri}`);
};

start()

