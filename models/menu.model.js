const  sequelize = require("./db");

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const Menu = sequelize.define('menu', {
    name: {
      type: DataTypes.STRING,

    },
    is_active:{
        type: DataTypes.TINYINT
    },
  }, {
    timestamps:false,
  } );

module.exports = Menu;
  