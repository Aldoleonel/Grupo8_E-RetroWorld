const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index : (req,res)=> {
        return res.render('index',{
			productsVisited : products.filter(product => product.estado === "visited"),
			productsSale : products.filter(product => product.estado === "in-sale"),
		    toThousand
		});
    },
    admin : (req,res) => {
        return res.render('admin')
    },

    /*Controlador de Carrito de Compras*/
    cart: (req,res)=>{
        return res.render('carritoDeCompras');
    },
}