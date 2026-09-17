const express = require("express")
const app = express()
const studentRoutes = require("./routes/studentRoutes")
app.use(express.json())
app.use("/api",studentRoutes)
app.listen(3000, () => {
    console.log("server is runnning port 3001")
})