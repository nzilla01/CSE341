const Book = require('../scheme/books');

// POST /books
const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /books/:bookId
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /books/findByGenre?genre=Fiction
const findByGenre = async (req, res) => {
  try {
    const books = await Book.find({ genre: req.query.genre });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/findByAuthor?author=J.K. Rowling
const findByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: req.query.author });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/:bookId
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /books/:bookId (partial update)
const partialUpdateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, { $set: req.body }, { new: true });
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /books/:bookId
const deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.bookId);
    if (!result) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBook,
  updateBook,
  findByGenre,
  findByAuthor,
  getBookById,
  partialUpdateBook,
  deleteBook
};
