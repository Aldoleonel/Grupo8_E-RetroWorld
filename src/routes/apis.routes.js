const express = require('express');
const { checkEmail, changeRole, getusers } = require('../controllers/APIs/usersApiController');
const { listProducts, showProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/APIs/productsApiController');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APIs/cartApisController');
const { totalProductInDB } = require('../controllers/APIs/productApisController');
const upload = require('../middlewares/upload');
const productApiValidator = require('../validations/productApiValidator');
const { listCategory, showCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/APIs/categoryApiController');
const { listTypes } = require('../controllers/APIs/typeProductApiController');
const { listSections } = require('../controllers/APIs/sectionProductApiController');
const router = express.Router();



/* /APIS/ */

                /*USUARIOS*/ 

router
    .get('/users', getusers)
    .get('/check-email',  checkEmail)
    .get('/users/:id', changeRole)
    .put('/changeRole/:id', changeRole)

/*****************************************/ 

                /*CARRITO*/

router

    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart',removeItemToCart)
    .delete('/cart/item', deleteItemToCart)
    .delete('/cart/all',clearCart)
    // .get('/users', getAllUsers)

/*****************************************/     


               /*CATEGORÍAS*/ 

router

    .get('/categories',listCategory)
    .get('/categories/:id', showCategory)
    .post('/categories',createCategory)
    .put('/categories/:id',updateCategory)
    .delete('/categories/:id', deleteCategory)

/*****************************************/ 

 /*TIPOS DE PRODUCTOS*/ 

 router

    .get('/types',listTypes)
 
/*****************************************/ 


/*SECCIÓN DE PRODUCTOS*/ 

router

    .get('/sections',listSections)

/*****************************************/ 


    
               /*PRODUCTOS*/ 

router

    .get('/products', listProducts)
    .get('/products/:id', showProduct)
    .get('/products/count',totalProductInDB)
    .post('/products',upload.single('image'),productApiValidator,createProduct)
    .put('/products/:id',upload.single('image'),updateProduct)
    .delete('/products/:id', deleteProduct)

/*****************************************/ 



module.exports = router;