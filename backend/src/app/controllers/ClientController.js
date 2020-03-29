import * as Yup from 'yup';

import Client from '../models/Client';

class ClientController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			cellphone: Yup.string().required(),
			address: Yup.string().required(),
			city: Yup.string().required(),
			uf: Yup.string()
				.required()
				.max(2),
			password: Yup.string()
				.required()
				.min(6)
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const checkIfClientExists = await Client.findOne({
			where: {
				email: req.body.email
			}
		});

		if (checkIfClientExists) {
			return res.status(400).json({ error: 'Client already exists.' });
		}

		const { id, name, email, cellphone, address, city, uf } = await Client.create(req.body);

		return res.json({
			id,
			name,
			email,
			cellphone,
			address,
			city,
			uf
		});
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string(),
			email: Yup.string().email(),
			cellphone: Yup.string(),
			address: Yup.string(),
			city: Yup.string(),
			uf: Yup.string().max(2),
			oldPassword: Yup.string().min(6),
			password: Yup.string()
				.min(6)
				.when('oldPassword', (oldPassword, field) => (oldPassword ? field.required() : field)),
			confirmPassword: Yup.string().when('password', (password, field) =>
				password ? field.required().oneOf([Yup.ref('password')]) : field
			)
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const { email, oldPassword } = req.body;

		const findClient = await Client.findByPk(req.params.id);

		if (email && email != findClient.email) {
			const clientExists = await Client.findOne({ where: { email } });

			if (clientExists) {
				return res.status(400).json({ error: 'Client already exists.' });
			}
		}

		if (oldPassword && !(await findClient.checkPassword(oldPassword))) {
			return res.status(401).json({ error: 'Password does not match.' });
		}

		await findClient.update(req.body);

		return res.json(email);
	}

	async listAll(req, res) {
		const clients = await Client.findAll();

		if (!clients) {
			return res.status(401).json({ error: 'There is no client.' });
		}

		return res.json(clients);
	}

	async listById(req, res) {
		const client = await Client.findOne({
			where: {
				id: req.params.id
			}
		});

		if (!client) {
			return res.status(401).json({ error: 'Client does not exists.' });
		}

		return res.json(client);
	}

	async delete(req, res) {
		await Client.destroy({
			where: {
				id: req.params.id
			}
		});

		return res.send();
	}
}

export default new ClientController();
