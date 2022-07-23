const clientsService = require('../../services/clientsService');

const clientsValidation = {
  filterById: async (req, res, next) => {
    const { id } = req.params;
    const clients = await clientsService.findAll();
    const condition = clients.some((e) => e.id === Number(id));
    
    if (!condition) return res.status(404).json({ message: 'Cliente não encontrado' });

    next();
  },
};

module.exports = clientsValidation;