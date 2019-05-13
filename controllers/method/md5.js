const md5 = require("md5");
const base64 = require("base-64");
var utf8 = require('utf8');

// const greateHash = (email, password) => {
//     return base64.encode(
//         base64.encode(md5(email) + password).split("").reverse().join("") +
//         (md5(email).toUpperCase));
// };


// echo base64_encode(strrev(base64_encode(md5($login).$pass))
// .strtoupper(md5($login))); // php code
// const algoritm1 = base64.encode(md5(data.email) +
// data.password).split("").reverse().join("");
// const Algoritm2 = md5(data.email).toUpperCase;
const data ={
    email:"MITKV04_2@MITIK.ua",
    password: "172.30.0.42"
}
let {email, password} = data;
// console.log(email,',', password);
// // email = utf8.encode(email);
// // console.log(email);
// // password = utf8.encode(password);
// const Algoritm1 =(email, password)=> {
//     console.log(email,password)
//         return (base64.encode(email) + password).split('').reverse().join("");

// }
// console.log(Algoritm1(email, password));
// const Algoritm2 =(email, password)=> {
//     console.log(email,password)
//         return (md5(email).toUpperCase);

// }

// console.log(Algoritm2(email, password));

// const algoritmtes = base64.encode(Algoritm1 + Algoritm2);
// console.log(algoritmtes);

// const Algoritm3 =(data)=> {
//     console.log(data);
//     return base64.encode(
//             (base64.encode(data.email) + data.password).split('').reverse().join("") +
//             (md5(data.email).toUpperCase()));
// }
// console.log(Algoritm3(data));
console.log((base64.encode(md5(email) + password)).split('').reverse().join(""));
console.log(base64.encode((base64.encode(md5(email) + password)).split('').reverse().join("") + md5(email).toUpperCase())); //правильно написано
