/* eslint-disable quote-props */
const clients = [
  {
  'first_name': 'Charles',
  'last_name': 'Jhonson',
  email: 'charles.jhonson@email.com',
  password: '1234567',
  currency: 'BRL',
  balance: 3500.06,
  },
  {
   'first_name': 'Lili',
   'last_name': 'Son',
   email: 'lili.son@email.com',
   password: '1234567',
   currency: 'BRL',
   balance: 24543.24,
  },
  {
    'first_name': 'Jhon',
    'last_name': 'Lee',
    email: 'jhon.lee@email.com',
    password: '1234567',
    currency: 'BRL',
    balance: 4689.16,
  },
  {
    'first_name': 'Mirela',
    'last_name': 'Taylor',
    email: 'mirela.taylor@email.com',
    password: '1234567',
    currency: 'BRL',
    balance: 49482.91,
  },
];

module.exports = {
  async up(queryInterface, _Sequelize) {
   await queryInterface.bulkInsert('clients', clients, {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  },
};
