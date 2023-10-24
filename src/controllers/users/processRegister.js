const { validationResult } = require("express-validator");
const db = require('../../database/models'); 
const bcrypt = require("bcryptjs");


module.exports = (req, res) => {
    const { firstName,lastName,birthdate,password,gender,phone,email,password2,acceptTerms } = req.body;
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        db.User.create({
            firstName,
            email,
            lastName,
            birthdate,
            gender,
            phone,
            password2: bcrypt.hashSync(req.body.password2, 10),
            acceptTerms,
            password: bcrypt.hashSync(req.body.password, 10)
        })
            .then(usuario => {
                res.redirect('/users/login');
            })
            .catch(error => {
                console.log(error);
                
            });
    } else {
        
        return res.render('register', {
            errors: errors.mapped(), 
            old: req.body
        });
    }
};
