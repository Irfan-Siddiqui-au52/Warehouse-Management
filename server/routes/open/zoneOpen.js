import express from "express";
import { GetZone, CreateZone } from "../../controllers/open.js";
const router = express.Router();

router.get('/warehouses/zone', GetZone);
router.post('/warehouses/zone', CreateZone);

export default router;