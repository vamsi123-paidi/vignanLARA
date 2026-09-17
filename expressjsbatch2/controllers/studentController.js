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

const welcomeMessage =  (req, res) => {
    res.send("welcome to the studentmangement system")
}

const getAllStudents = (req, res) => {
    res.json(students)
}
const getStudentById =  (req, res) => {
    const studentid = Number(req.params.studentid)
    const student = students.find(s => studentid === s.id)
    res.json(student)
}

const addStudent = (req, res) => {
    const { name, age } = req.body
    const student = {
        id: students.length + 1,
        name: name,
        age: age
    }
    students.push(student)
    res.send(student)
}
 

const updateStudent = (req, res) => {
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

module.exports = {welcomeMessage,getAllStudents,getStudentById,addStudent,updateStudent,deleteStudent}