const express = require("express");
const router = express.Router();
const order = require("../controllers/order.controller");
const orderItems = require("../controllers/order.items.controller");



// show one order 
router.get("/:id", order.orders)
//show all orders
router.get("/", orderItems)

router.post("/", order.createOrder )


module.exports = router