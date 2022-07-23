const clientsService = require('../services/clientsService');

const clientsController = {
  findById: async (req, res) => {
    const { id } = req.params;
    const client = await clientsService.findById(id);

    res.status(200).json(client);
  },
};

module.exports = clientsController;