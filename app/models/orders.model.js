const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;
const Orders = sequelize.define(
  'orders',
  {
    status: {
      type: DataTypes.STRING,
    },
    client_id: {
      type: DataTypes.INTEGER,
    },
    payment_method: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    address_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
  },
);

module.exports = Orders;
