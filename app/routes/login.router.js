const express = require('express');

const router = express.Router();
const loginCrontroller = require('../controllers/login.controller');

router.post('/', loginCrontroller.login);

module.exports = router;
