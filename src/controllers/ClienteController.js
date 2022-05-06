import Cliente from '../models/Cliente';

class ClienteController {
  // Registros desativados
  async noActive(req, res) {
    try {
      const clientes = await Cliente.findAll(
        {
          where: {
            ativo: false,
          },
        },
      );
      return res.json(clientes);
    } catch (e) {
      console.log(`Errors -> ${e}`);
      return res.json(null);
    }
  }

  // Todos os registros
  async getAll(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.json(clientes);
    } catch (e) {
      console.log(`Errors -> ${e}`);
      return res.json(null);
    }
  }

  // Todos ativos
  async index(req, res) {
    try {
      const clientes = await Cliente.findAll(
        {
          where: {
            ativo: true,
          },
        },
      );
      return res.json(clientes);
    } catch (e) {
      console.log(`Errors -> ${e}`);
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const novoCliente = await Cliente.create(req.body);
      return res.json(novoCliente);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // buscar por ID
  async show(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      return res.json(cliente);
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

      const cliente = await Cliente.findByPk(req.params.id);

      if (!cliente) {
        return res.status(400).json({
          errors: ['Funcionario não encontrado'],
        });
      }

      const novosDados = await cliente.update(req.body);

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

      const cliente = await Cliente.findByPk(req.params.id);

      if (!cliente) {
        return res.status(400).json({
          errors: ['Nenhum registro encontrado com ID informado.'],
        });
      }

      await cliente.destroy();

      return res.json(null);
    } catch (e) {
      return res.json({ errors: 'Nenhum registro encontrado com o ID informado' });
    }
  }
}

export default new ClienteController();
