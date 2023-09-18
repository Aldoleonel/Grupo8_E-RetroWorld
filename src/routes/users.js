const express = require('express');
const {login,processLogin,register,processRegister, logout} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const router = express.Router();
const notUserCheck = require('../middlewares/notUserCheck')
const loginValidator = require('../validations/loginValidator')


/* /users */
router
  .get('/login', notUserCheck, login)
  .post('/login',loginValidator, processLogin)
  .get('/register', notUserCheck, register)
  .post('/register',registerValidator, processRegister)
  .get('/logout', logout);

module.exports = router;
