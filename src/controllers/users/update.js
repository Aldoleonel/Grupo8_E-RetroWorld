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
        const updateUser = new User(req.body);

        const updateUsers = users.map(user =>{
            if(user.id === req.session.userLogin.id){
                user = updateUser;
                req.session.userLogin.firstName = user.id;
                req.session.userLogin.firstName = user.firstName
                // console.log(user);
            }
            return user
        })
        
        req.cookies.secretaso = req.session.userLogin;
        console.log(req.session.userLogin.firstName);
        console.log(req.cookies.secretaso);
        writeJson(updateUsers,'usersDB');
        return res.redirect('/');
    }else{
        return res.render('userProfile',{
            errors : errors.mapped(),
            old : req.body
        })
    }
        /* let users = readJSON('usersDB')
        users.forEach(user => {
            if (user.id == req.params.id) {
                user.firstName = firstName
                user.lastName = lastName
                user.birthdate = birthdate
                user.gender = gender
                user.phone = phone
                user.email = email

            }
        })
        writeJson(users, 'usersDB')
        res.redirect('/') */
  
}