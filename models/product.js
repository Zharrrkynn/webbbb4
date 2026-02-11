const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    description: { type: String, default: '' }, 
    image: { type: String, default: '' }       
});

module.exports = mongoose.model('Product', productSchema);
