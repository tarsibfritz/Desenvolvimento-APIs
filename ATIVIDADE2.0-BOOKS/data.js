let books = [];
let nextId = 1;

function getBooks() {
  return books;
}

function getBookById(id) {
  return books.find(book => book.id === id);
}

function addBook(book) {
  const newBook = { id: nextId++, ...book };
  books.push(newBook);
  return newBook;
}

function deleteBook(id) {
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return null;
  return books.splice(index, 1)[0];
}

module.exports = { getBooks, getBookById, addBook, deleteBook };