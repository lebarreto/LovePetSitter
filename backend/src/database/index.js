import Sequelize from 'sequelize';

import dbConfig from '../config/database';
import User from '../app/models/User';
import Client from '../app/models/Client';
import File from '../app/models/File';
import Pets from '../app/models/Pets';

const models = [User, Client, File, Pets];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(dbConfig);
		models
			.map(model => model.init(this.connection))
			.map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
