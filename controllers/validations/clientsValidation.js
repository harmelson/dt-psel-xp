const clientsService = require('../../services/clientsService');

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
};

module.exports = clientsValidation;