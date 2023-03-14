const sequelize = require('sequelize');
const config = require('../config');

const connection = new sequelize(
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

module.exports = {
	usersModel:require('./User')(connection)
}
