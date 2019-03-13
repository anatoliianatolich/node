const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');
const usersRoute = require('./route/users');
const booksRoute = require('./route/books');
const bodyParser = require('body-parser');
const singlePage = require("./controllers/singlePage")
const{getVacancies} = require("./controllers/technologies");
const autoTest = require("./route/autoTest");

const USERS = require('./mock-data/users');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// app.use((req, res, next) => {
// 	console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
// 	next();
// })

app.use("/autoTest", autoTest);

app.use("/", singlePage);

app.get("/robotGetVac/", getVacancies);

app.use('/users/', usersRoute);

app.use('/users/:index/books/', booksRoute);

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


