const Menu = require("../models/menu.model")
const bodyParser = require("body-parser");




async function listAllPizzas(req,res){

    const menu = await Menu.findAll();
    console.log(menu);
    return res.send({menu: menu})
    
}


module.exports = listAllPizzas