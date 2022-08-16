const Menu = require('../models/menu.model');

async function listAllPizzas(req, res) {
  const menu = await Menu.findAll();

  return res.send({ menu });
}

module.exports = listAllPizzas;
