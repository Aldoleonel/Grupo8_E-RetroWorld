const express = require('express');


const { checkEmail } = require('../controllers/APIs/usersApiController');
const router = express.Router();



/* apis */
router.get('/check-email',  checkEmail);




module.exports = router;