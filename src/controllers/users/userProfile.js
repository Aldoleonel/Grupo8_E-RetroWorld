const { readJSON } = require("../../data");

module.exports = (req,res)=>{
    const users = readJSON('usersDB');
   
    users.forEach(element => {
       
    });
     const userFind= users.find(user=>{return user.id==req.session.userLogin.id}) 
    
  
    return res.render('userProfile',{userFind})
}