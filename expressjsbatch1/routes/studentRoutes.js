const express = require("express")
const { welcomePage, getAllStudents, getStudentsById, addStudent, updateStudent, deleteStudent, addStudentToDB } = require("../controllers/studentController")
const router = express.Router()

router.get("/",welcomePage)
router.get("/students",getAllStudents)
router.get("/students/:id",getStudentsById)
router.post("/students",addStudent)
router.put("/students/:id",updateStudent)
router.delete('/students/:id',deleteStudent )


router.post("/users",addStudentToDB)
module.exports = router