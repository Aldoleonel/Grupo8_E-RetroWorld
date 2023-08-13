const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

/*RUTAS PARA DETALLE_DE_PRODUCTO Y CARRITO_DE_COMPRAS*/

router.get('/detail/:id?',productsController.detail);

router.get('/cart/:id?',productsController.cart);

router.get('/add',productsController.add);
router.get('/edit',productsController.edit);
router.get('/edit/:id?',productsController.edit)
module.exports = router;