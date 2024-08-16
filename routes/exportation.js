const express = require('express');
const router = express.Router();
const exportationController = require('../controller/exportationController');

router.post('/', exportationController.createProduct);
router.get('/', exportationController.getAllProducts);
router.get('/:id', exportationController.getProductById);

module.exports = router;
