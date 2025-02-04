import * as Yup from 'yup';

import User from '../models/User';
import Client from '../models/Client';

class SessionController {
	async storeUser(req, res) {
		const schema = Yup.object().shape({
			email: Yup.string()
				.email()
				.required(),
			password: Yup.string().required()
		});

		if (!schema) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const { email, password } = req.body;

		const user = await User.findOne({ where: { email } });

		if (!user) {
			return res.status(401).json({ error: 'User does not exists.' });
		}

		if (!(await user).checkPassword(password)) {
			return res.status(401).json({ error: 'Invalid password' });
		}

		return res.json({ user });
	}

	async storeClient(req, res) {
		const schema = Yup.object().shape({
			email: Yup.string()
				.email()
				.required(),
			password: Yup.string().required()
		});

		if (!schema) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const { email, password } = req.body;

		const clients = await Client.findOne({ where: { email } });

		if (!clients) {
			return res.status(401).json({ error: 'Client does not exists.' });
		}

		if (!(await clients).checkPassword(password)) {
			return res.status(401).json({ error: 'Invalid password' });
		}

		return res.json({ clients });
	}
}

export default new SessionController();
