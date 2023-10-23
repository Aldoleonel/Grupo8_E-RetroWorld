const {existsSync,unlinkSync} = require('fs');
const {validationResult} = require('express-validator');

const db = require('../../database/models')


//Falta Editar Imagen
module.exports=(req,res)=>{
	// const products= readJSON('products')

	let errors = validationResult(req);
	if(errors.isEmpty()){
		const { name, price, discount, image, description, categoryId, sectionId, typeId} = req.body;
		// return res.send(req.file);
		db.Product.findByPk(req.params.id)
			.then(product => {
				db.Product.update(
					{
						name: name.trim(),
						price,
						discount,
						image : req.file ? req.file.filename : product.image,
						description: description.trim(),
						categoryId,
						sectionId, 
						typeId
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
						req.file && existsSync(`./public/img/products/${product.image}`) && unlinkSync(`./public/img/products/${product.image}`)
					}
					return res.redirect('/admin');
				})
			})
			.catch(error => console.log(error))

	}else{
		// return res.send(errors);
		const {id} = req.params;

		const categories = db.Category.findAll();
		const types = db.Type.findAll();
		const sections = db.Section.findAll();
		const product = db.Product.findByPk(id);

		Promise.all([categories, types, sections,product])
			.then(([categories, types, sections, product]) => {
				// return res.send(req.body)
				return res.render('productEdit', {
					...product.dataValues,
					categories,
					sections,
					types,
					errors: errors.mapped(),
					old: req.body
				})
			})
		}
	
	}
