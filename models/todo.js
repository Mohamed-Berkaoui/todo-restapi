const { default: mongoose } = require("mongoose")

const todoSchema=new mongoose.Schema({
    task:{type:String,required:true},
    status:{type:String,enum:["pending","done"],default:"pending"},
    userId:{type:mongoose.Types.ObjectId,ref:"user",required:true}
},{versionKey:false})

const Todo=mongoose.model('todo',todoSchema)

module.exports=Todo