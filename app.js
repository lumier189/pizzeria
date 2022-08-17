require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const bodyParser = require("body-parser");
var menuRouter = require('./routes/menu.router');
const registerRouter = require("./routes/register.router");
const orderRouter = require("./routes/order.router");
const ingredientRouter = require("./routes/ingredients.router");
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/pizzas", menuRouter);
app.use("/clients", registerRouter);
app.use("/orders", orderRouter);
app.use("/ingredients", ingredientRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


app.listen(process.env.PORT || 3001);
console.log("server up");


module.exports = app