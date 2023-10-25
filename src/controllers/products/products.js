const { readJSON } = require("../../data/index");
const db = require('../../database/models')
//const products= readJSON('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    db.Product.findAll()
        .then(products => {
            console.log(products);
            return res.render('products',{
                        products,
                        toThousand
                        
            });
    }).catch(error=>console.log(error));
}