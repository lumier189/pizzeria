const Sequelize = require('sequelize');
const sequelize = require('./db');
const Addresses = require('./addresses.model');

const { DataTypes } = Sequelize;

const Client = sequelize.define(
  'client',
  {

    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    birth_date: {
      type: DataTypes.STRING,
    },
    marital_status: {
      type: DataTypes.STRING,
    },
    address_id: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  },
);

Client.hasMany(Addresses, { foreignKey: 'client_id' });
Addresses.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = Client;
