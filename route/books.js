const express = require('express');
const router = express.Router({mergeParams:true});

const {getBooks, sendFindBook, getNewBooks, findBookUsers, sendBooks, changeBook, delBooks} = require('../controllers/books')


router.get("/:title/", getBooks, sendFindBook);
router.post('/',getNewBooks, findBookUsers);
router.put("/:title/", changeBook, sendBooks);
router.delete("/:title/", delBooks, sendBooks);

module.exports = router;