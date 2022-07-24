const assets = require('../models/Asset');
const db = require('../models');

const assetsService = {
  getByAssets: async (assetCode) => {
    const asset = await assets(assetCode);
    const { vl_mlh_oft_compra: valorCompra,
       vl_mlh_oft_venda: valorVenda, 
       cd_acao: codAtivo, 
       qt_tit_neg: qtdeAtivo } = asset[0];
    return {
      CodAtivo: codAtivo,
      QtdeAtivo: qtdeAtivo,
      ValorCompra: valorCompra,
      ValorVenda: valorVenda,
    };
  },
  getByClient: async (codCliente) => {
    const { clientAsset } = await db.Client.findByPk(codCliente, {
      include: { model: db.ClientAsset, as: 'clientAsset' },
    });
    
    const ativos = clientAsset.map(async (e) => {
      const asset = await assets(e.assetCode);
      const [assetSellPrice] = asset.map((el) => el.vl_mlh_oft_venda);
      
      return { 
        CodCliente: Number(codCliente),
        CodAtivo: e.assetCode,
        QtdeAtivo: e.assetQnt,
        Valor: assetSellPrice,
      };
    });

    return Promise.all(ativos);
  },
};

module.exports = assetsService;