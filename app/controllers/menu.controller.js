const Menu = require('../models/menu.model');

async function list(req, res) {
  const menu = await Menu.findAll();

  return res.json(menu);
}

module.exports = { list };
