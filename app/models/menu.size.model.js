const Sequelize = require('sequelize');
const sequelize = require('./db');
const menu = require('./menu.model');

const { DataTypes } = Sequelize;

const menuSize = sequelize.define(
  'menu_size',
  {
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
  },
  {
    underscored: true,
  },
);

menu.hasMany(menuSize, { foreignKey: 'menu_id' });
menuSize.belongsTo(menu, { foreignKey: 'menu_id' });

module.exports = menuSize;
