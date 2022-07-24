const db = require('../models');
const assetsService = require('./assetsService');

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

  sellAsset: async (codCliente, codAtivo, qntdAtivo) => {
    const assets = await assetsService.getByClient(codCliente);
    const sellAsset = await assets.find((el) => el.CodAtivo === codAtivo);
    // Caso sejam vendidas todas as ações, as mesmas são retiradas da tabela clients_assets
    db.ClientAsset.destroy(
      { where: {
          clientId: codCliente,
          assetQnt: 0,
        }, 
      },
    ); 
    // Quando ações são vendidas, a quantidade de ativos do cliente é subtraida da tabela clients_assets
    await db.ClientAsset.increment( 
      { assetQnt: Number(-qntdAtivo) }, { where: { assetCode: codAtivo, clientId: codCliente } },
    );
    // Após a venda, é adicionado o valor da quantidade de ativos multiplicado pelo valor de venda atual
    await db.Client.increment({ balance: qntdAtivo * sellAsset.Valor }, {
      where: { id: codCliente }, 
    });
  },

  buyAsset: async (codCliente, codAtivo, qntdAtivo) => {
    const asset = await assetsService.getByAssets(codAtivo);
    const client = await assetsService.getByClient(codCliente);
    const hasClientAsset = await client.find((el) => el.CodAtivo === codAtivo);
    
    // Subtrai valor total da compra da conta do cliente
    await db.Client.increment({ balance: -(qntdAtivo * asset.ValorCompra) }, {
      where: { id: codCliente },
    });
    // Se o cliente já possuir o ativo comprado, a quantidade é somada na carteira
    if (hasClientAsset) {
      await db.ClientAsset.increment({ assetQnt: qntdAtivo }, {
        where: { clientId: codCliente, assetCode: codAtivo },
      });
    }
    // Se o cliente não possuir o ativo comprado, o ativo é adicionado na tabela clients_assets
    if (!hasClientAsset) {
      await db.ClientAsset.create({ 
        assetCode: codAtivo, clientId: codCliente, assetQnt: qntdAtivo, 
      });
    }
  },
};

module.exports = clientsService;