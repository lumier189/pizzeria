const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;
const Items = sequelize.define(
  'orders_items',
  {
    order_id: {
      type: DataTypes.INTEGER,
    },
    menu_id: {
      type: DataTypes.INTEGER,
    },
    size_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.FLOAT,
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

module.exports = Items;
