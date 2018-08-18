//const http = require('http');
const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');
const bodyParser = require('body-parser');
const _ = require('lodash');
const slug = require('slug');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
	console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
	next();
})

const USERS = require('./mock-data/users');

// const index = req.params.index;



// http.createServer((req, res)=>{
// 	res.writeHead(200, { 'Content-Type': 'text/plain' } );
// 	debugger;
// 	res.end('working server')
// }).listen(5050);

const getUsers= (req,res,next) =>{
	req.users = USERS;
	next()
}

//const users = await getUsers(); варіант доступу до масива

const sendUsers = (req, res, next) => {
	res.status((200))
	res.json(req.users);
}


const addUser = (req, res, next) => {
	const user = req.body;
	USERS.push(user);
	req.users = USERS;
	next();
}



const delUser = (req, res, next)=> {
	USERS.pop();
	req.users = USERS;
	next()
}

const putUser = (req, res, next) => {
	const newUser = req.body;
	const index = req.params.index;
	const putUser = [];
	putUser[index] = newUser;
	req.users = _.merge(USERS, putUser);;
	next()
}

const getBooks = (req, res, next) => {
	const {index, title} = req.params;
	const user = USERS[index];
	const books = [...user.books]
	const book = books.find(current=>slug(current.title) === title);
	req.book = book;
	next();
}

const sendBooks = (req, res, next) => {
	res.status('200');
	res.json(req.books);
	next();
}

const sendFindBook = (req, res, next) => {
	res.status('200');
	res.json(req.book);
	next();
}



const getNewBooks = (req, res, next) => {
	const index = req.params.index;
	const newBook = req.body;
	const oldBooks = USERS[index].books;
	if (USERS[index].books.length == undefined) {
		USERS[index].books = [oldBooks];
	}
	USERS[index].books.push(newBook);
	req.users = USERS[index];
	next();
}

const changeBook =  (req, res, next) => {
	const {index, title} = req.params;
	const newBook = req.body;
	req.users = USERS[index].books.title;
	console.log(tBook);
	next();
}




app.get("/users/", getUsers, sendUsers);

app.post("/users/", addUser, sendUsers);

app.delete('/users', delUser, sendUsers);

app.put('/users/:index/', putUser ,sendUsers); //lodash ...merge

// book

app.get("/users/:index/books/:title", getBooks, sendFindBook);

app.post('/users/:index/books',getNewBooks, sendUsers);

app.put("/users/:index/books/:title", changeBook, sendUsers);

app.delete("/users/:index/books/:title");

// *
app.get("/users/:index/books/:title");

//const users = await getUsers(); варіант доступу до масива

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
})
app.listen(conf.port);
console.log('server listen port 5050');

//start git lessons4

