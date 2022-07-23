const db = require('../models');

const clientsService = {
  findAll: async () => {
    const clients = await db.Client.findAll();
    return clients;
  },

  findById: async (id) => {
    const { id: codCliente, balance: saldo } = await db.Client.findByPk(id);

    return {
      codCliente, saldo,
    };
  },
};

module.exports = clientsService;