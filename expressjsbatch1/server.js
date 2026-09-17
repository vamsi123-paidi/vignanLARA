const express = require('express')
const app = express()
const studentRoutes = require('./routes/studentRoutes')
const connectDB = require('./config/db')
const dotenv = require("dotenv").config()

app.use(express.json())
app.use("/api",studentRoutes)

connectDB()
app.listen(3000, () => {
    console.log("server is running at port 3000")
})