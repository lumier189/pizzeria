const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const ingredientController = require("../controllers/ingredients.controller")





router.get("/", ingredientController)





module.exports = router;