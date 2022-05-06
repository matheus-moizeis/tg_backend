import Funcionario from "../models/Funcionario";
import Cliente from "../models/Cliente";
import Ticket from "../models/Tickets";

class TicketController {
  // Todos Finalizados
  async finishedTickets(req, res) {
    try {
      const tickets = await Ticket.findAll({
        where: {
          finalizado: true,
        },
        include: [{
          model: Funcionario,
          attributes: ['nome'],
        },
        {
          model: Cliente,
          attributes: ['nome'],
        }],
      });
      return res.json(tickets);
    } catch (e) {
      return res.json(null);
    }
  }

  // Todos finalizados e não finalizados
  async allTickets(req, res) {
    try {
      const tickets = await Ticket.findAll({
        include: [{
          model: Funcionario,
          attributes: ['nome'],
        },
        {
          model: Cliente,
          attributes: ['nome'],
        }],
      });
      return res.json(tickets);
    } catch (e) {
      return res.json(null);
    }
  }

  // todos não finalizados
  async index(req, res) {
    try {
      const tickets = await Ticket.findAll({
        where: {
          finalizado: false,
        },
        include: [{
          model: Funcionario,
          attributes: ['nome'],
        },
        {
          model: Cliente,
          attributes: ['nome'],
        }],
      });
      return res.json(tickets);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const novoTicket = await Ticket.create(req.body);
      return res.json(novoTicket);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // buscar por ID
  async show(req, res) {
    try {
      const ticket = await Ticket.findByPk(req.params.id, {
        include: [{
          model: Funcionario,
          attributes: ['nome'],
        },
        {
          model: Cliente,
          attributes: ['nome'],
        }],
      });
      return res.json(ticket);
    } catch (e) {
      return res.json({ errors: 'Nenhum registro encontrado com o ID informado' });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const ticket = await Ticket.findByPk(req.params.id);

      if (!ticket) {
        return res.status(400).json({
          errors: ['Ticket não encontrado'],
        });
      }

      const novosDados = await ticket.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res.json({ errors: 'Nenhum registro encontrado com o ID informado' });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const ticket = await Ticket.findByPk(req.params.id);

      if (!ticket) {
        return res.status(400).json({
          errors: ['Ticket não encontrado'],
        });
      }

      await ticket.destroy();

      return res.json(null);
    } catch (e) {
      return res.json({ errors: 'Nenhum registro encontrado com o ID informado' });
    }
  }
}

export default new TicketController();
