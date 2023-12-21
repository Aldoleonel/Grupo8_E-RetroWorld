const { validationResult } = require("express-validator");
const db = require('../../database/models');
const { existsSync, unlinkSync } = require("fs");
module.exports = (req, res) => {

    const { name, image } = req.body;

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        console.log("La puerca esta en la cueva");
        db.Category.create({
            name, 
            image: req.file ? req.file.filename : null
        })
        .then(category => {
            res.redirect('/admin');
        }).catch(error=>console.log(error))
    }else {
        (req.file && existsSync(`/img/products/${req.file.filename}`)) && unlinkSync(`/img/products/${req.file.filename}`);
        const products= db.Product.findAll({
            order : ['name']
        })
        Promise.all([products])
        .then((products)=>{
            return res.render('categoryAdd',{
                products,
                errors : errors.mapped(),
                old : req.body
            })
        }).catch(error=>console.log(error))

        

    } 
    

}
