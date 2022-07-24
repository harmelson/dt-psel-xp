const assetsModel = require('../../models/Asset');
const clientsService = require('../../services/clientsService');

const assetsValidation = {
  filterGetByAssetCode: async (req, res, next) => {
    const { codAtivo } = req.params;
    const asset = await assetsModel(codAtivo);

    if (asset.length === 0) return res.status(404).json({ message: 'Ativo não encontrado' });

    next();
  },
  filterByClientCode: async (req, res, next) => {
    const { codCliente } = req.params;

    const clients = await clientsService.findAll();
    const idExist = clients.some((e) => Number(e.id) === Number(codCliente));
  
    if (!idExist) return res.status(404).json({ message: 'Cliente não encontrado' });
  
    next();
  },
};

module.exports = assetsValidation;