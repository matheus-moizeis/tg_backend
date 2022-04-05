import Funcionario from "../models/Funcionario";

class FuncionarioController {
  async strore(req, res) {
    try {
      const novoFuncionario = await Funcionario.create(req.body);
      return res.json(novoFuncionario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // todos
  async index(req, res) {
    try {
      const funcionarios = await Funcionario.findAll();
      return res.json(funcionarios);
    } catch (e) {
      return res.json(null);
    }
  }

  // buscar por ID
  async show(req, res) {
    try {
      const funcionario = await Funcionario.findByPk(req.params.id);
      return res.json(funcionario);
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

      const funcionario = await Funcionario.findByPk(req.params.id);

      if (!funcionario) {
        return res.status(400).json({
          errors: ['Funcionario não encontrado'],
        });
      }

      const novosDados = await funcionario.update(req.body);

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

      const funcionario = await Funcionario.findByPk(req.params.id);

      if (!funcionario) {
        return res.status(400).json({
          errors: ['Funcionario não encontrado'],
        });
      }

      await funcionario.destroy();

      return res.json(null);
    } catch (e) {
      return res.json({ errors: 'Nenhum registro encontrado com o ID informado' });
    }
  }
}

export default new FuncionarioController();
