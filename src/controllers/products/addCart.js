const { readJSON, writeJson } = require("../../data");

module.exports = (req, res)=>{
    const products = readJSON('products');
    const cartShopping = readJSON('cartShopping');
    const addProduct = products.find(producto => producto.id === req.params.id);
    // console.log(addProduct);
    cartShopping.push(addProduct);
    writeJson(cartShopping, 'cartShopping');
    res.redirect('/');
}