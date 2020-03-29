import * as Yup from 'yup';

import User from '../models/User';

class UserController {
	async create(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			cellphone: Yup.string().required(),
			password: Yup.string()
				.required()
				.min(6)
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const checkIfUserExists = await User.findOne({
			where: {
				email: req.body.email
			}
		});

		if (checkIfUserExists) {
			return res.status(400).json({ error: 'User already exists.' });
		}

		const { id, name, email, cellphone } = await User.create(req.body);

		return res.json({
			id,
			name,
			email,
			cellphone
		});
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string(),
			email: Yup.string().email(),
			cellphone: Yup.string(),
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

		const findUser = await User.findByPk(req.params.id);

		if (email && email != findUser.email) {
			const userExists = await User.findOne({ where: { email } });

			if (userExists) {
				return res.status(400).json({ error: 'User already exists.' });
			}
		}

		if (oldPassword && !(await findUser.checkPassword(oldPassword))) {
			return res.status(401).json({ error: 'Password does not match.' });
		}

		await findUser.update(req.body);

		return res.json(email);
	}

	async listAll(req, res) {
		const user = await User.findAll();

		if (!user) {
			return res.status(401).json({ error: 'There is no users available to see.' });
		}

		return res.json(user);
	}

	async listById(req, res) {
		const user = await User.findOne({
			where: {
				id: req.params.id
			}
		});

		if (!user) {
			return res.status(401).json({ error: 'User does not exists.' });
		}

		return res.json(user);
	}

	async delete(req, res) {
		await User.destroy({
			where: {
				id: req.params.id
			}
		});

		return res.send();
	}
}

export default new UserController();
