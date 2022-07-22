const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});