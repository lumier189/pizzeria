const Sequelize = require('sequelize');
const sequelize = require('./db');
const Ingredients = require('./ingredients.model');

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
    img: {
      type: DataTypes.STRING,
    },
    category: DataTypes.STRING,
  },
  {
    underscored: true,
  },
);

Menu.belongsToMany(Ingredients, { through: 'ingredient_pizzas' });
Ingredients.belongsToMany(Menu, { through: 'ingredient_pizzas' });

module.exports = Menu;
