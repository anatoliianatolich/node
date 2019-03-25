const requestPromise = require("request-promise");
const fs = require("fs");
const base64 = require('base-64');
const createHash = require("./md5");
const data =require("../../page/regData.json");
// const utf8 = require("utf-8");


const urlReg = 'https://api.intertop.ua/api/v2/user/reg/';
const url1 = 'https://api.intertop.ua/api/v2/user/auth/';
let url2 = 'https://api.intertop.ua/api/v2/user/token/?grant_type=authorization_code&code=';
console.log(data instanceof Array);
// console.log(fs.mkdirSync("../../page/"));

// constData = fs.readFileSync("../../page/regData.json");
const generateToken = (req, res)=> {
    // console.log(req.hostname);

    data.forEach((element, i) => {
        let encode = base64.encode((element));
        debugger;
        let options = {
            method: "POST",
            uri: urlReg,
            headers: {
                'content-type': "application/json",
                authorization: "Basic cGFuZWw6cGFuZWw=",
                params: encode,
            },
            body: element,
            json: true
        }
        console.log("options",options);

        requestPromise(options)
            .then((body)=> {
                // if(body.data[0] !== true) return;
                debugger;
                console.log("requestPromise", body);
                let optionAuth = {
                    uri: url1,
                    headers: {
                        'content-type': "application/json",
                        authorization: "Basic cGFuZWw6cGFuZWw=",
                        params: {
                            email: element.email,
                            pass: createHash(JSON.stringify(element.email, element.password)) //не факт що спрацює
                        },
                    },
                    method: "POST",
                    json: true
                };
                debugger;
                requestPromise(optionAuth)
                 .then((body)=> {
                     console.log(body.code);
                     const {code} = body;
                     const optionToken = {
                         uri: url2.concat(code),
                         method: "POST",
                         headers: {
                            'content-type': "application/json",
                            authorization: "Basic cGFuZWw6cGFuZWw=",
                            params: {
                                email: element.email,
                                pass: element.password
                            }
                         },
                         json: true
                     }
                     debugger;
                     requestPromise(optionToken)
                        .then((body)=> {
                            console.log(body);
                            const {token} = body;
                            element.token = token;
                            fs.appendFileSync("../../page/genenToken.json", body);
                            console.log(++i);
                        })
                 })
                 .catch((err)=> {
                    console.log(err);
                    res.status(204).send(err);
                 })

            })
            .catch((err)=> {
                console.log(err);
                res.status(204).send(err);
            })

    });

}

module.exports = generateToken;
