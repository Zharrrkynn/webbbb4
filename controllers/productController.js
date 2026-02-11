const Product = require('../models/product');

exports.getAll = async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.create = async (req, res) => {
    try {
        
        const { name, price, category, description, image } = req.body;

        
        if (!name || name.trim().length < 2) {
            return res.status(400).json({ error: "Name is too short or missing" });
        }
        if (!price || price <= 0) {
            return res.status(400).json({ error: "Price must be a positive number" });
        }
        if (!category) {
            return res.status(400).json({ error: "Category ID is required" });
        }

        
        const product = new Product({ 
            name, 
            price, 
            category, 
            description, 
            image        
        });
        
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('category');
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};