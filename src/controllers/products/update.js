const {existsSync,unlinkSync} = require('fs')
const { readJSON,writeJson } = require("../../data/index");
const {validationResult} = require('express-validator')

const products= readJSON('products')


//Falta Editar Imagen
module.exports=(req,res)=>{

	let errors = validationResult(req);
	if(errors.isEmpty()){
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
	}else{
		// return res.send(errors);
		const productEdit = products.find(product => product.id === req.params.id);
		// return res.send(productDetail);
		res.render('productEdit',{
			errors: errors.mapped(),
			old: req.body,
			productEdit
		})
	}
	
	}
