const assets = require('../models/Asset');

const assetsService = {
  findByAssetCode: async (assetCode) => {
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
};

module.exports = assetsService;