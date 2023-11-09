import express from "express";
import { createWarehouse } from "../../controllers/protected.js";
const router = express.Router();

router.post('/create',createWarehouse);

export default router;