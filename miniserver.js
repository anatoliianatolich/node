const express = require("express");
const app = express();
const generateTokenReg = require("./controllers/method/generateTokenRequest");
// const generateToken = require("./controllers/method/generateToken");
const bodyParser = require("body-parser");

const miniStart = (port) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    // setTimeout(app.use(generateToken), 3000); 
    app.use("/", generateTokenReg);
    // app.use("/", generateToken);
    app.listen(port)
    console.log("localhost listen port", port);
}

miniStart(4545);

module.exports = miniStart;
