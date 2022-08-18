const express = require('express');

const router = express.Router();
const order = require('../controllers/order.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/:id', order.get);
router.get('/', order.list);
router.post('/', auth.auth, order.create);

module.exports = router;
