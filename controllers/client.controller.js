const Client = require('../models/clients.model');
const Adresses = require('../models/adresses.model');
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }))

async function listAllClients(req, res) {
  // Client.hasMany(Adresses, {foreignKey: 'client_id'});
  // Adresses.belongsTo(Client, {foreignKey: 'client_id'});

  const arrayClient = await Client.findAll({ include: [Adresses] });
  return res.send({ Client: arrayClient });
}

async function createNewClient(req, res) {
  const adressData = req.body.adress;
  const defaultAdress = await Adresses.create(adressData);

  const clientData = req.body;
  clientData.adress_id = defaultAdresses.id;
  const client = await Client.create(clientData);

  defaultAdress.client_id = client.id;
  await defaultAdress.save();
  
  return res.status(201).json(client);
}

module.exports = { listAllClients, createNewClient };
