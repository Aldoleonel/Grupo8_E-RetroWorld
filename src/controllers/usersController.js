/*Controladores de usuarios LOGIN Y REGISTRO*/

module.exports = {
    login : (req,res) => {
        return res.render('login');
    },

    register : (req,res) => {
        return res.render('registro');
    }

    
}