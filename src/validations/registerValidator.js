const { body } = require("express-validator");
const { readJSON } = require("../data/index");
module.exports = [
  body("firstName")
    .isLength({
      min: 2,
    })
    .withMessage("Por favor ingrese su nombre")
    .isAlpha("es-ES", {ignore: ' '})
    .withMessage("Por favor sólo letras"),
  body("lastName")
    .isLength({
      min: 2,
    })
    .withMessage("Por favor ingrese su apellido")
    .isAlpha("es-ES", {ignore: ' '})
    .withMessage("Por favor sólo letras"),
  body("phone")
    .notEmpty()
    .withMessage("Por favor ingrese un numero de teléfono")
    .isNumeric({min:4})  
    .withMessage("Por favor sólo números"),
  body("email")
    .notEmpty()
    .withMessage("Por favor ingrese su email")
    .isEmail()
    .withMessage("Formato inválido")
    .custom((value, { req }) => {
      const users = readJSON("usersDB");
      const user = users.find((user) => user.email === value);

      if (user) {
        return false;
      }
      return true;
    })
    .withMessage("Este email ya se encuentra registrado"),
  body("password").isLength({
    min: 6,
    max: 12,
  }).withMessage('Por favor ingrese una contraseña la misma debe tener entre 6 y 12 carácteres'),
  body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden'),
    body('acceptTerms')
    .notEmpty()
    .withMessage('Por favor acepte los términos y condiciones')
];
