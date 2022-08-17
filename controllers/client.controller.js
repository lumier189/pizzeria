const Client = require('../models/clients.model');
const Adresses = require('../models/adresses.model');
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALT_ROUNDS);


async function createNewClient(req, res) {
  const {
      adress: adressData,
      name,
      phone,
      email,
      birth_date,
      marital_status,
      gender,
      password 
    } = req.body;
    console.log(saltRounds,password)
  const defaultAdress = await Adresses.create(adressData);
  const hashedPass = await bcrypt.hash(password, saltRounds);
  const client = await Client.create({
    name,
    phone,
    email,
    birth_date,
    marital_status,
    gender,
    password: hashedPass,
    adress_id: defaultAdress.id
  });

  defaultAdress.client_id = client.id;
  await defaultAdress.save();
  
  return res.status(201).json(client);
}

module.exports = { createNewClient };
