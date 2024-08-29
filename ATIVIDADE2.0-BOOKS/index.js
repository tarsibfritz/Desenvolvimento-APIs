const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./auth');
const booksRouter = require('./books');

const app = express();
const port = 3000;
const secret = 'books-key';

app.use(bodyParser.json());

// Endpoint de Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Autenticação
app.use(authMiddleware);

// Roteador de livros
app.use('/books', booksRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});