const express = require('express');
const upload = require('../middlewares/upload');
const { add, create, edit, update,delete : destroy } = require('../controllers/categoriesController');
const router = express.Router();

router.get('/add',add);
router.post('/add',upload.single('image'), create)
router.get('/edit/:id',edit);
router.put('/edit/:id',upload.single('image'),update);
router.delete('/delete/:id',destroy)

module.exports = router;