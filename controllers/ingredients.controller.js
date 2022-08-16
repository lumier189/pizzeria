const Ingredients = require('../models/ingredients.model');

async function listAllIngredients(req, res) {
  const ingredients = await Ingredients.findAll();

  return res.send({ ingredients });
}

module.exports = listAllIngredients;
