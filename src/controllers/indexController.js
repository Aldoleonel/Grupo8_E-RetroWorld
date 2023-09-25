const { readJSON } = require('../data/index');

const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const users = readJSON('usersDB');

module.exports = {
    index : (req,res)=> {
        const users = readJSON('usersDB');
      
        return res.render('index',{
			productsVisited : products.filter(product => product.estado === "visited"),
			productsSale : products.filter(product => product.estado === "in-sale"),
		    toThousand,
            ...users
		});
    },
    admin : (req,res) => {
        // console.log(products);
        const category = [
            {
                id: 1,
                name: 'playstation',
                cant: 0,
                image: null
            },
            {
                id: 2,
                name: 'xbox',
                cant: 0,
                image: null
            },
            {
                id: 3,
                name: 'nintendo',
                cant: 0,
                image: null
            },
            {
                id: 4,
                name: 'retro',
                cant: 0,
                image: null
            }
        ]
        /*HAY QUE VOLVER A LEER LA BASE DE DATOS DENTRO DEL METODO ADMIIN
         CONST PRODUCTS=READJSON de abajo 
         */

        const products=readJSON('products')
        products.forEach(producto => {
            category.forEach(categ =>{
                if(producto.category === categ.name){
                    categ.cant = categ.cant + 1;
                }
            })
        });
        return res.render('admin',{
            products,
            category,
            users
        })
    },

    /*Controlador de Carrito de Compras*/
    cart: (req,res)=>{
        const cartShopping = readJSON('cartShopping');
        const priceFinal = cartShopping.reduce((a,b)=>a.price + b.price);
        return res.render('carritoDeCompras',{
            cartShopping,
            priceFinal,
            toThousand,
        });
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