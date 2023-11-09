import express from "express";
import { CreateWarehouse, GetWarehouses } from "../../controllers/open.js";
const router = express.Router();

router.post('/warehouses', CreateWarehouse);
router.get('/warehouses', GetWarehouses);

export default router;