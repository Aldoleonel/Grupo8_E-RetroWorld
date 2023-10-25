const fs = require('fs');
const path = require('path');

const db = require('../../database/models')

module.exports=(req,res)=>{
	const {id} = req.params;

	const categories = db.Category.findAll();
	const types = db.Type.findAll();
	const sections = db.Section.findAll();
	const product = db.Product.findByPk(id);

	Promise.all([categories, types, sections,product])
        .then(([categories, types, sections, product]) => {
			// return res.send(types)
			return res.render('productEdit', {
				...product.dataValues,
				categories,
				sections,
				types
			})
		}).catch(error=>console.log(error));
        
	}
   
		
	
    