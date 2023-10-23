const db = require('../database/models');

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

        return db.User.findOne({
          where:{
            email: req.body.email
          }
        })
        .then(user => {
          console.log(user)
          if(!user || !compareSync(value,user.password)){
            console.log('hola llegue hasta acá')
            return Promise.reject()
          }
        })
        .catch(() => Promise.reject('Credenciales inválidas'))
        
        })      

];
