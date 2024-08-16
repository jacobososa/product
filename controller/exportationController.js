let products = []; // Esto es temporal, puedes usar una base de datos más adelante.

exports.createProduct = (req, res) => {
  const { nameProduct, price, weight } = req.body;

  if (!nameProduct || !price || !weight) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const newProduct = {
    id: products.length + 1,
    nameProduct,
    price,
    weight
  };

  products.push(newProduct);
  res.status(201).json({ message: 'Producto registrado', product: newProduct });
};

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(product);
};
