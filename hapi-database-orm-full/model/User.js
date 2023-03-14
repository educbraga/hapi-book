const dataTypes = require('sequelize');
var user;
module.exports = function(connection){
	user = connection.define('User', {
		userid: {
			primaryKey: true,
			allowNull: false,
			type: dataTypes.INTEGER,
			autoIncrement: true,
		},
		firstName: {
			type: dataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		lastName: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		timestamps: false,
	})
	return user;
}