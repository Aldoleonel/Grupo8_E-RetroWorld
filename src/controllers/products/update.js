const {existsSync,unlinkSync} = require('fs')
const { readJSON,writeJson } = require("../../data/index");

const products= readJSON('products')


//Falta Editar Imagen
module.exports=(req,res)=>{
    
		const { name, price, discount, description, category } = req.body;
		// console.log(req.file.filename)
		const productsModify = products.map(product => {

			if (product.id === req.params.id) {
				req.file && existsSync(`./public/img/products/${product.image}`) && unlinkSync(`./public/img/products/${product.image}`)
				product.name = name.trim();				
				product.price = +price;
				product.discount = +discount;
				product.category = category;
				product.description = description.trim();
                product.image = req.file ? req.file.filename : product.image;
			}
			return product;
		});
       
        
	
		writeJson(products,'products')
		return res.redirect('/')
	}
