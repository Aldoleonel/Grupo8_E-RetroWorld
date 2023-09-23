const Product = require("../../data/Product");
const { readJSON,writeJson } = require("../../data/index");

//const products= readJSON('products')

module.exports = (req, res) => {
    const products= readJSON('products')
    const newProduct = new Product(req.body)
    newProduct.image= req.file?req.file.filename:null
     products.push(newProduct)
    writeJson(products,'products')
    
    return res.redirect('/admin')
}
