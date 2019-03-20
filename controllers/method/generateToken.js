const request = require("request");
const requestPromise = require("request-promise");
const fs = require("fs");
const base64 = require('base-64');
const md5 = require('md5');

constData = fs.readFileSync("../page/reqData.json");

const urlReg = 'https://api.intertop.ua/api/v2/user/reg/';
const url1 = 'https://api.intertop.ua/api/v2/user/auth/';
let url2 = 'https://api.intertop.ua/api/v2/user/token/?';

let bodyReq = {
    params: {access_token: "5bdf1fd070cdb1ed02d535c5710e5b9ee9a11785"},
    headers: { authorization: "Basic cGFuZWw6cGFuZWw="}
};

const generateToken = (constData)=> {
    constData.forEach(element => {
        console.log(element);
        let encode = base64.encode(element);
        let optionsReq = {
            url: urlReg,
            headers: {
                'content-type': "application/json",
                authorization: "Basic cGFuZWw6cGFuZWw=",
                params: encode,
            },
            method: "POST",
            body: element
        }

        requestPromise(options)
            .then((body)=> {
                // if(body.data[0] !== true) return
                console.log(el + "\n"+ body);
                let optionAuth = {
                    url: url1,
                    headers: {
                        'content-type': "application/json",
                        authorization: "Basic cGFuZWw6cGFuZWw=",
                        params: {
                            email: element.email,
                            pass: '',
                        }
                    }
                }
                requestPromise()
            })
            .catch((err)=> {
                console.log(err);
                res.status(204).send(err);
            })
    });

}

module.exports = generateToken;

