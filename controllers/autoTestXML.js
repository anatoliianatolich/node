// const nocache = require('superagent-no-cache');
// const request = require('superagent');
// const prefix = require('superagent-prefix')('/static');
const request = require("request");
const fs = require("fs");


module.exports.postXML = async (req, res, next) => {
    console.log("testXML");
    let id = fs.readFileSync('./page/newArticle.txt', "utf-8", (err, data) => {
        return data.split("\b");
    });
    // console.log(id);
    let articleProd = id.split("\r");
    articleProd.forEach((el, i) => {
        articleProd[i] = el.trim();
    })


    await articleProd.forEach( (el) => {
        //запускати без проксі обов`язково
        let XML = `<?xml version="1.0" encoding="utf-8"?><request><products><salecode>` + `${el}` + `</salecode><active>1</active></products></request>`;
        var options = {
            url: 'https://api.intertop.ua/api/productimages/',
            headers: {
                'content-type': "application/xml"
            },
            method: "POST",
            body: XML
        }
        const buffer = [];
        request(options, (err, response, body) => {
            if(err) return res.status(400).send(err);
            console.log(el + "\n"+ body);
            buffer.push({el: body});
        });

        fs.writeFileSync('./res/res.txt', buffer);
        console.log(buffer);
    })
    res.status(200).end("good work XML");
}

module.exports.getReq = (req, res, next) => {

    let id = fs.readFileSync('./page/cvet.txt', "utf-8", (err, data) => {
        console.log(1);
        if (err) return res.status(400).send(err);
        return data.split("\b");
    });
    let arr = id.replace('\/', '').split("\r");
    arr.forEach((ei, i) => {
        arr[i] = arr[i].trim();
    })
    console.log(arr[2]);
    arr.forEach((el, i) => {
        request(`http://10.18.0.181:7080/kvinto_good/in?GOOD?${el[i]}`, (err, response, body) => {
            // if(!body) return res.status(400).end("no connect is KVINTO");
            let a = 0;
            a++;
            if (a == 10) return res.status(400).end("no connect is KVINTO")
            console.log(a + "count", i, body, arr[i]);
        });
    })
    res.status(200).end("GOOD");
}

