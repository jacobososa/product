const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const exportationRoutes = require('./routes/exportation');

dotenv.config();

const app = express();
app.use(express.json());

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log('Error al conectar a la base de datos', err));

// Rutas
app.use('/api/exportation', exportationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
