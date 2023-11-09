import express from "express";
const router = express.Router();
import Zone from "../../models/Zone.js";
import Product from "../../models/Products.js";

router.post('/zone/products', async (req, res) => {
  try {
    const { name, price } = req.body;
    const zone = await Zone.findById(req.params.zoneId);
    if (!zone) {
      return res.status(404).json({ error: 'Zone not found' });
    }
    const newProduct = new Product({ name, price, zone: zone._id });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Error creating a product' });
  }
});

router.delete('/zone/products/:productId', async (req, res) => {
  try {
    const zone = await Zone.findById(req.params.zoneId);
    if (!zone) {
      return res.status(404).json({ error: 'Zone not found' });
    }
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting a product' });
  }
});

module.exports = router;
