import express from "express";
const router = express.Router();
import openRoute from "./open/warehouseOpen.js";
import protectedRoute from "./protected/warehouseProtected.js";

router.use('/warehouse',openRoute);
router.use('/warehouse',protectedRoute)

export default router;