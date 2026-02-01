const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { auth, adminCheck } = require('../middleware/auth');

router.get('/', productController.getAll); // Публичный
router.post('/', auth, adminCheck, productController.create); // Только админ
router.put('/:id', auth, adminCheck, productController.update); // Только админ
router.delete('/:id', auth, adminCheck, productController.delete); // Только админ

module.exports = router;