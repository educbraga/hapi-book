'use strict'

// Dependencies
const Hapi = require('@hapi/hapi');
const Connection = require('./dbConfig');

const start = async () => {
	const server = Hapi.server({ port: 8000 });

	await server.start();

	console.log('The server is running at: ' + server.info.uri);
};

start();

