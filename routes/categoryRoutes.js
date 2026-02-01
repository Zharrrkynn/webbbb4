const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { auth, adminCheck } = require('../middleware/auth');

// Публичный маршрут
router.get('/', categoryController.getAllCategories);

// Защищенные маршруты для админа
router.post('/', auth, adminCheck, categoryController.createCategory);
router.put('/:id', auth, adminCheck, categoryController.updateCategory);
router.delete('/:id', auth, adminCheck, categoryController.deleteCategory);

module.exports = router;