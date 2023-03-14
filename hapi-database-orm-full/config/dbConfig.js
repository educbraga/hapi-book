var DB_CONSTANTS = {
	DEVELOPMENT:
	{
		DB_PORT: 3306,
		DIALECT:'mysql',
		DB_NAME:'pollme',
		DB_PASS:'admin',
		DB_USER:'root',
		DB_HOST:'localhost',

	},
	PRODUCTION:
	{
		DB_PORT:'3306',
		DIALECT:'mysql',
	},
}

module.exports = DB_CONSTANTS;
