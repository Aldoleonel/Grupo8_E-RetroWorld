const express = require('express');
const {login,processLogin,register,processRegister, logout, userProfile, update} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const router = express.Router();
const notUserCheck = require('../middlewares/notUserCheck')
const loginValidator = require('../validations/loginValidator');
const updateValidator = require('../validations/updateValidator');
const avatarMulter = require('../middlewares/avatarMulter');
const userCheck = require('../middlewares/userCheck');




/* /users */
router
  .get('/login', notUserCheck, login)
  .post('/login',loginValidator, processLogin)
  .get('/register', notUserCheck, register)
  .post('/register',registerValidator, processRegister)
  .get('/logout', logout)
  .get('/userProfile',userCheck, userProfile)
  .put('/userProfile/',avatarMulter.single('image'),updateValidator,update)

module.exports = router;
