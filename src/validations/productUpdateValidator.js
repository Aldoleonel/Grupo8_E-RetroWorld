const { body ,check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Por favor ingrese el nombre del producto")
    .isLength({
      min : 3,
      max : 80
    }).withMessage('El nombre del producto debe tener al menos 3 caracteres y no puede superar los 80 caracteres'),

  check("categoryId")
    .notEmpty()
    .withMessage("Por favor seleccione una categoria"),
    
  check("sectionId")
  .notEmpty()
  .withMessage("Por favor seleccione una seccion  del producto"),

  check("typeId")
  .notEmpty()
  .withMessage("Por favor seleccione el tipo de producto"),
    
  body("price")
  .notEmpty()
    .withMessage("Por favor ingrese el precio del producto")
    .isInt({
      gt: 1,
    })
    .withMessage("El número debe ser positivo"),

    check("description")
    .notEmpty()
    .withMessage("Por favor ingrese una descripción")
    .isLength({
      min: 10,
      max: 500,
    }).withMessage('La descripción debe tener entre 10 y 500 caracteres')

];
