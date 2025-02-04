'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('clients', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			cellphone: {
				type: Sequelize.STRING,
				allowNull: false
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false
			},
			uf: {
				type: Sequelize.STRING,
				allowNull: false
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password_hash: {
				type: Sequelize.STRING,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('clients');
	}
};
