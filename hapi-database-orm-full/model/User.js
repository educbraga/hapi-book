const dataTypes = require('sequelize');
var user;
module.exports = function(connection){
	// connection é a instância da conexão entre o sequelize e o banco de dadosº
	user = connection.define(
		// nome da tabela
		'User', 
		// atributos/colunas
		{
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
		}
		// sem opções
	)
	return user;
}