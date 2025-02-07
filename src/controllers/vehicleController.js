const db = require('../config/db');
const request = require('request-promise');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

exports.registerVehicle = async (req, res) => {
  const { licensePlate, brand, model, color, userIdentifier } = req.body; // userIdentifier puede ser email o username

  if (!licensePlate || !brand || !model || !color || !userIdentifier) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Construir la URL del microservicio de usuarios
    const userServiceURL = `${process.env.USER_SERVICE_URL}/${userIdentifier}`;
    
    // Consultar userId desde el microservicio de usuarios
    const userResponse = await request({ uri: userServiceURL, json: true });

    if (!userResponse || !userResponse.id) {
      return res.status(404).json({ message: "User not found" });
    }

    const userId = userResponse.id;

    // Insertar vehículo en la base de datos
    await db.execute(
      'INSERT INTO Cars (userId, licensePlate, brand, model, color) VALUES (?, ?, ?, ?, ?)',
      [userId, licensePlate, brand, model, color]
    );

    res.status(201).json({ message: 'Vehicle registered successfully' });
  } catch (error) {
    console.error('Error registering vehicle:', error);
    res.status(500).json({ message: 'Error registering vehicle' });
  }
};
