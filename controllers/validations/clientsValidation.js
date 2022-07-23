const clientsService = require('../../services/clientsService');

const clientsValidation = {
  filterById: async (req, res, next) => {
    const { id } = req.params;
    const { CodCliente } = req.body;
    const clients = await clientsService.findAll();
    const idExist = clients.some((e) => e.id === Number(id));
    const codClienteExist = clients.some((e) => e.id === Number(CodCliente));
    
    if (
      !idExist && !codClienteExist
    ) return res.status(404).json({ message: 'Cliente não encontrado' });

    next();
  },

  depositValue: (req, res, next) => {
    const { Valor } = req.body;
    const condition = Number(Valor) > 0;

    if (!condition) return res.status(400).json({ message: 'Valor deve ser maior que 0' });

    next();
  },

};

module.exports = clientsValidation;