'use strict'

require('dotenv').config();

const Sequelize = require('sequelize');

const db = new Sequelize('sequelize-tutorial', 'root', 'secret',{
	dialect: 'mysql',
	host: 'localhost',
	port: '3310',
});

module.exports = db;