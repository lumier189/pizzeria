const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const menuController = require("../controllers/menu.controller")





router.get("/", menuController)





module.exports = router;