/*Controladores para los partials HEADER Y FOOTER*/ 

module.exports = {
    header : (req,res) => {
        return res.render('partials/header');
    },

    footer : (req,res) => {
        return res.render('partials/footer');
    }
};