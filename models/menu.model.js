const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Menu = sequelize.define('menu', {
  name: {
    type: DataTypes.STRING,

  },
  is_active: {
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
}, {
  timestamps: false,
});

module.exports = Menu;
