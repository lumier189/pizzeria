const express = require("express");
const router = express.Router();
const orderItems = require("../controllers/order.items.controller");


router.get("/", orderItems)



module.exports = router;