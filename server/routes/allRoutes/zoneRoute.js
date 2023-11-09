// import express from "express";
// const router = express.Router();
// import Warehouse from "../../models/Warehouse.js";
// import Zone from "../../models/Zone.js";

// router.post('/warehouse/zone', async (req, res) => {
//   try {
//     const { name } = req.body;
//     const warehouse = await Warehouse.findById(req.params.warehouseId);
//     if (!warehouse) {
//       return res.status(404).json({ error: 'Warehouse not found' });
//     }
//     const newZone = new Zone({ name, warehouse: warehouse._id });
//     const savedZone = await newZone.save();
//     //res.json(savedZone);
//     return sendResponse(res, 200, 'zone created successfully', [savedzone])
//   } catch (err) {
//     res.status(500).json({ error: 'Error creating a zone' });
//   }
// });

// router.get('/warehouse/zone', async (req, res) => {
//   try {
//     const zones = await Zone.find({ warehouse: req.params.warehouseId });
//     res.json(zones);
//   } catch (err) {
//     res.status(500).json({ error: 'Error fetching zones' });
//   }
// });

// module.exports = router;
