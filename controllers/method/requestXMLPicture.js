const request = require("request");
const fs = require("fs");


module.exports.postXML = (req, res, next) => {
    console.log("testXML");
    let id = fs.readFileSync('./page/newArticle.xlsx', "utf-8", (err, data) => {
        return data.split("\b");
    });
    let articleProd = id.split("\r");
    articleProd.forEach((el, i) => {
        articleProd[i] = el.trim();
    })


    articleProd.forEach((el) => {
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

        request(options, (err, response, body) => {
            if(err) return res.status(400).send("")
            console.log(el + "\n"+ body);
        })
        res.status(200).end("good work");
    })
}