var DB_CONSTANTS = {
	DEVELOPMENT:
	{
		DB_PORT: 3309,
		DIALECT:'mysql',
		DB_NAME:'pollme',
		DB_PASS:'secret',
		DB_USER:'root',
		DB_HOST:'localhost',

	},
	PRODUCTION:
	{
		DB_PORT: 3309,
		DIALECT:'mysql',
	},
}

module.exports = DB_CONSTANTS;
