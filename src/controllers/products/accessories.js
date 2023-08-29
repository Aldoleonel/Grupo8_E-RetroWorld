const { readJSON } = require("../../data/index");

const products= readJSON('products.json')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    return res.render('accessories',{

        accessories : products.filter(product => product.type === "repuesto"),
        toThousand
    });
}