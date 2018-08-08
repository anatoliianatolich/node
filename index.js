//const http = require('http');
const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');

// http.createServer((req, res)=>{
// 	res.writeHead(200, { 'Content-Type': 'text/plain' } );
// 	debugger;
// 	res.end('working server')
// }).listen(5050);
const users = [
	{
	user: "vlad",
	password: 123
	},
	{
	user: "dima",
	password: 123
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

app.get("/users/",(req ,res, next)=> {
	res.status((200))
	res.json(users);
})

app.listen(conf.port);
console.log('server listen port 5050');

// test git master branch

