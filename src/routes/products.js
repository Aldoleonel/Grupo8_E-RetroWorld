const express = require('express');
const {edit,add,detail,cart} = require('../controllers/productsController');
const router = express.Router();

/*RUTAS PARA DETALLE_DE_PRODUCTO Y CARRITO_DE_COMPRAS*/

router.get('/detail/:id?',detail);

router.get('/cart/:id?',cart);

router.get('/add',add);
router.get('/edit',edit);
/* router.get('/edit/:id?',productsController.edit) */
module.exports = router;