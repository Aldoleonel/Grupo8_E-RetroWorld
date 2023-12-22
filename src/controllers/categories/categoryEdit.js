const fs = require('fs');
const path = require('path');

const db = require('../../database/models')

module.exports=(req,res)=>{
	const {id} = req.params;

	const products = db.Product.findAll();
	const category = db.Category.findByPk(id);

	Promise.all([products,category])
        .then(([products,category]) => {
			// return res.send(types)
			return res.render('categoryEdit', {
				...category.dataValues,
				products
				
			})
		}).catch(error=>console.log(error));
        
	}
   
		
	
    