// const moment = require('moment');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const fs = require('fs');
fs.writeFileSync("hello.txt","hello world!")
// console.log(fs.readFileSync("hello.txt","utf-8"))
fs.appendFileSync("hello.txt",",this is apended text")
fs.unlinkSync("hello.txt")