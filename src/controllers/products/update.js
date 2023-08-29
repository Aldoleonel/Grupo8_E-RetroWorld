
const { readJSON,writeJson } = require("../../data/index");

const products= readJSON('products')


//Falta Editar Imagen
module.exports=(req,res)=>{
    
		const { name, price, discount, description, category } = req.body;
		const productsModify = products.map(product => {

			if (product.id === +req.params.id) {
				product.name = name.trim();
				product.price = +price;
				product.discount = +discount;
				product.category = category;
				product.description = description.trim();
                product.image = image;
			}
			return product;
		});
       
        
	
		writeJson(products,'products')
		return res.redirect('/')
	}
