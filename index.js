const express = require('express');
const bodyParser = require('body-parser');
const clientsRouter = require('./routers/clientsRouter');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/conta', clientsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});