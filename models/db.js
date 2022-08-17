const Sequelize = require('sequelize');
const { DB_NAME, DB_HOST, DB_PASS, DB_USER } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('sucessful');
  }).catch((error) => {
    console.log(`erro ai meu${error}`);
  });

module.exports = sequelize;
