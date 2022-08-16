const Sequelize = require('sequelize');
const orders = require('../controllers/order.controller');
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
    adress_id: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
    },
  }, 
  {
    timestamps: true,
  },
);
  
module.exports = Orders;
