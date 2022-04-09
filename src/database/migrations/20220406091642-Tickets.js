module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Tickets',
      {
        id: {
          type: Sequelize.DOUBLE,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        titulo: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        funcionario_id: {
          type: Sequelize.DOUBLE,
          allowNull: true,
          references: {
            model: 'Funcionarios',
            key: 'id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        cliente_id: {
          type: Sequelize.DOUBLE,
          allowNull: true,
          references: {
            model: 'Clientes',
            key: 'id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        dt_retorno: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        finalizado: {
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
    await queryInterface.dropTable('Tickets');
  },
};
