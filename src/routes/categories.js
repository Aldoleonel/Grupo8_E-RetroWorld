const express = require('express');
const upload = require('../middlewares/upload');
const { add, create } = require('../controllers/categoriesController');
const router = express.Router();

router.get('/add',add);
router.post('/add',upload.single('image'), create)

module.exports = router;