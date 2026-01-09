// const moment = require('moment');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const fs = require('fs');
// fs.writeFileSync('students.txt', 'Hello Students!');
// console.log(fs.readFileSync("students.txt","utf-8"))
// fs.appendFileSync("students.txt",",this is appended text")
fs.unlinkSync("students.txt")