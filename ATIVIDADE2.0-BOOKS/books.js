const express = require('express');
const router = express.Router();
const { getBooks, getBookById, addBook, deleteBook } = require('./data');

// Rota GET /books
router.get('/', (req, res) => {
  try {
    const books = getBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
});

// Rota GET /books/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const book = getBookById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book' });
  }
});

// Rota POST /books
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  try {
    const newBook = addBook({ title, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book' });
  }
});

// Rota DELETE /books/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result = deleteBook(id);
    if (!result) return res.status(404).json({ message: 'Book not found' });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book' });
  }
});

module.exports = router;