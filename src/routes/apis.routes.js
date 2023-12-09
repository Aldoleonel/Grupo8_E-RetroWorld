const express = require('express');
const { checkEmail } = require('../controllers/APIs/usersApiController');
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/APIs/productsApiController');
const upload = require('../middlewares/upload');
const productApiValidator = require('../validations/productApiValidator');
const router = express.Router();



/* /apis/ */

/*Usuarios*/ 
router
    .get('/check-email',  checkEmail);




/*Productos*/ 
router
    .get('/products', listProducts)
    .get('/products/:id', showProduct)
    .post('/products',upload.single('image'),productApiValidator,createProduct)
    .put('/products/:id',upload.single('image'),updateProduct)
    .delete('/products/:id', deleteProduct)




module.exports = router;