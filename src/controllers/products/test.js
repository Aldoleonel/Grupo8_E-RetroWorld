const { readJSON } = require("../../data")

module.exports=(req,res)=>{
    const products= readJSON('products')


    res.render('test',{
        products
    })
}