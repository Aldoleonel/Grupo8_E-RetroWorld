const express = require('express');
const {login,processLogin,register,processRegister} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const router = express.Router();
const notUserCheck = require('../middlewares/notUserCheck')
const loginValidator = require('../validations/loginValidator')


/* /users */
router
  .get('/register', notUserCheck, register)
  .get('/login', notUserCheck, login)
  .post('/login',loginValidator, processLogin);

/*RUTAS PARA LOGIN Y REGISTRO*/

router.get('/login',login);

router.get('/register',register)
      .post('/register',registerValidator, processRegister);

module.exports = router;
