/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
const Client = require('../models/clients.model');
const Addresses = require('../models/addresses.model');

const saltRounds = Number(process.env.SALT_ROUNDS);

async function create(req, res) {
  const {
    address: addressData,
    name,
    phone,
    email,
    birth_date,
    marital_status,
    gender,
    password,
  } = req.body;
  const defaultAddress = await Addresses.create(addressData);
  const hashedPass = await bcrypt.hash(password, saltRounds);
  const client = await Client.create({
    name,
    phone,
    email,
    birth_date,
    marital_status,
    gender,
    password: hashedPass,
    address_id: defaultAddress.id,
  });

  defaultAddress.client_id = client.id;
  await defaultAddress.save();

  return res.status(201).json(client);
}

module.exports = { create };
