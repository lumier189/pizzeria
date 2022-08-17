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
},
{
  underscored:true
});

module.exports = MenuSize;
