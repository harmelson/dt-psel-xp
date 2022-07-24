const assetsModel = require('../../models/Asset');

const assetsValidation = {
  filterByAssetCode: async (req, res, next) => {
    const { codAtivo } = req.params;
    const asset = await assetsModel(codAtivo);

    if (asset.length === 0) return res.status(404).json({ message: 'Ativo não encontrado' });

    next();
  },
};

module.exports = assetsValidation;