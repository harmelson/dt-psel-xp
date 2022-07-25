const createClientModel = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, validate: { unique: true } },
    password: DataTypes.STRING,
    currency: DataTypes.STRING,
    balance: DataTypes.DECIMAL,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'clients',
  });

  Client.associate = (models) => {
    Client.hasMany(models.ClientAsset, { as: 'clientAsset', foreignKey: 'client_id' });
  };

  return Client;
};

module.exports = createClientModel;