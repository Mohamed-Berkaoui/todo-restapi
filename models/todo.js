const { default: mongoose } = require("mongoose")

const todoSchema=new mongoose.Schema({
    task:{type:String,required:true},
    status:{type:String,enum:["pending","done"],default:"pending"}
},{versionKey:false})

const Todo=mongoose.model('todo',todoSchema)

module.exports=Todo