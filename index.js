const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');
const usersRoute = require('./route/users');
const booksRoute = require('./route/books');
const bodyParser = require('body-parser');
const{getVacancies} = require("./controllers/technologies");

const USERS = require('./mock-data/users');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
	console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
	next();
})

app.get("/robotGetVac/", getVacancies);

app.use('/users/', usersRoute);

app.use('/users/:index/books/', booksRoute);

// *
// app.get("/users/:index/books/:title");

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


