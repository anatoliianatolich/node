// const nocache = require('superagent-no-cache');
const request = require('superagent');
// const prefix = require('superagent-prefix')('/static');
// const requestL = require("request");

module.exports = (req,res,next) => {
request("https://api.intertop.ua/api/productimages/", (err, response, body)=> {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
})
}


