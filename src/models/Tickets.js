import Sequelize, { Model } from "sequelize";

export default class Ticket extends Model {
  static init(sequelize) {
    super.init({
      titulo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      dt_retorno: {
        type: Sequelize.DATE,
      },
      finalizado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id' });
    this.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id' });
  }
}
