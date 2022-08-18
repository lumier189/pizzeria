const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Ingredients = sequelize.define(
  'ingredient',
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
