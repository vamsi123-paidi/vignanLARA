// const express = require("express")
import express from "express"
const app = express();


app.get("/",(req,res)=>{
    res.send("hello from express js")
})

app.get("/hello",(req,res)=>{
    res.send("hello from hello route")
})


app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})