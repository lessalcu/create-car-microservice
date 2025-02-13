const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Habilitar CORS en todas las rutas de este microservicio
app.use(cors());

app.use(express.json());

app.use('/api/vehicle', vehicleRoutes);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Vehicle Registration microservice running on port ${PORT}`);
});
