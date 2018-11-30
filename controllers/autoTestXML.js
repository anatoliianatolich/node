// const nocache = require('superagent-no-cache');
// const request = require('superagent');
// const prefix = require('superagent-prefix')('/static');
const request = require("request");
const fs = require("fs");


module.exports.postXML = (req,res,next) => {
        // correct query option => https://api.intertop.ua/api/productimages
request("https://api.intertop.ua/api/productimages/", (err, response, body)=> {
    res.status(200);
    res.end(body);
})
}

module.exports.getReq = (req,res,next) => {
   
    let id = fs.readFileSync('./page/cvet.txt', "utf-8",(err,data)=> {
        console.log(1);
        if(err) return res.status(400).send(err);
        return data.split("\b");
    });
    let arr = id.split("\r");
    arr.forEach((ei,i)=> {
        arr[i] = arr[i].trim(); 
    })
    console.log(arr[2]);
    arr.forEach((el, i)=> {
        request(`http://10.18.0.181:7080/kvinto_good/in?GOOD?${el[i]}`, (err, response, body)=> {
        // if(!body) return res.status(400).end("no connect is KVINTO");
       let a = 0;
       a++; 
        if(a == 10) return res.status(400).end("no connect is KVINTO")
        console.log(a + "count",i, body, arr[i]);
    });
    })
    res.status(200).end("GOOD");
}

