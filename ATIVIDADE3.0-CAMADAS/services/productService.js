const productData = require('../data/productData');

const getAllProducts = () => {
  return productData.getProducts();
};

const addProduct = (product) => {
  if (!product.name || product.quantity === undefined || product.quantity < 0) {
    throw new Error('Nome e quantidade são obrigatórios e a quantidade não pode ser negativa');
  }
  return productData.addProduct(product);
};

module.exports = { getAllProducts, addProduct };