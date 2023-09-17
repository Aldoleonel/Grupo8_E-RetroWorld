const express = require('express');
const { register, login, processLogin } = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const notUserCheck = require('../middlewares/notUserCheck');
const router = express.Router();

/* /users */
router
  .get('/register', notUserCheck, register)
  .get('/login', notUserCheck, login)
  .post('/login',loginValidator, processLogin);

module.exports = router;