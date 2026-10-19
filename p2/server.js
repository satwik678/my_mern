
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let products = [
    { id: 1, name: 'Book', price: 100 },
    { id: 2, name: 'Pen', price: 10 }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/products', (req, res) => {
    const { name, price } = req.body;

    if (!name || price === '' || price === undefined ||
        !Number.isFinite(Number(price)) || Number(price) < 0) {
        return res.status(400).json({ message: 'Enter valid product details' });
    }

    const id = products.length
        ? Math.max(...products.map(p => p.id)) + 1
        : 1;

    const product = {
        id,
        name: name.trim(),
        price: Number(price)
    };

    products.push(product);
    res.status(201).json(product);
});

app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));
    const { name, price } = req.body;

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    if (!name || price === '' || price === undefined ||
        !Number.isFinite(Number(price)) || Number(price) < 0) {
        return res.status(400).json({ message: 'Enter valid product details' });
    }

    product.name = name.trim();
    product.price = Number(price);

    res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
    const length = products.length;

    products = products.filter(p => p.id !== Number(req.params.id));

    if (products.length === length) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
});

app.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000');
});
