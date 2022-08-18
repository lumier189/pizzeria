const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Menu = sequelize.define(
  'menu',
  {
    name: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.TINYINT,
    },
  },
  {
    underscored: true,
  },
);

module.exports = Menu;
