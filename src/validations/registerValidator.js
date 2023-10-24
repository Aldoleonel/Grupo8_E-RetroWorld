const { body } = require("express-validator");
const db = require('../database/models');

module.exports = [
  body("firstName")
    .isLength({
      min: 2,
    })
    .withMessage("Por favor ingrese su nombre")
    .isAlpha("es-ES", { ignore: ' ' })
    .withMessage("Por favor sólo letras"),

  body("lastName")
    .isLength({
      min: 2,
    })
    .withMessage("Por favor ingrese su apellido")
    .isAlpha("es-ES", { ignore: ' ' })
    .withMessage("Por favor sólo letras"),

  body("phone")
    .notEmpty()
    .withMessage("Por favor ingrese un número de teléfono")
    .isNumeric()
    .withMessage("Por favor sólo números"),

  body("email")
    .notEmpty()
    .withMessage("Por favor ingrese su email")
    .isEmail()
    .withMessage("Formato inválido")
    .custom(async (value, { req }) => {
      const user = await db.User.findOne({ where: { email: value } });

      if (user) {
        return Promise.reject("Este email ya se encuentra registrado");
      }
    }),

  body("password")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("Por favor ingrese una contraseña con entre 6 y 12 caracteres"),

    body('password2')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        console.log('Contraseñas no coinciden:', value, req.body.password);
        return Promise.reject("Las contraseñas no coinciden");
      }
    }),

  body('acceptTerms')
    .notEmpty()
    .withMessage('Por favor acepte los términos y condiciones')
];