const Exportation = require('../models/exportation');

const createProduct = async (req, res) => {
  try {
    const { nameProduct, price, weight } = req.body;
    const newProduct = new Exportation({ nameProduct, price, weight });

    await newProduct.save();
    res.status(201).json({ message: 'Producto creado exitosamente', data: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Exportation.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Exportation.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById
};
