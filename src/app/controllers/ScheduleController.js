import * as Yup from 'yup';
import Appointment from "../models/Appointment";
import User from "../models/User";
import File from '../models/File';
import { parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

class ScheduleController {

  async index(req, res) {

    const checkUser = await User.findOne({
      where: { id: req.userId, provider: true }
    });

    if (!checkUser) {
      return res.status(400).json({
        erro: 'Esse usuário não é um colaborador'
      })
    }

    const { date } = req.query;
    const parseDate = parseISO(date);

    const appointments = await Appointment.findAll({
      where: {
        collaborator_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
        }
      },
      order: ['date'],
    })

    return res.json(appointments);
  }
}

export default new ScheduleController();