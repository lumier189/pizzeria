const Ingredient = require('../models/ingredients.model');

async function list(req, res) {
  const ingredients = await Ingredient.findAll();

  return res.json({ ingredients });
}

module.exports = { list };
