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

third();