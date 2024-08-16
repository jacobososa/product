const mongoose = require('mongoose');

const exportationSchema = new mongoose.Schema({
  nameProduct: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true }
});

module.exports = mongoose.model('Exportation', exportationSchema);
