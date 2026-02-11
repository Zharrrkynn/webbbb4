const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { auth, adminCheck } = require('../middleware/auth');

router.get('/', productController.getAll); 

router.post('/', auth, adminCheck, productController.create);
router.put('/:id', auth, adminCheck, productController.update);
router.delete('/:id', auth, adminCheck, productController.delete);
router.get('/:id', productController.getById); 

module.exports = router;
