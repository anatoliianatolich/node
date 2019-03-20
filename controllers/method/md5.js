const md5 = require("md5");
const base64 = require("base-64");

const greateHash = (email, password) => {
    return base64.encode(
        base64.encode(md5(email) + password).split("").reverse().join("") +
        (md5(email).toUpperCase));
}

// echo base64_encode(strrev(base64_encode(md5($login).$pass)).strtoupper(md5($login))); // php code
// const algoritm1 = base64.encode(md5(data.email) + data.password).split("").reverse().join("");
// const Algoritm2 = md5(data.email).toUpperCase;
// const Algoritm3 = base64.encode(
//     base64.encode(md5(data.email) + data.password).split("").reverse().join("") +
//     (md5(data.email).toUpperCase));

// console.log(Algoritm3);

module.exports = greateHash;