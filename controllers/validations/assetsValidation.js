const assetsModel = require('../../models/Asset');
const clientsService = require('../../services/clientsService');
const assetsService = require('../../services/assetsService');

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
  filterGetByAssetCodeBody: async (req, res, next) => {
    const { CodAtivo: codAtivo, CodCliente: codCliente } = req.body;
    const asset = await assetsModel(codAtivo);
    const assets = await assetsService.getByClient(codCliente);
    const sellAsset = await assets.find((el) => el.CodAtivo === codAtivo);

    if (asset.length === 0) return res.status(404).json({ message: 'Ativo não encontrado' });
    if (!sellAsset) {
 return res.status(404).json({ message: 
    `Cliente não possui ${codAtivo} em carteira` }); 
}
    
    next();
  },
};

module.exports = assetsValidation;