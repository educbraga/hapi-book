const Sequelize = require('sequelize');

const seq = new Sequelize('pollme', 'root', 'secret', {
	host: 'localhost',
	port: '3309',
	dialect: 'mysql'
});

seq.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});
