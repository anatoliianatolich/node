//const http = require('http');
const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
	console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
	next();
})

const USERS = require('./mock-data/users');


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

const getBooks = (req, res, next) => {
	const index = req.params.index;
	req.books = USERS[index].books;
	next();
}

const sendBooks = (req, res, next) => {
	res.status('200');
	res.json(req.books);
	next();
}


app.get("/users/", getUsers, sendUsers);

app.post("/users/", addUser, sendUsers);

app.get("/users/:index/books", getBooks, sendBooks);

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

