import Sequelize from 'sequelize';

import dbConfig from '../config/database';
import User from '../app/models/User';
import Client from '../app/models/Client';
import File from '../app/models/File';
import Pets from '../app/models/Pets';
import Agenda from '../app/models/Agenda';

const models = [User, Client, File, Pets, Agenda];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(process.env.DB_URL);
		models
			.map(model => model.init(this.connection))
			.map(model => model.associate && model.associate(this.connection.models));
	}
}

export default new Database();
