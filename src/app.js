const express = require('express');
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

app.use(bodyParser.json());

// Usar rutas para vehículos
app.use('/api/vehicle', vehicleRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Vehicle Registration microservice running on port ${PORT}`);
});
