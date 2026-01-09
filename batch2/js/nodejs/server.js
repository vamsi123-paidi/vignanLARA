// const moment = require('moment');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const fs = require("fs");
fs.writeFileSync("index.html","<p>this is para</p>")

console.log(fs.readFileSync("index.html","utf-8"))

fs.appendFileSync("index.html"," this is appended through appendfilesync")

fs.unlinkSync("index.html")