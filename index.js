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

const USERS = [
	{
		user: "vlad",
		password: 123
	},
	{
		user: "dima",
		password: 123,
		books: {
			title: 'js is suck!',
			author: "php developer"
		}
	},
	{
		user: "oleg",
		password: 123
	},
	{
		user: "anatolii",
		password: 123
	}
];

const getUsers = (req, res, next) => {
	req.users = USERS;
	next()
}

const sendUsers = (req, res, next) => {
	res.status((200))
	res.json(req.users);
	req.users = USERS;
	next();
}

const addUser = (req, res, next) => {
	const user = req.body;
	USERS.push(user);
	next();
}
// помилка для 404 перевизначена
app.use((req, res, next) => {
	let error = new Error('Not found page');
	next(error);
});


app.get("/users/", getUsers, sendUsers);

app.post("/users/", addUser, sendUsers);

//const users = await getUsers(); варіант доступу до масива

app.use((err, req, res, next) => {
	res.status(500);
	res.json({
		error: err.message,
		stack: err.stack
	})
})
app.listen(conf.port);
console.log('server listen port 5050');

