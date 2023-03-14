const Sequelize = require('sequelize');
const config = require('../config');
usersModel:require('./User')

const connection = new Sequelize(
	config.dbConfig.DEVELOPMENT.DB_NAME, 
	config.dbConfig.DEVELOPMENT.DB_USER, 
	config.dbConfig.DEVELOPMENT.DB_PASS, 
	{
		host: config.dbConfig.DEVELOPMENT.DB_HOST,
		port: config.dbConfig.DEVELOPMENT.DB_PORT,
		dialect: config.dbConfig.DEVELOPMENT.DIALECT,
		pool: {
			max: 5,
			min: 0,
			idle: 10000,
		}
	}
);

connection.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});

module.exports = function(connection)
