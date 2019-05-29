const request = require("request");
const fs = require("fs");

module.exports = (req, res) => {
    const options = {
        url: "http://10.18.0.181:7080/kvinto/in?PRICES",
        method: "GET"
    }
    request(options, (err, body)=> {
        console.log("string",(body));
        console.log("res",res.outputSize);
        const stringBody = JSON.stringify(body);
        console.log(typeof stringBody);
        fs.writeFileSync('./res/allPrice.json', stringBody);
        console.log('11111'),
        res.status(200).send("write price");

    })
}

