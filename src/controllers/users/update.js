const { validationResult } = require("express-validator");
const db = require('../../database/models');
const {existsSync,unlinkSync} = require('fs');

module.exports = (req, res) => {
    let errors=validationResult(req)
    
    if (errors.isEmpty()) {

        const {firstName,lastName,birthdate,genreId,phone, image} = req.body

        db.User.findByPk(req.session.userLogin.id)
            .then(user => {
                db.User.update(
                    {
                        firstName: firstName.trim(),
                        lastName: lastName.trim(),
                        birthdate,
                        genreId,
                        phone,
                        image: req.file? req.file.filename : user.image
                    },
                    {
                        where:{
                            id: req.session.userLogin.id
                        }
                    }
                )
                .then(() => {
                    if(req.file){
						req.file && existsSync(`./public/img/avatar/${user.image}`) && unlinkSync(`./public/img/avatar/${user.image}`)
					}
                    if(req.cookies.secretaso){
                        res.cookie('secretaso',req.session.userLogin);
                    }else{
                        res.locals.userLogin.firstName = firstName;
                    }
                    return res.redirect('/users/UserProfile');
                })
            })
            .catch(error => console.log(error))
    }else{

        const genres = db.Genre.findAll();
        const user = db.User.findByPk(req.session.userLogin.id);

        Promise.all([genres, user])
            .then(([genres, user])=> {
                // return res.send(user)
                return res.render('userProfile',{
                    errors : errors.mapped(),
                    old : req.body,
                    ...user.dataValues,
                    genres
                })
            })


        
    }
}