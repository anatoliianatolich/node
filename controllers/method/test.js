const fs = require("fs");
const xlsx = require("xlsx");



test = (req, res) => {
    let elementTest = "SuperTest";
    let writeTest = fs.writeFile("./page/123.xlsx", elementTest, 101, (err, data)=> {
        if (err) return res. status(200).end("false")
        console.log(data);
    });
    let test = xlsx.readFile("./page/123.xlsx");
    let test1 = test.SheetNames;
    let testEnd = xlsx.utils.sheet_to_json(test.Sheets[test1[0]]);
    let _a = testEnd["1"];
    
    
    // let  test1 = fs.readFileSync("./page/123.xlsx", "utf-8", (err,data)=> {
    //     console.log(data);
    //     return data;
    // })
    console.log(Object.keys(_a));
    res.status(200).send("good" + _a);
}

module.exports = test;