const express = require('express');

const { checkEmail } = require('../controllers/APIs/usersApiController');
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/APIs/productsApiController');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APIs/cartApisController');
const { getAllCategory, totalProductInDB } = require('../controllers/APIs/productApisController');
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

    .get('/categories', getAllCategory)

    .get('/products/count',totalProductInDB)


/*Productos*/ 
router
    .get('/products', listProducts)
    .get('/products/:id', showProduct)
    .post('/products',createProduct)
    .put('/products/:id', updateProduct)
    .delete('/products/:id', deleteProduct)




module.exports = router;