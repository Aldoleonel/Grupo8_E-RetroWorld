let {body}=require('express-validator')

module.exports = [
    body("firstName")
      .isLength({
        min: 2,
      })
      .withMessage("Por favor ingrese su nombre")
      .isAlpha("es-ES")
      .withMessage("Por favor sólo letras"),
    body("lastName")
      .isLength({
        min: 2,
      })
      .withMessage("Por favor ingrese su apellido"),
    body("phone")
      .notEmpty()
      .withMessage("Por favor ingrese un numero de teléfono")
      .isNumeric({min:4})  
      .withMessage("Por favor sólo números"),
    body("genreId")
      .notEmpty()
      .withMessage("Por  favor selecciona un genero")
  ];
  /*
  ,
    body("email")
      .notEmpty()
      .withMessage("Por favor ingrese su email")
      .isEmail()
      .withMessage("Formato inválido"),
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
      }).withMessage('Las contraseñas no coinciden')
      
  */