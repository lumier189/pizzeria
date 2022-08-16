const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Ingredients = sequelize.define('ingredient', {
  name: {
    type: DataTypes.STRING,

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

module.exports = Ingredients;
