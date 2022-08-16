const orderItems = require('../models/order.items.model');

async function listOrderItems(req, res) {
  const arrayItems = await orderItems.findAll();

  return res.send(arrayItems);
}

module.exports = listOrderItems;
