const express = require('express');
const {edit,create,add,detail, products, consolas, accessories} = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

/*RUTAS PARA DETALLE_DE_PRODUCTO*/

router.get('/detail/:id?',detail);
router.get('/add',add);
router.post('/add',upload.single('image'),create)
router.get('/edit',edit);
router.get('/products',products);
router.get('/consolas/:name',consolas);
router.get('/accessories',accessories);


/* router.get('/edit/:id?',productsController.edit) */
module.exports = router;