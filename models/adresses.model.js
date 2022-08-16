const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Adresses = sequelize.define('adresses', {
  street_adress: {
    type: DataTypes.STRING,

  },
  number: {
    type: DataTypes.TINYINT,
  },
  postal_code: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state_province: {
    type: DataTypes.STRING,
  },
  client_id: {
    type: DataTypes.INTEGER,
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

module.exports = Adresses;
