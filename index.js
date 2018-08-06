//const http = require('http');
const app = require('express')();//  const app = require('express')() == {const app = require('express'); const app = app();}
const conf = require('./config/development');

// http.createServer((req, res)=>{
// 	res.writeHead(200, { 'Content-Type': 'text/plain' } );
// 	debugger;
// 	res.end('working server')
// }).listen(5050);
const getUsers= (req,res,next) =>{
	req.users = [
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
	}]
	next()
}

const sendUsers = (req, res, next) => {
	res.status((200))
	res.json(req.users);
}

app.get("/users/", getUsers, sendUsers);
	//const users = await getUsers(); варіант доступу до масива


app.listen(conf.port);
console.log('server listen port 5050');

