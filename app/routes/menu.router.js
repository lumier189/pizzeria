const express = require('express');

const router = express.Router();
const menuController = require('../controllers/menu.controller');

router.get('/', menuController.list);
router.get('/:id', menuController.find);

module.exports = router;
