const sqlConnect = require('../connectDB/connectSQL');

module.exports.asyncPage = (req, res, next) => {
    async function getUser(){
        const arr = [0, 1];

        arr.forEach((el)=>{
            sqlConnect.connection.query(`SELECT * FROM users LIMIT ${el}, 1`,
                (err, val, fields) => {
                console.log('37',err);
                console.log('38', val);
                return Promise.resolve(val);
            })
        })
    }

    async function main(){
        let a =  await getUser();
        res.send(`<h1>${a}</h1>`);
    }

    main();

    next();

}