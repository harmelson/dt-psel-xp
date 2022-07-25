const express = require('express');
const bodyParser = require('body-parser');
const clientsRouter = require('./routers/clientsRouter');
const assetsRouter = require('./routers/assetsRouter');
const investmentsRouter = require('./routers/investmentsRouter');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/conta', clientsRouter);
app.use('/ativos', assetsRouter);
app.use('/investimentos', investmentsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});