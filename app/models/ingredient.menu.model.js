const Sequelize = require('sequelize');
const sequelize = require('./db');
const menu = require('./menu.model');

const { DataTypes } = Sequelize;

const ingredientPizza = sequelize.define(
  'ingredient_pizza',
  {
    menu_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ingredient_name: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  },
);

menu.hasMany(ingredientPizza, { foreignKey: 'menu_id' });
ingredientPizza.belongsTo(menu, { foreignKey: 'menu_id' });

module.exports = ingredientPizza;
