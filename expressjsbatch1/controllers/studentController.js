const User = require('../models/User')
const students = [
    {
        id:1,
        name: "adam",
        age: 100
    },
    {
        id:2,
        name:"eve",
        age:200
    }
]


const welcomePage =  (req, res) => {
    res.send("welcome to the student management  system")
}

const getAllStudents = (req,res)=>{
    res.send(students)
}

const getStudentsById = (req,res)=>{
    const id = parseInt(req.params.id)
    const student = students.find(s=>s.id === id) 
    res.send(student) 
}

const addStudent = (req,res)=>{
    const id = parseInt(req.params.id)

    const {name,age} = req.body
    const student = {
        id:students.length + 1,
        name :name,
        age:age
    }
    students.push(student)
    res.send(student)
}

const updateStudent = (req,res)=>{
    const {name,age} = req.body
    const id = parseInt(req.params.id)
    const student = students.find(s=>s.id===id)
    if(student){
        student.name = name || student.name
        student.age = age || student.age
    }
    res.send(student)
    
}

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    const deleted = students.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).send('Student not found');
  }
}

const addStudentToDB = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
module.exports = {welcomePage,getAllStudents,getStudentsById,addStudent,updateStudent,deleteStudent,addStudentToDB}