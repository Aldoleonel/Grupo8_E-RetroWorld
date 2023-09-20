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
       
        req.session.userLogin = {
            
            firstName,
            
        }

        // req.body.remember !== undefined && res.cookie('secretaso',req.session.userLogin,{
        //     maxAge : 1000 * 60 * 5
        // })
        
        const updateUsers = users.map(user =>{
            if(user.id === req.session.userLogin.id){
                
                
                user.image = req.file ? req.file.filename : user.image;
                user.firstName = firstName;
                user.lastName = lastName;
                user.birthdate = birthdate;
                user.gender = gender;
                user.phone = phone;
                user.email = email;
                image = user.image;

                
                //console.log(req.file.filename);
                 
            }
            return user
        })
        
        
        
        writeJson(updateUsers,'usersDB');
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