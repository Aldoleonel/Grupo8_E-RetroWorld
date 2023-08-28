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
        console.log(products);
        return res.render('admin',{
            products
        })
    },

    /*Controlador de Carrito de Compras*/
    cart: (req,res)=>{
        return res.render('carritoDeCompras');
    },
    search: (req, res) => {

        const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
        return res.render('results',{
			results,
			toThousand,
			keywords:req.query.keywords
		})
	}
}