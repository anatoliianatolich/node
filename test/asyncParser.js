const request = require("request")

const fetch = url => new Promise((resolve, reject) => {

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
