const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected sucessfulll")
    }catch{
        console.log("error while connecting to the mogdb atlas")
    }   
}
module.exports = connectDB
