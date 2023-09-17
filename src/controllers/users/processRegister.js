const { validationResult } = require("express-validator");
const { readJSON, writeJson } = require("../../data/index");
const User = require("../../data/User");

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const users = readJSON('usersDB');
        const user = new User(req.body);
    
        users.push(user);
        writeJson(users,'usersDB')
    
        return res.redirect('/users/login')
    }else {
        return res.render('register',{
            errors : errors.mapped(),
            old : req.body
        })
    }
    
 
}