const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');
const bodyParser = require('body-parser');
const singlePage = require("./controllers/singlePage")
const autoTest = require("./route/autoTest");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// app.use((req, res, next) => {
// 	console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
// 	next();
// })

app.use("/autoTest", autoTest);

app.use("/", singlePage);

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


