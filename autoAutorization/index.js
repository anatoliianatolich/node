const express = require("express");
const base64 = require("base-64");
const utf8 = require('utf8');


const app = express();
const port  = 3300;
const request = require("request");
const useremail = "skripai@intertop.ua"

    app.use("/");
    app.listen(port);
    const option = {
    url: 'https://api.intertop.ua/api/v2/user/auth/',
    headers: {
        "Authorization": "Basic cGFuZWw6cGFuZWw=",
        "params": {"email":"","pass":"aFZuTHc5R2R5VkdkdWxHUXBGR2NwSjNhekJUTjBJRE4yTUdPbWxqWXljallpTmpNMlltTXpVVFp3Z2pOMllXTTVVak0yNTkxRjY2ODBFNTMyRjYyM0JCNzJCOUY4QzY0MjQ1MA=="},
        'content-type': "application/xml"
    },
    method: "POST",
    body: XML
}
    request(option, )





