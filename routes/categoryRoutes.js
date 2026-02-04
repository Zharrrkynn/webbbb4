const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { auth, adminCheck } = require('../middleware/auth');

router.get('/', categoryController.getAllCategories);
router.post('/', auth, adminCheck, categoryController.createCategory);
router.put('/:id', auth, adminCheck, categoryController.updateCategory);
router.delete('/:id', auth, adminCheck, categoryController.deleteCategory);

module.exports = router;
