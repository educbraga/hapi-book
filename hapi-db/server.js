'use strict'

// Dependencies
const Hapi = require('@hapi/hapi');
const Connection = require('./dbConfig');

const start = async () => {
	const server = Hapi.server({ port: 8000 , app: {app_name: 'pollme'}});

	await server.start();

	console.log('The server is running at: ' + server.info.uri);
	console.log('*App Name: ' + server.settings.app.app_name);
};

start();
