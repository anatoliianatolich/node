// const https = require('https');
const request = require("request")

const fetch = url => new Promise((resolve, reject) => {
    // https.get(url, res => {
    //     const code = res.statusCode;
    //     if (code !== 200) {
    //         return reject(new Error(`HTTPS status code ${code}`));
    //     }
    //
    //     res.on('error', reject);
    //
    //     const chunks = [];
    //     res.on('data', chunk => {
    //         chunks.push(chunk);
    //     });
    //
    //     res.on('end', () => {
    //         const json = Buffer.concat(chunks).toString();
    //         try {
    //             const object = JSON.parse(json);
    //             resolve(object);
    //         } catch (error) {
    //             return reject(error);
    //         }
    //     });
    // });
    request(url, (err, f, data) => {
        var object = [Buffer.from(data)];
        var json = Buffer.concat(object);
        try {
            resolve(json);
        } catch (error) {
            return reject(error);
        }
    })
});

module.exports = fetch;