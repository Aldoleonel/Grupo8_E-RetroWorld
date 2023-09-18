const { readJSON } = require("../../data")

module.exports= (req,res)=>{
   const users = readJSON('usersDB');
    console.log('------------'+req.params.id);
    users.for
    res.redirect('/')
}