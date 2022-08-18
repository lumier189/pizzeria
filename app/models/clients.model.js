const Sequelize = require('sequelize');
const sequelize = require('./db');
const Adresses = require('./adresses.model');

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
    adress_id: {
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

Client.hasMany(Adresses, { foreignKey: 'client_id' });
Adresses.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = Client;
