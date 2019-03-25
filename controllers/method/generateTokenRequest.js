const requestPromise = require("request-promise");
const fs = require("fs");
const request = require("request");
const utf8 = require("utf-8");
const base64 = require('base-64');
// const createHash = require("./md5");
const data =require("../../page/regData.json");

const urlReg = 'https://api.intertop.ua/api/v2/user/reg/';

const generateTokenReg = (req, res)=> {
    data.forEach((element, i, arr) => {
        console.log( element instanceof Array);
        // let datafor = element;
        let datafor = JSON.stringify(element);
        console.log(typeof datafor);
        onsole.log(datafor);
        // console.log(JSON.stringify(datafor));
        let hash = base64.encode(datafor);
        console.log(hash);

        // debugger;
        // let options = {
        //     method: "POST",
        //     uri: urlReg,
        //     headers: {
        //         'content-type': "application/json",
        //         authorization: "Basic cGFuZWw6cGFuZWw=",
        //         params: encode,
        //     },
        //     json: true
        // }
        // // console.log(i, options);
        //
        // requestPromise(options)
        //     .then((body)=> {
        //         element.status = body.data[0];
        //         console.log(body.data[0]);
        //         fs.appendFileSync("../../page/statusReg.txt", element);
        //
        //         if(arr.length -1 === i) res.status(200).send("end");
        //     })
        //     .catch( err => {
        //         console.log(err);
        //         if(arr.length -1 === i) res.status(204).send(err);
        //
        //     });
        if(arr.length -1 === i) res.status(200).send("end");
        });

}

module.exports = generateTokenReg;
