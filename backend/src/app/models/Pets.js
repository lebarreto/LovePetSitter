import Sequelize, { Model } from 'sequelize';

class Pets extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				age: Sequelize.STRING,
				sex: Sequelize.STRING,
				type: Sequelize.STRING,
				description: Sequelize.STRING
			},
			{
				sequelize
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
		this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
	}
}

export default Pets;
