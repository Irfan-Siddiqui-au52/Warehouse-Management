import express from "express";
const router = express.Router();
import Zone from "../../models/Zone.js";
import Product from "../../models/Products.js";

router.post('/zone/products', async (req, res) => {
  try {
    const { zoneId, products } = req.body;
    if (!zoneId) {
      return res.status(400).json({ error: 'Zone ID is required' });
    }
    const zone = await Zone.findById(zoneId);

    if (!zone) {
      return res.status(404).json({ error: 'Zone not found' });
    }
    const createdProducts = [];
    for (const { name, price } of products) {
      const newProduct = new Product({ name, price, zone: zone._id });
      const savedProduct = await newProduct.save();
      createdProducts.push(savedProduct);
    }
    res.json(createdProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating products' });
  }
});


router.delete('/zone/products/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error deleting a product' });
  }
});


module.exports = router;
