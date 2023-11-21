import express from "express";
const router = express.Router();
import Warehouse from "../../models/Warehouse.js";
import { sendResponse } from "../../utils/api.js";

router.post('/warehouses', async (req, res) => {
  try {
    const { warehouseNames } = req.body;
    if (!Array.isArray(warehouseNames)) {
      return res.status(400).json({ error: 'Invalid request format. Expected an array of warehouse names.' });
    }
    const createdWarehouses = [];
    for (const name of warehouseNames) {
      const newWarehouse = new Warehouse({ name });
      const savedWarehouse = await newWarehouse.save();
      createdWarehouses.push(savedWarehouse);
    }
    return sendResponse(res, 200, 'Warehouses created successfully', [createdWarehouses]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating warehouses' });
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
