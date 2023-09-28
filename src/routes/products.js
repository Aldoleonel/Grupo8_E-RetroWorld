const express = require('express');
const {edit,create,add,detail, products, consoles, accessories,update, deleteProd,addCart} = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const _delete = require('../controllers/products/deleteProd');
const productAddValidator = require('../validations/productAddValidator')
const router = express.Router();

/*RUTAS PARA DETALLE_DE_PRODUCTO*/

router.get('/detail/:id?',detail);
router.get('/add',add);
// Agregar un producto al carrito de compras
router.get('/addCart/:id', addCart);
router.post('/add',upload.single('image'),productAddValidator, create)
router.get('/edit',edit);
router.delete('/delete/:id',_delete, deleteProd);
router.get('/edit/:id',edit);
router.put('/edit/:id',upload.single('image'),update);
router.get('/products',products);
router.get('/consoles',consoles);
router.get('/accessories',accessories);




/* router.get('/edit/:id?',productsController.edit) */
module.exports = router;