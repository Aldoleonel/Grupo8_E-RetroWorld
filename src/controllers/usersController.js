module.exports = {
    
    processLogin : require('./users/processLogin'),
    login : require('./users/login'),
    register : (req,res) => {
        return res.render('register')
    },
    processRegister: require('./users/processRegister')
     
    
}