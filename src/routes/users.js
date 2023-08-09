const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

/* GET users listing. */
router.get('/',(req, res) => {
  res.send('respond with a resource');
});

/*RUTAS PARA LOGIN Y REGISTRO*/

router.get('/login',usersController.login);

router.get('/register',usersController.register);

module.exports = router;
