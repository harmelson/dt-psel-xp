const axios = require('axios');

const createAssetModel = async (assetCode) => {
  const url = `https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${assetCode}/1`;
  const { data } = await axios(url);

  return data;
};

module.exports = createAssetModel;