import express from "express";
const router = express.Router();
import Warehouse from "../../models/Warehouse.js";
import { sendResponse } from "../../utils/api.js";

router.post('/warehouses', async (req, res) => {
  try {
    const { name } = req.body;
    const newWarehouse = new Warehouse({ name });
    const savedWarehouse = await newWarehouse.save();
    return sendResponse(res,200,'warehouse created successfully', [savedwarehouses])
  } catch (err) {
    res.status(500).json({ error: 'Error creating a warehouse' });
  }
});

router.get('/warehouses', async (req, res) => {
  try {
    const warehouses = await Warehouse.find();
    return res.status(200).json({ message: 'Warehouses fetched successfully', data: warehouses });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error fetching warehouses' });
  }
});

module.exports = router;
