import express from 'express'
const router = express.Router();
import Item from '../models/item.js'
import Product from '../models/product.js';

// Get all items
router.get('/products', async (req, res) => {
    try {
        const items = await Product.find({});
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Route to return the form for adding products
router.get('/add-products', (req, res) => {
    res.send(`
    <form method="POST" action="/api/add-products">
        <textarea name="productData" placeholder="Enter product data JSON array"></textarea>
        <input type="submit" value="Submit">
    </form>
    `);
});


// Add items to the database
router.post('/add-products', async (req, res) => {
    try {
        
        const itemsToAdd = JSON.parse(req.body.productData);

        if (!Array.isArray(itemsToAdd)) {
            throw new Error('Product data must be provided as an array.');
        }


        const formattedItems = itemsToAdd.map(item => ({
            asin: item.asin,
            image: item.image,
            name: item.name,
            price_string: item.price_string,
            stars: String(item.stars),
            total_reviews: String(item.total_reviews),
            url: item.url
        }));


        const insertedItems = await Product.insertMany(formattedItems);

        res.status(200).json(insertedItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



export default router