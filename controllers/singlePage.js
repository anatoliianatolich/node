const fs = require("fs");

const singlePage = (req,res,next) => {
  const page = fs.readFileSync("./page/index.html", "utf-8", (err, data)=> {
    if (err) throw err;
})
  res.writeHead(200,{"content-type":"text/html"});
  res.end(page);
}

module.exports = singlePage;