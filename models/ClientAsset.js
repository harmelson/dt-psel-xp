const createClientAssetModel = (sequelize, DataTypes) => {
  const ClientAsset = sequelize.define('ClientAsset', {
    assetCode: { type: DataTypes.STRING, primaryKey: true },
    clientId: { type: DataTypes.INTEGER, foreignKey: true },
    assetQnt: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'clients_assets',
  });

  ClientAsset.associate = (models) => {
    ClientAsset.belongsTo(models.Client, { as: 'client', foreignKey: 'client_id' });
  };

  return ClientAsset;
};

module.exports = createClientAssetModel;