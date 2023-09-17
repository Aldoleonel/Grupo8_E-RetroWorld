const express = require('express');
const {login,register,processRegister} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const router = express.Router();

/* GET users listing. */
router.get('/',(req, res) => {
  res.send('respond with a resource');
});

/*RUTAS PARA LOGIN Y REGISTRO*/

router.get('/login',login);

router.get('/register',register)
      .post('/register',registerValidator, processRegister);

module.exports = router;
