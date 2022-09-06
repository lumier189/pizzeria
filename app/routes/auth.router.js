const express = require('express');

const router = express.Router();
const authCrontroller = require('../controllers/auth.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/login', authCrontroller.login);
router.get('/profile', auth.auth, authCrontroller.profile);

module.exports = router;
