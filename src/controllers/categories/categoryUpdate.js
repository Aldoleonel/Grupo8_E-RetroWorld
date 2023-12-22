const {existsSync,unlinkSync} = require('fs');
const {validationResult} = require('express-validator');

const db = require('../../database/models')


//Falta Editar Imagen
module.exports=(req,res)=>{
	// const products= readJSON('products')

	let errors = validationResult(req);
	if(errors.isEmpty()){
		const { name,image} = req.body;
		//  return res.send(errors);
		db.Category.findByPk(req.params.id)
        .then(category => {
				db.Category.update(
					{
						name,
						image : req.file ? req.file.filename : category.image,
						
					},
					{
						where:{
							id: req.params.id
						}
					}
				)
				.then(() => {
					// return res.send(response);
					// return res.send(req.file)
					if(req.file){
						req.file && existsSync(`./public/img/products/${category.image}`) && unlinkSync(`./public/img/products/${category.image}`)
					}
					return res.redirect('/admin');
				})
			})
			.catch(error => console.log(error))

	}else{
		// return res.send(errors);
		const {id} = req.params;

		const products = db.Product.findAll();
		const category = db.Category.findByPk(id);

		Promise.all([category,products])
			.then(([category,products]) => {
				// return res.send(req.body)
				return res.render('categoryEdit', {
					...category.dataValues,
					products,
					errors: errors.mapped(),
					old: req.body
				})
			})
		}
	
	}
