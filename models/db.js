const Sequelize = require('sequelize');

const sequelize = new Sequelize('vitor_pizzas', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('sucessful');
  }).catch((error) => {
    console.log(`erro ai meu${error}`);
  });

module.exports = sequelize;
