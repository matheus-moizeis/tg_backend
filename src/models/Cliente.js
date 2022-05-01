import Sequelize, { Model } from "sequelize";

export default class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        cpf: {
          type: Sequelize.INTEGER(11),
          validate: {
            len: {
              args: [3, 11],
              msg: "Campo CPF deve conter 11 caracteres",
            },
          },
        },
        telefone: {
          type: Sequelize.STRING(11),
          defaultValue: "",
          validate: {
            len: {
              args: [3, 11],
              msg: "Campo telefone deve ter no máximo 11 caracteres",
            },
          },
        },
        dt_nascimento: {
          type: Sequelize.DATE,
          defaultValue: "1950-01-01",
          validate: {
            isDate: {
              msg: "O campo dt_nascimento não pode ser vazio",
            },
          },
        },
        rua: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo endereco não pode estar em branco",
            },
          },
        },
        bairro: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo endereco não pode estar em branco",
            },
          },
        },
        cep: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo endereco não pode estar em branco",
            },
          },
        },
        numero: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo endereco não pode estar em branco",
            },
          },
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
