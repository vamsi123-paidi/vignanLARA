const express = require('express')
const app= express()

app.get('/',(req,res)=>{
    res.send("hello from expressjs")
})

app.get('/about',(req,res)=>{
    res.send("hello from expressjs to about")
})

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})