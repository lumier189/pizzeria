const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Client = require('../models/clients.model');

const { SECRET } = process.env;

async function login(req, res) {
  const client = await Client.findOne({ where: { email: req.body.email } });
  if (client === null || !await bcrypt.compare(req.body.password, client.password)) {
    const error = new Error('Invalid login.');
    error.httpCode = 401;
    throw error;
  }
  const { id } = client;
  const token = jwt.sign({ id }, SECRET, { expiresIn: 60 * 3 });
  return res.json({ token, expiresIn: +new Date() + 1000 * 60 * 3 });
}

module.exports = { login };
