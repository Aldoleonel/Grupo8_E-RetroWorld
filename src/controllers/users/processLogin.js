const { validationResult } = require("express-validator")
const { readJSON } = require("../../data")

module.exports = (req,res) => {

    const errors = validationResult(req);
    console.log(req.session.userLogin);
    if(errors.isEmpty()){
        const users = readJSON('usersDB')
        const {id,firstName,category} = users.find(user => user.email === req.body.email)
        
        req.session.userLogin = {
            id,
            firstName,
            category
        }

        req.body.remember !== undefined && res.cookie('secretaso',req.session.userLogin,{
            maxAge : 1000 * 60 * 5
        })
        
        
        return res.redirect('/')
    }else {
        return res.send(errors.mapped())
    }

  
}