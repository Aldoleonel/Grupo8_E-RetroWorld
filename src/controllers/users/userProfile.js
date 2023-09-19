const { readJSON } = require("../../data");
const users = readJSON('usersDB')

module.exports = (req,res)=>{
    const users = readJSON('usersDB')
    const user = users.find(user => user.id === req.session.userLogin.id);
    console.log(user);
    
    return res.render('userProfile',{
        ...user
    })//,{userFind})
}