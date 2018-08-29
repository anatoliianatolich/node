const express = require('express');
const router = express.Router();

const {getBooks, sendFindBook, getNewBooks, findBookUsers, sendBooks, changeBook, delBooks} = require('../controllers/books')


router.get("/users/:index/books/:title", getBooks, sendFindBook);
router.post('/users/:index/books',getNewBooks, findBookUsers);
router.put("/users/:index/books/:title", changeBook, sendBooks);
router.delete("/users/:index/books/:title", delBooks, sendBooks);

module.exports = router;