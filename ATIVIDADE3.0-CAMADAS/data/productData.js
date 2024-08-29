let products = [
    { id: 1, name: 'Produto A', quantity: 100 },
    { id: 2, name: 'Produto B', quantity: 50 }
  ];
  
  const getProducts = () => products;
  
  const addProduct = (product) => {
    product.id = products.length + 1;
    products.push(product);
    return product;
  };
  
module.exports = { getProducts, addProduct };
