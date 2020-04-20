require('dotenv/config');

module.exports = {
	dialect: 'postgres',
	// username: process.env.DB_USER,
	// password: process.env.DB_PASS,
	// database: process.env.DB_NAME,
	// define: {
	// 	timestamps: true,
	// 	underscored: true,
	// 	underscoredAll: true,
	// },
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASS,
	database: process.env.DATABASE_NAME,
	port:process.env.DATABASE_PORT,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
};
