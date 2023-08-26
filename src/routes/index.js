const express = require('express');
const { index, admin ,cart, search} =require('../controllers/indexController')
const router = express.Router();


/*GET Carro de Compras*/
router.get('/cart/:id?',cart);

/* GET home page. */
router.get('/', index);
router.get('/admin', admin);
router.get('/search',search)



module.exports = router;
