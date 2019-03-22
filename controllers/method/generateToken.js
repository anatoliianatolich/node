const requestPromise = require("request-promise");
const fs = require("fs");
const base64 = require('base-64');
const createHash = require("./md5");
const data =require("../../page/regData.json");


const urlReg = 'https://api.intertop.ua/api/v2/user/reg/';
const url1 = 'https://api.intertop.ua/api/v2/user/auth/';
let url2 = 'https://api.intertop.ua/api/v2/user/token/?grant_type=authorization_code&code=';
// console.log(data.length);

// console.log(fs.mkdirSync("../../page/"));

// constData = fs.readFileSync("../../page/regData.json");
const generateToken = (constData)=> {
    constData.forEach(element => {
    
        console.log(element, "first request");
        let encode = base64.encode(element);
        let options = {
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
                if(body.data[0] !== true) return
                console.log(body, "requestPromise");
                let optionAuth = {
                    url: url1,
                    headers: {
                        'content-type': "application/json",
                        authorization: "Basic cGFuZWw6cGFuZWw=",
                        params: {
                            email: element.email,
                            pass: createHash({email, password}) //не факт що спрацює
                        },
                    },
                    method: "POST",
                };

                requestPromise(optionAuth)
                 .then((body)=> {
                     console.log(body.code);
                     const {code} = body;
                     const optionToken = {
                         url: url2.concat(code),
                         method: "POST",
                         headers: {
                            'content-type': "application/json",
                            authorization: "Basic cGFuZWw6cGFuZWw=",
                            params: {
                                email: element.email,
                                pass: element.password
                            }
                         }
                     }

                     requestPromise(optionToken)
                        .then((body)=> {
                            console.log(body);
                            const {token} = body;
                            element.token = token;
                            fs.appendFileSync("../../page/genenToken.json", body);
                            let i = 0
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
