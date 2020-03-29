import Sequelize, { Model } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

class Agenda extends Model {
	static init(sequelize) {
		super.init(
			{
				date: Sequelize.DATE,
				calceled_at: Sequelize.DATE,
				past: {
					type: Sequelize.VIRTUAL,
					get() {
						return isBefore(this.date, new Date());
					}
				},
				cancelable: {
					type: Sequelize.VIRTUAL,
					get() {
						return isBefore(new Date(), subHours(this.date, 2));
					}
				}
			},
			{
				sequelize
			}
		);

		return this;
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
		this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
	}
}

export default Agenda;
