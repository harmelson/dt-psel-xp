const clientsService = require('../services/clientsService');

const clientsController = {
  findById: async (req, res) => {
    const { id } = req.params;
    const client = await clientsService.findById(id);

    res.status(200).json(client);
  },
  sumBalance: async (req, res) => {
    const { CodCliente: codCliente, Valor: valor } = req.body;
    await clientsService.sumBalance(codCliente, valor);

    res.status(200).json({ message: `R$${valor} foram adicionados na conta ${codCliente}` });
  },
  subBalance: async (req, res) => {
    const { CodCliente: codCliente, Valor: valor } = req.body;
    await clientsService.subBalance(codCliente, valor);

    res.status(200).json({ message: `R$${valor} foram sacados da conta ${codCliente}` });
  },
  sellAsset: async (req, res) => {
    const { CodCliente: codCliente, CodAtivo: codAtivo, QntdAtivo: qntdAtivo } = req.body;
    await clientsService.sellAsset(codCliente, codAtivo, qntdAtivo);

    res.status(200).json({ 
      message: `Cliente ${codCliente} vendeu ${qntdAtivo} ${codAtivo} com sucesso!`, 
    });
  },
};

module.exports = clientsController;