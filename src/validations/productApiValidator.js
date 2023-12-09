const {check} = require('express-validator')

module.exports = [
    check('name')
        .notEmpty().withMessage('El campo nombre es obligatorio'),
    check('price')
        .notEmpty().withMessage('El campo price es obligatorio'),
    check('description')
        .notEmpty().withMessage('El campo description es obligatorio'),
    check('categoryId')
        .notEmpty().withMessage('El campo categoryId es obligatorio'),
    
]