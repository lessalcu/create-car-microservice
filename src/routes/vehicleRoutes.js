const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Ruta para registrar vehículo
router.post('/register', vehicleController.registerVehicle);

module.exports = router;
