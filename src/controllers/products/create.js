const { readJSON,writeJson } = require("../../data/index");

const products= readJSON('products')

module.exports = (req, res) => {

    /* const {name,categoria,tipo,price,discount,description}=req.body */
    let newProduct = {
        id: products.length + 1,
        name: req.body.name.trim(),
        price: +req.body.price,
        discount: +req.body.discount,
        category: req.body.category,
        estado:req.body.estado,
        description: req.body.description.trim(),
        image: req.file?req.file.filename:null,
        stock:0
    }
     products.push(newProduct)
    writeJson(products,'products')
    return res.redirect('/admin')
}
