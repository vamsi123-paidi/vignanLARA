// const add = require("./math")
// const moment = require('moment');

// console.log(add(2,3))


// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
// console.log(moment("2025-12-25", "YYYY-MM-DD").format("MMM Do"))

const fs = require('fs')
// fs.writeFileSync("hello.txt","hello from fs module")
// const data = fs.readFileSync("hello.txt","utf-8")
// console.log(data)
fs.appendFileSync("hello.txt"," this is added through appendfilesync")
fs.unlinkSync("hello.txt")