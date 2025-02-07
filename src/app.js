const express = require('express');
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.json());

app.use('/api/vehicle', vehicleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Vehicle Registration microservice running on port ${PORT}`);
});
