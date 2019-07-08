const express = require("express");
const app = express();
const rp = require("request-promise");
const request = require("request");
const bodyParser = require("body-parser");
const sqlConnect = require('../connectDB/connectSQL');
const {asyncPage} = require('./asyncRequest');

const fetch = require('./asyncParser');

const port = 3005;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

sqlConnect();
console.log( typeof asyncPage);

app
    .get('/', asyncPage
        // (req, res) => {
        // res.status(200).send("<p>Hello</p>");
        // async function getUser(){
        //     const arr = [1 , 2 ];
        //     arr.forEach((el)=>{
        //         sqlConnect.connection.query(`SELECT * FROM users LIMIT ${el}`, (err, val, fields) => {
        //             console.log('37',err);
        //             console.log('38', val);
        //             return Promise.resolve(val);
        //         })
        //     })
        //
        // }
        //
        // async function main(){
        //     let a =  await getUser();
        //     res.send(`<h1>${a}</h1>`);
        // }
        //
        // main();

        // let a =  getUser().then(user => {return user; });

        // function getBook(`){
        //     connection.query('SELECT * FROM users LIMIT 1')
        // }
    // }
    )
    .get("/current", (req, res)=> {
        const arr = ["27.06.2019","26.06.2019","25.06.2019","24.06.2019","23.06.2019","22.06.2019","21.06.2019"];
        const arrCurrent = [];
        arr.forEach((el, i) => {
            arrCurrent.push(fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${el}`));
        });
        console.log("55",arrCurrent);

        Promise.all(arrCurrent)
            .then(values =>{
                console.log(values);
            res.status(200).send(values)})
            .catch( err => {
                console.log(err);
            })

            // let url = `https://api.privatbank.ua/p24api/exchange_rates?json&date=${el}`;
            // let aaa = rp(url).then((body)=> console.log(body))

            // rp(url)
            //     .then( (body) => {
            //         arrCurrent.push({[el]: body});
            //         if(arrCurrent.length == 6) res.send(arrCurrent);
            //     }).catch((err)=>{
            //     console.log(err);
            // })
    })
    .get("/current/async", (req, res)=> {
        const arr = ["27.06.2019","26.06.2019","25.06.2019","24.06.2019","23.06.2019","22.06.2019","21.06.2019"];
        let arrCurrent = [];

        async function getData(arr){

        }

        // arr.forEach(await (el, i) => {
        //     let url = `https://api.privatbank.ua/p24api/exchange_rates?json&date=${el}`;
        //     request(url, (error, responce, body) => {
        //         console.log("57",i ,body);
        //     })
        //
        // });
        //
        // arrCurrent.push( )
    },
    )
    .get("/users", (req,res) => {
        connection.query("SELECT * FROM users WHERE id >= 20",
            function(err, results, fields) {
                console.log(err);
                res.send(results); // собственно данные
                console.log(fields); // мета-данные полей
            });
        connection.end();
    })

app.listen(port, () => {
    console.log(`Server running ${port}/`);
});
