const express = require('express');
const app = express();
const exportationRoutes = require('./routes/exportation');

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/exportation', exportationRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
