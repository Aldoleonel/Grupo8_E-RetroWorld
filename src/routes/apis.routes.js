const express = require('express');
const { checkEmail, changeRole } = require('../controllers/APIs/usersApiController');
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/APIs/productsApiController');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APIs/cartApisController');
const { getAllCategory, totalProductInDB } = require('../controllers/APIs/productApisController');
const upload = require('../middlewares/upload');
const productApiValidator = require('../validations/productApiValidator');
const router = express.Router();



/* /apis/ */

/*Usuarios*/ 
router
    .get('/check-email',  checkEmail)
    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart',removeItemToCart)
    .delete('/cart/item', deleteItemToCart)
    .delete('/cart/all',clearCart)
    // .get('/users', getAllUsers)
    .get('/categories', getAllCategory)
    .get('/users/:id', changeRole)
    .get('/products/count',totalProductInDB)
    .put('/changeRole/:id', changeRole)

/*Productos*/ 
router
    .get('/products', listProducts)
    .get('/products/:id', showProduct)
    .post('/products',upload.single('image'),productApiValidator,createProduct)
    .put('/products/:id',upload.single('image'),updateProduct)
    .delete('/products/:id', deleteProduct)




module.exports = router;