const { readJSON } = require('../data/index');


const fs = require('fs');
const path = require('path');
//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')
const users = readJSON('usersDB');
const moment = require('moment')

module.exports = {
    index : (req,res) => {
        db.Product.findAll()
        .then(products => {
            //console.log(products);
            return res.render('index',{
                        productsVisited : products.filter(product => product.sectionId === 2),
                        productsSale : products.filter(product => product.sectionId === 1),
                        toThousand,
                        ...users
            });
        })

    
     },
    admin : (req,res) => {
        // console.log(products);
        const categories = db.Category.findAll();
        const products = db.Product.findAll();
        const users = db.User.findAll();

        Promise.all([categories, products, users])
            .then(([categories,products, users]) => {
                // return res.send(users);
                return res.render('admin',{
                    products,
                    category: categories,
                    users,
                    moment 
                })
            })
            .catch(error => console.log(error))

        
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
        db.Product.findAll()
            .then(products => {
                const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()));
                console.log(results);
                return res.render('results', {
                    results,
                    toThousand,
                    keywords: req.query.keywords
                });
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send("Error en la búsqueda de productos.");
            });
    }
        
        // const products = readJSON('products');
        //  const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
        //  return res.render('results',{
		// 	results,
		// 	toThousand,
		//  	keywords:req.query.keywords
		 
        
	
    
}