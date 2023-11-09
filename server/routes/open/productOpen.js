import express from "express";
import { CreateProducts, DeleteProduct } from "../../controllers/open.js";
const router = express.Router();

router.post('/zone/products', CreateProducts);
router.delete('/zone/products/:productId', DeleteProduct);

export default router;