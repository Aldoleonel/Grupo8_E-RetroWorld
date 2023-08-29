const { readJSON } = require("../../data/index");

const products= readJSON('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    return res.render('products',{
        products,
        toThousand
    });
}