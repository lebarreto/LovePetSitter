import * as Yup from 'yup';

import Pets from '../models/Pets';
import File from '../models/File';
import Client from '../models/Client';

class PetsController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			age: Yup.string().required(),
			sex: Yup.string().required(),
			type: Yup.string().required(),
			description: Yup.string(),
			avatar_id: Yup.number(),
			client_id: Yup.number()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const { id, name, age, sex, type, description, avatar_id, client_id } = await Pets.create(req.body);

		return res.json({
			id,
			name,
			age,
			sex,
			type,
			description,
			avatar_id,
			client_id
		});
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			age: Yup.string().required(),
			description: Yup.string(),
			avatar_id: Yup.number()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const findPet = await Pets.findByPk(req.params.id);

		if (!findPet) {
			return res.status(401).json({ error: 'Pet does not exists.' });
		}

		const { name, age, description, avatar_id } = await findPet.update(req.body);

		return res.json({
			name,
			age,
			description,
			avatar_id
		});
	}

	async listAll(req, res) {
		const pets = await Pets.findAll({
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['id', 'path', 'url']
				},
				{
					model: Client,
					as: 'owner',
					attributes: ['id', 'name']
				}
			]
		});

		return res.json(pets);
	}

	async listByClient(req, res) {
		const pets = await Pets.findAll({
			where: {
				client_id: req.params.id
			},
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['id', 'path', 'url']
				},
				{
					model: Client,
					as: 'owner',
					attributes: ['id', 'name']
				}
			]
		});

		return res.json(pets);
	}

	async listById(req, res) {
		const pets = await Pets.findOne({
			where: {
				id: req.params.id
			},
			include: [
				{
					model: File,
					as: 'avatar',
					attributes: ['id', 'path', 'url']
				},
				{
					model: Client,
					as: 'owner',
					attributes: ['id', 'name']
				}
			]
		});

		return res.json(pets);
	}

	async delete(req, res) {
		await Pets.destroy({
			where: {
				id: req.params.id
			}
		});

		return res.send();
	}
}

export default new PetsController();
