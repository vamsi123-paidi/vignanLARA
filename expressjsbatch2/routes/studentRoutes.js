const express = require("express")
const { welcomeMessage, getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent } = require("../controllers/studentController")
const router = express.Router()

router.get("/",welcomeMessage)
router.get("/students",getAllStudents )
router.get("/students/:studentid",getStudentById)
router.post("/students",addStudent )
router.put("/students/:id", updateStudent)
router.delete('/students/:id',deleteStudent );

module.exports = router



