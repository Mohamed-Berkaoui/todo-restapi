const todoRouter=require('express').Router()
const todoControllers = require("../controllers/todo");
const asyncHandler = require('../utils/asyncHandler');

todoRouter.get("/",asyncHandler(todoControllers.getAllTodos) );
todoRouter.post("/", todoControllers.addTodo);
todoRouter.get("/:id", todoControllers.getSingleTodo);
todoRouter.put("/:id", todoControllers.updateTodo);
todoRouter.delete("/:id", todoControllers.deleteTodo);
todoRouter.all('*',function(req,res,next){
    console.log("first")
    next()
})
module.exports=todoRouter