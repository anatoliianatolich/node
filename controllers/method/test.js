const fs = require("fs");
// const xlsx = require("xlsx");
const xlsx = require("node-xlsx");



// const test = (req, res) => {
//     let elementTest = "SuperTest";
//     let writeTest = fs.writeFile("./page/123.xlsx", elementTest, 101, (err, data)=> {
//         if (err) return res. status(200).end("false")
//         console.log(data);
//     });
//     let test = xlsx.readFile("./page/123.xlsx");
//     let test1 = test.SheetNames;
//     let testEnd = xlsx.utils.sheet_to_json(test.Sheets[test1[0]]);
//     let _a = testEnd["1"];


//     // let  test1 = fs.readFileSync("./page/123.xlsx", "utf-8", (err,data)=> {
//     //     console.log(data);
//     //     return data;
//     // })
//     console.log(Object.keys(_a));
//     res.status(200).send("good" + _a);
// }

const test = (req, res) => {
    // fs.open("./page/123.xlsx",'wx', (err)=>{
    //     if(err) {
    //         u
    //     }
    // })
    const data = [
        [10, 2, 3],
        [true, false, null, 'sheetjs'],
        ['foo', 'bar', new Date(), '0.3'],
        ['baz', null, 'qux']
    ];

    const range = { s: { c: 0, r: 0 }, e: { c: 0, r: 3 } }

    let option = { "!merge": [range] };

    let buffer = xlsx.build(
        [{ name: "test", data: data }],
        option
    );

    let n = "\n";

    console.log(buffer);
    fs.writeFile("./page/test.txt", "ARA", (err, data)=> {
        if(err) return console.log("error write");
    });
    const a = fs.closeSync(1);
    console.log(a);
    // fs.appendFileSync("./page/test.txt", n + "yra", );
    // let read = fs.readFileSync("./page/test.txt");
    // console.log(read);

    // fs.readFile('./page/test.tx', 'utf8', (err, data)=> {
    //     console.log(data);
    // })

    // fs.closeSync();
    // fs.open("./page/123.xlsx", (err, data) => {
    //     if(err) return console.error("file not exists");
    //     console.log(data);
    // })
    // fs.closeSync("./page/123.xlsx");


    const tableBuffer = xlsx.parse(fs.readFileSync("./page/123.xlsx"));

    console.log(tableBuffer);

    res.status(200).send("1");

}

module.exports = test;