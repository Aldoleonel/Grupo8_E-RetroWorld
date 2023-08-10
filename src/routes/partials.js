const express = require('express');
const partialsController = require('../controllers/partialsController');
const router = express.Router();

/*RUTAS PARA LOS PARTIALS*/

router.get('/header',partialsController.header);

router.get('/footer',partialsController.footer);

module.exports = router;