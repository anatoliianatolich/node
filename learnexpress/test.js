const express = require('express');
const app = express();
const request = require("request");


express.json();
request({
    url: "http://i-top-0.bi3x.org/api/v2/cart/city/",
    method: "GET",
    params: {access_token:"0cc2f4b3daba25faae85cbc14a1bb1ac1900aac6"},
    headers: {
        "Authorization": "Basic cGFuZWw6cGFuZWw="
    }
}, (err, data)=> {
    console.log("15",data);
})
app.listen(4000, ()=>{
    console.log("server start");
});
