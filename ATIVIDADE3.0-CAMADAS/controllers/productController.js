const productService = require('../services/productService');

const getAllProducts = (req, res) => {
  try {
    const products = productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addProduct = (req, res) => {
  try {
    const newProduct = req.body;
    const product = productService.addProduct(newProduct);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProducts, addProduct };