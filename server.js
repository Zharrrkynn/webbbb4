require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Добавьте это

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ Connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
