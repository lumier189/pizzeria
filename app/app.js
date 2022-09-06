require('dotenv').config();
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const logger = require('morgan');
const menuRouter = require('./routes/menu.router');
const clientRouter = require('./routes/client.router');
const orderRouter = require('./routes/order.router');
const ingredientRouter = require('./routes/ingredient.router');
const authRouter = require('./routes/auth.router');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/pizzas', menuRouter);
app.use('/clients', clientRouter);
app.use('/orders', orderRouter);
app.use('/ingredients', ingredientRouter);
app.use('/auth', authRouter);

app.use(errorHandler);
// app.listen(process.env.PORT || 3001);
// eslint-disable-next-line no-console
console.log('server up');

module.exports = app;
