import express from "express";
import { GetZone, CreateZone } from "../../controllers/open.js";
const router = express.Router();

router.get('/warehouse/zone', GetZone);
router.post('/warehouse/zone', CreateZone);

export default router;