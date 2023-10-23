const { validationResult } = require("express-validator");
const db = require('../../database/models');

//const products= readJSON('products')

module.exports = (req, res) => {

    const { name, categoryId, sectionId, typeId, price, discount,image, description,stock } = req.body
   
    
   
    db.Product.create({
        name,
         categoryId,
         sectionId,
         typeId,
         price,
         discount:discount || 0,
         image:req.file?req.file.filename:'default-image.png',
         description,
        stock
    })
        .then(product=>{
            res.send(product)
        }).catch(error=>console.log(error))


    /* const errors = validationResult(req);
    
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
        
    } */

}

