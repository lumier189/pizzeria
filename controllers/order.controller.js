const Orders = require('../models/orders.model');
const OrderItems = require('../models/order.items.model');
const MenuSize = require("../models/menu.size.model");

async function orders(req, res) {
  const { id } = req.params;
  Orders.hasMany(OrderItems, { foreignKey: 'order_id' });
  OrderItems.belongsTo(Orders, { foreignKey: 'order_id' });
  const arrayOrders = await Orders.findByPk(id, { include: [OrderItems] });

  return res.send({ order: arrayOrders });
}


async function createOrder(req, res) {
  const orderData = req.body;
  const itemsData = req.body.items

  const promessas = itemsData.map(async (itemsData) => {
    const findPrice = await MenuSize.findOne({
      where: {
        menu_id: itemsData.menu_id,
        size_id: itemsData.size_id
      }
    });

    itemsData.price = findPrice.price * itemsData.quantity
    const resultadoItems = await OrderItems.create(itemsData);
    return resultadoItems
  })

  const resultado = await Promise.all(promessas)
  var price = 0
  for (var i = 0; i < resultado.length; i++) {
    price += resultado[i].price;
  };
  
  orderData.price = price
  const resultadoOrders = await Orders.create(orderData);

  for (var i = 0; i < resultado.length; i++) {
    resultado[i].order_id = resultadoOrders.id;
    await resultado[i].save();
  }
};





module.exports = { orders, createOrder };
