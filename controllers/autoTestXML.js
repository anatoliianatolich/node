// const nocache = require('superagent-no-cache');
// const request = require('superagent');
// const prefix = require('superagent-prefix')('/static');
const request = require("request");
const fs = require("fs");


const postXML = (req,res,next) => {
        // correct query option => https://api.intertop.ua/api/productimages
request("https://api.intertop.ua/api/productimages/", (err, response, body)=> {
    res.status(200);
    res.end(body);
})
}

const getReq = (req,res,next) => {
    let id;
    fs.readFileSync('./page/cvet.txt',(err,data)=> {
        if(err) return res.status(400).send(err);
        console.log(data);
    });
    
    request("http://10.18.0.181:7080/kvinto_good/in?GOOD?2616605 ", (err, response, body)=> {
    res.status(200);
    res.end(body);
    });
}

module.exports = getReq;