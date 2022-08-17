const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller");


router.get("/:id", order.orders)
router.post("/", order.createOrder )


module.exports = router;