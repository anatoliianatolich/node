//const http = require('http');
const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');
const fs =  require('fs');
const bodyParser = require('body-parser');
const{getUsers, sendUsers, delUser,putUser, addUser} = require("./controllers/users");
const{getBooks, sendBooks, sendFindBook, getNewBooks, changeBook,delBooks} = require("./controllers/books");
const{getVacancies} = require("./controllers/technologies");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
	console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
	next();
})

app.get("/robotGetVac", getVacancies);

const USERS = require('./mock-data/users');

app.get("/users/", getUsers, sendUsers);

app.post("/users/", addUser, sendUsers);

app.delete('/users', delUser, sendUsers);

app.put('/users/:index/', putUser ,sendUsers); //lodash ...merge

// book

app.get("/users/:index/books/:title", getBooks, sendFindBook);

app.post('/users/:index/books',getNewBooks, sendUsers);

app.put("/users/:index/books/:title", changeBook, sendUsers);


app.delete("/users/:index/books/:title", delBooks, sendBooks);

// *
app.get("/users/:index/books/:title");

// помилка для 404 перевизначена
app.use((req, res, next) => {
	let error = new Error('Not found page');
	next(error);
});

//all errors
app.use((err, req, res, next) => {
	res.status(500);
	res.json({
		error: err.message,
		stack: err.stack
	})
});

app.listen(conf.port);
console.log('server listen port 5050');


