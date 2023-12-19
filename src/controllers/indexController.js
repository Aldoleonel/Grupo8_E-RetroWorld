const { readJSON } = require('../data/index');
const paginate = require('express-paginate');

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
    admin : async(req,res) => {
        // console.log(products);



        const categories = db.Category.findAll();
        const users = db.User.findAll({
            include:['role']
        });

        const {page,limit} =req.query
        if(page && limit){
            const response = await fetch(`http://localhost:3000/api/products?page=${page}&limit=${limit}`,{
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        })
        const {ok, data, meta} = await response.json()
        Promise.all([categories, users])
            .then(([categories, users]) => {
                const {currentPage, pagesCount, pages} = meta;
                console.log(pages)
                return res.render('admin',{
                    products:data,
                    pages: paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage),
                    paginate,
                    currentPage,
                    pagesCount,
                    category: categories,
                    users,
                    moment 
                })
            })
            .catch(error => console.log(error))
        } else{
            const response = await fetch('http://localhost:3000/api/products',{
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            const {ok, data, meta} = await response.json()
            Promise.all([categories, users])
            .then(([categories, users]) => {
                const {currentPage, pagesCount, pages} = meta;
                console.log(pages)
                return res.render('admin',{
                    products:data,
                    pages: paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage),
                    paginate,
                    currentPage,
                    pagesCount,
                    category: categories,
                    users,
                    moment 
                })
            })
            .catch(error => console.log(error))
        }
        // return res.send(data);
        // const products = db.Product.findAndCountAll({
        //     limit: req.query.limit,
        //     offset: req.skyp
        // });
        

        
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