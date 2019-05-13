const request = require("request");
const fs = require("fs");

module.exports = (req, res) => {
    const options = {
        url: "http://10.18.0.181:7080/kvinto/in?PRICES",
        method: "GET"
    }
    request(options, (err, res, body)=> {
        // console.log(body);
        const stringBody = JSON.stringify(body);
        const arrProduct = [];

        console.log(typeof stringBody);
        fs.writeFileSync('./res/allPrice.json', stringBody);
        res.statusCode(200).send("write price");
    })
}

