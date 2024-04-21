import express from 'express'
const router = express.Router();
import Item from '../models/item.js'
import Product from '../models/product.js';




// Get all items
router.get('/cart', async(req, res)=>{
    try{
        const items = await Item.find({})
        res.status(200).json(items)
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:e})
    }
})

// Create a new item
router.post('/cart', async (req, res) => {
    const { asin, name, url, image, price_string, total_reviews, stars } = req.body;

    try {
        const newItem = new Item({
            asin,
            name,
            url,
            image,
            price_string,
            total_reviews,
            stars
        });

        const savedItem = await newItem.save();
        res.status(200).json(savedItem);
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message });
    }
});


// Remove an item
router.post('/cart/:asin', async (req, res) => {

    try {
        const deletedItem = await Item.findOneAndDelete({ asin:req.params.asin });
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item removed', deletedItem });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Delete all item
router.delete('/cart/:asin', async (req, res) => {
    try {
        await Item.deleteMany({asin:req.params.asin});
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// clear the cart
router.post('/clear', async (req, res) => {
    try {
        await Item.deleteMany({});
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router
