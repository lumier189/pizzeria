const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const MenuSize = sequelize.define('menu_size', {
  menu_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  size_id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
  },
  price: {
    type: DataTypes.TINYINT,
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
});

module.exports = MenuSize;
