module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Clientes',
      {
        id: {
          type: Sequelize.DOUBLE,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.FLOAT(11),
          allowNull: false,
        },
        telefone: {
          type: Sequelize.STRING(11),
          allowNull: false,
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        numero: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dt_nascimento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Clientes');
  },
};
