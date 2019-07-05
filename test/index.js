const fs = require('fs');
// const test = require('../index.js');
// describe("first Test", ()=>{
// 	console.log('listen');
// 	console.log('test');
// })
const first = ()=> {
	console.log("first")
};

const second =()=> {
	console.log("second")
}

const third =() => {
	console.log('third');
	setTimeout(first, 0);
	new Promise((resolve, reject)=>{
		resolve('resolve show  after second').then(resolve=>{console.log(resolve)})
	})
	second()
}

const promise1 = new Promise((resolve, reject)=>{
	resolve(a = 'test');
});
console.dir({promise1});
promise1.then(console.log('a',a));
third();

'use string'
const readFile = (filename, encoding) =>{
	return new Promise((resolve, reject)=>{
	    fs.readFile(filename, encoding,(err, data)=> {
	        if(err) reject(err);
	        else resolve(data.toString());

        })
    })
}

readFile('./question.txt', 'utf-8')
    .then( data=> {
        console.log(data);
        return readFile('../res/res.txt', 'utf-8')
    })
    .then( data => {
        console.log(data);
        return readFile('../res/allPrice.json');
    })
    .then( data => console.log(data));


