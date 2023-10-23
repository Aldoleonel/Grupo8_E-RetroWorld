const { validationResult } = require("express-validator")
const db = require('../../database/models')


module.exports = (req,res) => {

    const errors = validationResult(req);
    console.log(req.session.userLogin);
    if(errors.isEmpty()){

        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(user => {
            // return res.send(user);
            const {id,firstName,roleId} = user;
            
            req.session.userLogin = {
                id,
                firstName,
                roleId
            }

            req.body.remember !== undefined && res.cookie('secretaso',req.session.userLogin,{
                maxAge : 1000 * 60 * 5
            })
            
            
            return res.redirect('/')
        })

    }else {
        return res.render('login',{
            errors : errors.mapped(),
            
        })
    }

  
}