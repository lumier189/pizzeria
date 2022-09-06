const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Ingredients = sequelize.define(
  'ingredients',
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  },
);

module.exports = Ingredients;
