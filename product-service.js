// product-service.js
const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

// sample product data
const product = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' }
];

// public endpoint
app.get('/api/products', (req, res) => {
    res.json(product);
});

// start server
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});