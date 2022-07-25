const clientsService = require('../../services/clientsService');
const assetsService = require('../../services/assetsService');

const clientsValidation = {
  filterById: async (req, res, next) => {
    const { id } = req.params;
    const { CodCliente: codCliente } = req.body;
    const clients = await clientsService.findAll();
    const idExist = clients.some((e) => e.id === Number(id));
    const codClienteExist = clients.some((e) => e.id === Number(codCliente));
    
    if (!id && !codCliente) return res.status(400).json({ message: 'id/CodCliente não informado' });

    if (
      !idExist && !codClienteExist
    ) return res.status(404).json({ message: 'Cliente não encontrado' });

    next();
  },

  depositValue: (req, res, next) => {
    const { Valor: valor } = req.body;

    if (Number(valor) <= 0) return res.status(400).json({ message: 'Valor deve ser maior que 0' });
    if (
      typeof valor !== 'number'
      ) return res.status(400).json({ message: 'Valor não informado ou não é um número' });    
    
    next();
  },

  withdrawValue: async (req, res, next) => {
    const { CodCliente: codCliente, Valor: valor } = req.body;
    const { Saldo: saldo } = await clientsService.findById(codCliente);

    if (valor === undefined) return res.status(400).json({ message: 'Valor não informado' });

    if (
      typeof valor !== 'number'
    ) return res.status(400).json({ message: 'Valor deve ser um número' });

    if (Number(valor) <= 0) return res.status(400).json({ message: 'Valor deve ser maior que 0' });

    if (valor > saldo) {
      return res.status(400).json({ 
            message: `Valor de saque maior que saldo em conta. Saldo atual R$${saldo}`, 
      }); 
    }

    next();
  },

  qntdAtivoValidation: async (req, res, next) => {
    const { QntdeAtivo: qntdAtivo } = req.body;

    if (!qntdAtivo) return res.status(400).json({ message: 'Quantidade de ativos não informado' });

    next();
  },

  sellAssetValidation: async (req, res, next) => {
    const { CodCliente: codCliente, CodAtivo: codAtivo, QntdAtivo: qntdAtivo } = req.body;
    const assets = await assetsService.getByClient(codCliente);
    const sellAsset = await assets.find((el) => el.CodAtivo === codAtivo);

    if (qntdAtivo > sellAsset.QtdeAtivo) {
      return res.status(400).json(
        { message: 'Quantidade a ser vendida não pode ser maior que quantidade em carteira' },
      ); 
    }

    next();
  },

  buyAssetQuantityValidation: async (req, res, next) => {
    const { QntdeAtivo: qntdAtivoCompra, CodAtivo: codAtivo } = req.body;
    const { QtdeAtivo: qntdAtivoDisp } = await assetsService.getByAssets(codAtivo);

    if (qntdAtivoCompra > qntdAtivoDisp) {
      return res.status(400).json({ 
        message: `Não é possível comprar mais de ${qntdAtivoDisp} ${codAtivo}`,
      }); 
    }

    next();
  },

  qntdBuyValidation: async (req, res, next) => {
    const { CodCliente: codCliente, QntdeAtivo: qntdAtivoCompra, CodAtivo: codAtivo } = req.body;
    const { Saldo: saldo } = await clientsService.findById(codCliente);
    const { ValorCompra: valorCompra } = await assetsService.getByAssets(codAtivo);

    if ((qntdAtivoCompra * valorCompra) > saldo) {
      return res.status(400).json({ message: 'Saldo insuficiente' });
    }

    next();
  },
};

module.exports = clientsValidation;