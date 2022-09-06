const Menu = require('../models/menu.model');
const MenuSize = require('../models/menu.size.model');
const Ingredients = require('../models/ingredients.model');

async function list(req, res) {
  const menu = await Menu.findAll(({ include: [MenuSize] }));

  return res.json(menu);
}

async function find(req, res) {
  const { id } = req.params;
  const pizza = await Menu.findByPk(id, { include: [Ingredients, MenuSize] });

  return res.json(pizza);
}

module.exports = { list, find };
