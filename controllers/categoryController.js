const Category = require('../models/Category');
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.updateCategory = async (req, res) => {
    try {
        const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Category not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const Product = require('../models/product'); // Импортируйте модель продуктов
exports.deleteCategory = async (req, res) => {
    try {
        // Проверяем, есть ли товары в этой категории
        const productCount = await Product.countDocuments({ category: req.params.id });
        if (productCount > 0) {
            return res.status(400).json({ 
                message: 'Cannot delete category: It has products linked to it.' 
            });
        }

        const deleted = await Category.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Category not found' });
        
        res.json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};