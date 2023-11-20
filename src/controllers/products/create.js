const { validationResult } = require("express-validator");
const db = require('../../database/models');
const { existsSync, unlinkSync } = require("fs");
module.exports = (req, res) => {

    const { name, categoryId, sectionId, typeId, price, discount,image, description,stock } = req.body
   
    const errors= validationResult(req)
    if(errors.isEmpty()){
    db.Product.create({
        name,
         categoryId,
         sectionId,
         typeId,
         price,
         discount:discount || 0,
         image:req.file?req.file.filename:'default-img.png',
         description,
        stock
    })
        .then(product=>{
            
            res.redirect('products')
        }).catch(error=>console.log(error))
    }else {
      
        (req.file && existsSync(`./public/img/products/${req.file.filename}`)) && unlinkSync(`./public/img/products/${req.file.filename}`);

        
        const categories = db.Category.findAll({
            order : ['name']
        });
        const sections = db.Section.findAll({
            order : ['name']
        });
        const types= db.Type.findAll({
            order:['name']
        })

        Promise.all([categories,sections,types])
        .then(([categories,sections,types])=>{
            return res.render('productAdd',{
                categories,
                sections,
                types,
                errors : errors.mapped(),
                old : req.body
            })
        }).catch(error=>console.log(error))

        

    } 
    

}

