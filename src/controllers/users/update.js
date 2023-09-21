const { validationResult } = require("express-validator");
const {
    readJSON,
    writeJson
} = require("../../data");
const User = require("../../data/User");

module.exports = (req, res) => {
    const {
        firstName,
        lastName,
        birthdate,
        gender,
        phone,
        email,
        
    } = req.body
    
    let errors=validationResult(req)
    
    if (errors.isEmpty()) {

        const users = readJSON('usersDB')
        
        const updateUsers = users.map(user =>{
            if(user.id === req.session.userLogin.id){
                user.image = req.file ? req.file.filename : user.image;
                user.firstName = firstName;
                user.lastName = lastName;
                user.birthdate = birthdate;
                user.gender = gender;
                user.phone = phone;
                req.session.userLogin.firstName = firstName;
            }
            return user
        })
        writeJson(updateUsers,'usersDB');
        if(req.cookies.secretaso){
            res.cookie('secretaso',req.session.userLogin);
        }else{
            res.locals.userLogin.firstName = firstName;
        }
        return res.redirect('/');
    }else{
        const users = readJSON('usersDB')
        const user = users.find(user => user.id === req.session.userLogin.id)
        return res.render('userProfile',{
            errors : errors.mapped(),
            old : req.body,
            user


        })
    }
}