const fs = require('fs');
const path = require('path');
const { readJSON,writeJson } = require("../../data/index");

const products= readJSON('products')

module.exports=(req,res)=>{
    
		const productDetail = products.find(product => product.id === req.params.id)
        
		return res.render('productEdit', {
			productDetail
            
			
		})
        
	}
   
		
	
    