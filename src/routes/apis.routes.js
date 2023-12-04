const express = require('express');

const { checkEmail } = require('../controllers/APIs/usersApiController');
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/APIs/productsApiController');
const router = express.Router();



/* /apis/ */

/*Usuarios*/ 
router
    .get('/check-email',  checkEmail);




/*Productos*/ 
router
    .get('/products', listProducts)
    .get('/products/:id', showProduct)
    .post('/products',createProduct)
    .put('/products/:id', updateProduct)
    .delete('/products/:id', deleteProduct)




module.exports = router;