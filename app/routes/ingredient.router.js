const express = require('express');

const router = express.Router();
const ingredientController = require('../controllers/ingredients.controller');

router.get('/', ingredientController.list);

module.exports = router;
