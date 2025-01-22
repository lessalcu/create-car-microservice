const db = require('../config/db');

// Registrar vehículo
exports.registerVehicle = async (req, res) => {
  const { userId, licensePlate, brand, model, color } = req.body;

  // Validar que todos los campos estén presentes
  if (!userId || !licensePlate || !brand || !model || !color) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Insertar vehículo en la base de datos
    const [result] = await db.execute(
      'INSERT INTO Cars (userId, licensePlate, brand, model, color) VALUES (?, ?, ?, ?, ?)',
      [userId, licensePlate, brand, model, color]
    );
    
    // Responder con el ID del vehículo registrado
    res.status(201).json({
      message: 'Vehicle registered successfully'
    });
  } catch (error) {
    console.error('Error registering vehicle:', error);
    res.status(500).json({ message: 'Error registering vehicle' });
  }
};
