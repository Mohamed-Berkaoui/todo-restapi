const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    phone:{type:Number},
    role:{type:String,required:true,default:"user",enum:["user","admin"]}
})



const User=mongoose.model("user",userSchema)

module.exports=User