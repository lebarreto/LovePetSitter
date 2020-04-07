import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';

import Agenda from '../models/Agenda';
import File from '../models/File';
import User from '../models/User';
import Client from '../models/Client';

class AgendaController {
	async store(req, res) {
		const schema = Yup.object().shape({
			client_id: Yup.number().required(),
			date: Yup.date().required()
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation fails.' });
		}

		const { client_id, date, user_id } = req.body;

		const hourStart = startOfHour(parseISO(date));

		if (isBefore(hourStart, new Date())) {
			return res.status(400).json({ error: 'Past date is not allowed' });
		}

		const checkAvailability = await Agenda.findOne({
			where: {
				user_id,
				calceled_at: null,
				date: hourStart
			}
		});

		if (checkAvailability) {
			return res.status(400).json({ error: 'Date is not available' });
		}

		const agenda = await Agenda.create({
			user_id,
			client_id,
			date: hourStart
		});

		return res.json(agenda);
	}

	async listAll(req, res) {
		const agenda = await Agenda.findAll({
			where: {
				calceled_at: null
			},
			include: [
				{
					model: Client,
					as: 'client',
					attributes: ['id', 'name']
				},
				{
					model: User,
					as: 'user',
					attributes: ['id', 'name']
				}
			]
		});

		return res.json(agenda);
	}

	async listById(req, res) {
		const agenda = await Agenda.findOne({
			where: {
				id: req.params.id
			},
			include: [
				{
					model: Client,
					as: 'client',
					attributes: ['id', 'name']
				},
				{
					model: User,
					as: 'user',
					attributes: ['id', 'name']
				}
			]
		});

		return res.json(agenda);
	}

	async listByClient(req, res) {
		const agenda = await Agenda.findAll({
			where: {
				client_id: req.params.id,
				calceled_at: null
			},
			include: [
				{
					model: Client,
					as: 'client',
					attributes: ['id', 'name']
				},
				{
					model: User,
					as: 'user',
					attributes: ['id', 'name']
				}
			]
		});

		return res.json(agenda);
	}

	async cancel(req, res) {
		const agenda = await Agenda.findOne({
			where: {
				id: req.params.id,
				calceled_at: null
			}
		});

		if (!agenda) {
			return res.status(401).json({ error: 'Appointment already canceled.' });
		}

		const dateWithSub = subHours(agenda.date, 2);

		if (isBefore(dateWithSub, new Date())) {
			return res.status(401).json({ error: 'You can only cancel appointments 2 hours in advance.' });
		}

		agenda.calceled_at = new Date();
		await agenda.save();

		return res.json(agenda);
	}
}

export default new AgendaController();
