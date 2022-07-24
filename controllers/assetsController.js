const assetsService = require('../services/assetsService');

const assetsController = {
  findByAssetCode: async (req, res) => {
    const { codAtivo } = req.params;
    const asset = await assetsService.findByAssetCode(codAtivo);

    res.status(200).json(asset);
  },
};

module.exports = assetsController;