const express = require("express");
const router = express.Router();
const clientCrontroller = require("../controllers/client.controller")


router.post("/", clientCrontroller.createNewClient);


module.exports = router;