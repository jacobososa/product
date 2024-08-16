const express = require('express');
const app = express();
require('dotenv').config(); // Carga variables de entorno desde el archivo .env
const port = process.env.PORT || 3000;
const exportationRoutes = require('./routes/exportation'); // Importa las rutas de exportación

// Middleware para parsear JSON
app.use(express.json());

// Define las rutas
app.use('/api/exportacion', exportationRoutes);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

const connectDB = require('./database/config');
connectDB();

