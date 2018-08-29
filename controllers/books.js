const USERS = require('../mock-data/users');
const {merge} = require('lodash');
const slug = require('slug');

module.exports.getBooks = (req, res, next) => {
	const {index, title} = req.params;
	const user = USERS[index];
	const books = [...user.books]
	const book = books.find(current=>slug(current.title) === title);
	req.book = book;
	next();
}

module.exports.sendBooks = (req, res, next) => {
	res.status('200');
	res.json(req.books);
}

module.exports.sendFindBook = (req, res, next) => {
	res.status('200');
	res.json(req.book);
}
module.exports.findBookUsers = (req, res, next) => {
	res.status('200');
	res.json(req.user);
}

module.exports.getNewBooks = (req, res, next) => {
	const {index} = req.params;
	const newBook = req.body;
	const oldBooks = USERS[index].books;
	if (USERS[index].books.length == undefined) {
		USERS[index].books = [oldBooks];
	}
	USERS[index].books.push(newBook);
	req.user = USERS[index];
	next();
}

module.exports.changeBook = (req, res, next) => {
	const {index, title} = req.params;
	debugger;
	const allBookUS = USERS[index].books;
	const newBook = allBookUS.find((currBook) => {
		return slug(currBook.title).toLowerCase() === title.toLowerCase();
	})
	merge(newBook,req.body);
	req.books = allBookUS;
	next();
}

module.exports.delBooks = (req, res, next) => {
	const {	index, title } = req.params;
	debugger;
	const allBookUS = USERS[index].books;
	// console.log(allBookUS);
	allBookUS.map((currBook, i) => {
		console.log(currBook);
		console.log(i);
		if (slug(currBook.title).toLowerCase() === title.toLowerCase()){
			delete currBook.title;
		}
		USERS[index].books[i] =currBook;
	})
	req.books = USERS[index].books;
	next();
}