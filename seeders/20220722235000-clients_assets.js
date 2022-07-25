/* eslint-disable quote-props */
const clientsAssets = [
  {
    'asset_code': 'PETR4',
    'client_id': 1,
    'asset_qnt': 3000,
  },
  {
    'asset_code': 'ABEV3',
    'client_id': 1,
    'asset_qnt': 1000,
  },
  {
    'asset_code': 'PETR4',
    'client_id': 2,
    'asset_qnt': 4300,
  },
  {
    'asset_code': 'B3SA3',
    'client_id': 2,
    'asset_qnt': 14200,
  },
  {
    'asset_code': 'BBAS3',
    'client_id': 2,
    'asset_qnt': 6700,
  },
  {
    'asset_code': 'OIBR3',
    'client_id': 3,
    'asset_qnt': 42500,
  },
  {
    'asset_code': 'VIVR3',
    'client_id': 3,
    'asset_qnt': 23800,
  },
  {
    'asset_code': 'VALE3',
    'client_id': 3,
    'asset_qnt': 6800,
  },
  {
    'asset_code': 'VBBR3',
    'client_id': 3,
    'asset_qnt': 13100,
  },
  {
    'asset_code': 'USIM5',
    'client_id': 4,
    'asset_qnt': 17600,
  },
  {
    'asset_code': 'VBBR3',
    'client_id': 4,
    'asset_qnt': 6000,
  },
  {
    'asset_code': 'VIVR3',
    'client_id': 4,
    'asset_qnt': 1100,
  },
];

module.exports = {
  async up(queryInterface, _Sequelize) {
   await queryInterface.bulkInsert('clients_assets', clientsAssets, {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('clients_assets', null, {});
  },
};
