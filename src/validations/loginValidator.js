const { check, body } = require("express-validator");
const { readJSON } = require("../data");
const { compareSync } = require("bcryptjs");
module.exports = [
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),
  body("password")
    .custom((value, {req}) => {
        const users = readJSON('usersDB');
        const user = users.find(user => user.email === req.body.email);
       
      console.log(user)
        if(!user || !compareSync(value,user.password)){
            return false
        }
            return true
        // if(!user || (value !== user.password)){
        //   return false
        // }else{
        //   return true
        // }
        }).withMessage('Credenciales inválidas')         

];
