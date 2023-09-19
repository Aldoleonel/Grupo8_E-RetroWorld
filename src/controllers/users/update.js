const { validationResult } = require("express-validator");
const {
    readJSON,
    writeJson
} = require("../../data")

module.exports = (req, res) => {
    const {
        firstName,
        lastName,
        birthdate,
        gender,
        phone,
        email,
    } = req.body
   
        let users = readJSON('usersDB')
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
        res.redirect('/')
  
}