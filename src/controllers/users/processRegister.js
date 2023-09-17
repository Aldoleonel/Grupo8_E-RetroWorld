const { validationResult } = require("express-validator");
const { readJSON, writeJson } = require("../../data");
const User = require("../../data/User");

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const users = readJSON('usersDB.json');
        const user = new User(req.body);
    
        users.push(user);
        writeJson(users,'usersDB.json')
    
        return res.redirect('/')
    }else {
        return res.send(errors.mapped())
    }
    
 
}