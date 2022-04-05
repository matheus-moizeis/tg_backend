import Sequelize, { Model } from "sequelize";

export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cpf: {
        type: Sequelize.INTEGER(11),
        validate: {
          len: {
            args: [3, 11],
            msg: 'Campo CPF deve conter 11 caracteres',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING(11),
        defaultValue: '',
        validate: {
          len: {
            args: [3, 11],
            msg: 'Campo telefone deve ter no máximo 11 caracteres',
          },
        },
      },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo endereco não pode estar em branco',
          },
        },
      },
      dt_nascimento: {
        type: Sequelize.DATE,
        defaultValue: '2000-01-01',
        validate: {
          isDate: {
            msg: 'O campo dt_nascimento não pode ser vazio',
          },
        },
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
