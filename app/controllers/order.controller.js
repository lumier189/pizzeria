const Orders = require('../models/orders.model');
const OrderItems = require('../models/order.items.model');
const MenuSize = require('../models/menu.size.model');

async function get(req, res) {
  const { id } = req.params;
  Orders.hasMany(OrderItems, { foreignKey: 'order_id' });
  OrderItems.belongsTo(Orders, { foreignKey: 'order_id' });
  const orders = await Orders.findByPk(id, { include: [OrderItems] });
  if (orders === null) {
    const error = new Error('order not found');
    error.httpCode = 404;
    throw error;
  }
  return res.json(orders);
}

async function list(req, res) {
  Orders.hasMany(OrderItems, { foreignKey: 'order_id' });
  OrderItems.belongsTo(Orders, { foreignKey: 'order_id' });
  const orders = await Orders.findAll({ include: [OrderItems] });

  return res.json(orders);
}

async function create(req, res) {
  const orderData = req.body;
  const { items: itemsData } = req.body;

  const promessas = itemsData.map(async (itemData) => {
    const menuSize = await MenuSize.findOne({
      where: {
        menu_id: itemData.menu_id,
        size_id: itemData.size_id,
      },
    });

    return new OrderItems({
      ...itemData,
      price: menuSize.price * itemData.quantity,
    });
  });

  const orderItems = await Promise.all(promessas);

  orderData.price = orderItems.reduce((total, orderItem) => total + orderItem.price, 0);

  const order = await Orders.create(orderData);

  await Promise.all(orderItems.map((orderItem) => OrderItems.create({
    ...orderItem.dataValues,
    order_id: order.id,
  })));

  res.status(201).json(order);
}

module.exports = { get, create, list };
