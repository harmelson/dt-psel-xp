const clientsService = require('../services/clientsService');

const clientsController = {
  findById: async (req, res) => {
    const { id } = req.params;
    const client = await clientsService.findById(id);

    res.status(200).json(client);
  },
  sumBalance: async (req, res) => {
    const { CodCliente, Valor } = req.body;
    await clientsService.sumBalance(CodCliente, Valor);

    res.status(200).json({ message: `R$${Valor} foram adicionados na conta ${CodCliente}` });
  },
};

module.exports = clientsController;