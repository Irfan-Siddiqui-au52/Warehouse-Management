import express from "express";
const router = express.Router();
import Warehouse from "../../models/Warehouse.js";
import Zone from "../../models/Zone.js";

router.post('/warehouses/zone', async (req, res) => {
    try {
      const { warehouseId, zoneNames } = req.body;
      if (!warehouseId) {
        return res.status(400).json({ error: 'Warehouse ID is required' });
      }
      const warehouse = await Warehouse.findById(warehouseId);
      if (!warehouse) {
        return res.status(404).json({ error: 'Warehouse not found' });
      }
      const createdZones = [];
      for (const name of zoneNames) {
        const newZone = new Zone({ name, warehouse: warehouse._id });
        const savedZone = await newZone.save();
        createdZones.push(savedZone);
      }
      return sendResponse(res, 200, 'Zones created successfully', createdZones);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating zones' });
    }
  });
  

router.get('/warehouses/zone', async (req, res) => {
  try {
    const zones = await Zone.find({ warehouse: req.params.warehouseId });
    res.json(zones);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching zones' });
  }
});

module.exports = router;
