const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Importar o controlador
const productController = require('./controllers/productController');

// Definir rotas
app.get('/products', productController.getAllProducts);
app.post('/products', productController.addProduct);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});