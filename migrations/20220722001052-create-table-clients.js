module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: { allowNull: false, type: Sequelize.STRING, field: 'last_name' },
      email: { allowNull: false, type: Sequelize.STRING },
      password: { allowNull: false, type: Sequelize.STRING },
      balance: { allowNull: false, type: Sequelize.FLOAT(2) },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('clients');
  },
};
