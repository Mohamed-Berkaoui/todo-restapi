const express = require("express");
const connectToDb = require("./utils/connectToDb");
const todoRouter = require("./routers/todo");
const asyncHandler = require("./utils/asyncHandler");
const User = require("./models/user");


const app = express();

app.use(express.json());

app.use("/api/todo",todoRouter)


app.post("/api/auth/register",asyncHandler(async function(req,res,next){
    const user=new User(req.body)
    await user.save()
    res.json({status:"success",data:user})
}))


app.all('*',function(req,res){
    res.json({status:"error",message:'404 not found'})
})

app.use(function(err,req,res,next){
    res.json({ status: "error", message: err.message });
})

app.listen(5000, function () {
  connectToDb();
  console.log("server runing on port 5000");
});
