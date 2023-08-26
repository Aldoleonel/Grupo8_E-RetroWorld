const express = require('express');
const {edit,add,detail, products} = require('../controllers/productsController');
const router = express.Router();

/*RUTAS PARA DETALLE_DE_PRODUCTO*/

router.get('/detail/:id?',detail);
router.get('/add',add);
router.get('/edit',edit);
router.get('/products',products)
/* router.get('/edit/:id?',productsController.edit) */
module.exports = router;