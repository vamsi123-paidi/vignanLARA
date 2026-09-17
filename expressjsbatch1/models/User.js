const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
   name:{
    type:String,
    required :true
   } ,
   age:{
    type:Number,
    required :true
   } 
})
module.exports = mongoose.model("User",userModel)