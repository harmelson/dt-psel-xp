module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clients_assets', {
      assetCode: { 
        allowNull: false, field: 'asset_code', primaryKey: true, type: Sequelize.STRING(5), 
      },
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'client_id',
        primaryKey: true,
        references: { model: 'clients', key: 'id' },
      },
      assetQnt: { allowNull: false, type: Sequelize.INTEGER, field: 'asset_qnt' },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('clients_assets');
  },
};
