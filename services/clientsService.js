const db = require('../models');

const clientsService = {
  findAll: async () => {
    const clients = await db.Client.findAll();
    return clients;
  },

  findById: async (id) => {
    const { id: codCliente, balance, currency } = await db.Client.findByPk(id);
    
    return {
      CodCliente: codCliente, Saldo: Number(balance), Moeda: currency,
    };
  },

  sumBalance: async (id, value) => {
    const sumBalance = await db.Client.increment({ balance: value }, { where: { id } });
    return sumBalance;
  },

  subBalance: async (id, value) => {
    const subBalance = await db.Client.increment({ balance: -value }, { where: { id } });
    return subBalance;
  },

};

module.exports = clientsService;