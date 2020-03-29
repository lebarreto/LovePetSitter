'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('pets', 'client_id', {
			type: Sequelize.INTEGER,
			references: { model: 'clients', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
			allowNull: true
		});
	},

	down: queryInterface => {
		return queryInterface.removeColumn('pets', 'client_id');
	}
};
