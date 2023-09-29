const { validationResult } = require("express-validator");
const Product = require("../../data/Product");
const { readJSON,writeJson } = require("../../data");

//const products= readJSON('products')

module.exports = (req, res) => {

    const errors = validationResult(req);
    
    if(errors.isEmpty()){

        const products= readJSON('products')
        const newProduct = new Product(req.body)
        newProduct.image= req.file?req.file.filename:null
         products.push(newProduct)
        writeJson(products,'products')
        
        return res.redirect('/admin')
    }else {
        // return res.send(errors);
        return res.render('productAdd',{
            errors : errors.mapped(),
            old : req.body
        })
        
    }
    
}

