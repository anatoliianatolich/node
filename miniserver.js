const express = require("express");
const app = express();
const generateToken = require("./controllers/method/generateToken");
const bodyParser = require("body-parser");

const miniStart = (port) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    // setTimeout(app.use(generateToken), 3000); 
    app.use("/start", generateToken);
    app.listen(port)
    console.log("localhost listen port", port);
}

miniStart(3333);

module.exports = miniStart;