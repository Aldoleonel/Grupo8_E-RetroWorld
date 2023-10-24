const { validationResult } = require("express-validator");
const db = require('../../database/models'); // Importa aquí tus modelos de base de datos

module.exports = (req, res) => {
    const { firstName,lastName,birthdate,password,gender,phone,email,password2,acceptTerms } = req.body;
    const errores = validationResult(req);

    if (errores.isEmpty()) {
        db.User.create({
            firstName,
            email,
            lastName,
            birthdate,
            gender,
            phone,
            password2,
            acceptTerms,
            password // Asegúrate de cifrar la contraseña antes de almacenarla
        })
            .then(usuario => {
                res.redirect('/login');
            })
            .catch(error => {
                console.log(error);
                // Maneja cualquier error que ocurra durante la creación del usuario, por ejemplo, un correo electrónico duplicado
            });
    } else {
        // Maneja los errores de validación
        return res.render('register', {
            errores: errores.array(), // Es posible que necesites ajustar esto según tu configuración de validación
            datosAntiguos: req.body
        });
    }
};
