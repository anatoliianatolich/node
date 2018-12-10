const fs = require("fs");
const xlsx = require("xlsx");



test = (req, res) => {
    let test = xlsx.readFile("./page/123.xlsx");
    let test1 = test.SheetNames;
    let testEnd = xlsx.utils.sheet_to_json(test.Sheets[test1[0]]);
    // let  test1 = fs.readFileSync("./page/123.xlsx", "utf-8", (err,data)=> {
    //     console.log(data);
    //     return data;
    // })
    console.log(test);
    res.status(200).send("good" + test1);
}

module.exports = test;