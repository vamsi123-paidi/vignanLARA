const express = require("express")
const { parse } = require("node:path")
const app = express()
const students = [
    {
        id: 1,
        name: "adam",
        age: 120
    }, {
        id: 2,
        name: "eve",
        age: 120
    }
]
app.use(express.json())
app.get("/", (req, res) => {
    res.send("welcome to the studentmangement system")
})

app.get("/students", (req, res) => {
    res.json(students)
})

app.get("/students/:studentid", (req, res) => {
    const studentid = Number(req.params.studentid)
    const student = students.find(s => studentid === s.id)
    res.json(student)
})

app.post("/students", (req, res) => {
    const { name, age } = req.body
    const student = {
        id: students.length + 1,
        name: name,
        age: age
    }
    students.push(student)
    res.send(student)
})

app.put("/students/:id", (req, res) => {
    const { name, age } = req.body
    const id = parseInt(req.params.id)
    const student = students.find(s => s.id === id)
    if (student) {
        student.name = name || student.name
        student.age = age || student.age
    }else{
        res.send("student not found")
    }
    res.send(student)
})

app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    const deleted = students.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).send('Student not found');
  }
});

app.listen(3000, () => {
    console.log("server is runnning port 3001")
})