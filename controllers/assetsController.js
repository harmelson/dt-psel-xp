const assetsService = require('../services/assetsService');

const assetsController = {
  getByAssets: async (req, res) => {
    const { codAtivo } = req.params;
    const asset = await assetsService.getByAssets(codAtivo);

    res.status(200).json(asset);
  },
  getByClient: async (req, res) => {
    const { codCliente } = req.params;
    const client = await assetsService.getByClient(codCliente);

    res.status(200).json(client);
  },
};

module.exports = assetsController;