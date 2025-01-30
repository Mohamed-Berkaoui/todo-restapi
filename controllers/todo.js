const Todo = require("../models/todo");
const AppFail = require("../utils/appFail");
const AppSuccess = require("../utils/appSuccess");

async function getAllTodos(req, res, next) {
  const todos = await Todo.find();
  if (!todos) {
    return res.json(new AppFail("no data found"));
  }
  res.json(new AppSuccess(todos));
}
async function getUserTodos(req, res, next) {
  const todos = await Todo.find({userId:req.user});
  if (!todos.length) {
    return res.json(new AppFail("no data found"));
  }
  res.json(new AppSuccess(todos));
}

async function addTodo(req, res, next) {
  if (!req.body.task) {
    return res.json(new AppFail("smothing went wrong"));
  }

  const newTodo = new Todo(req.body);
  newTodo.userId=req.user
  await newTodo.save();
  res.json(new AppSuccess(newTodo));
}

async function getSingleTodo(req, res, next) {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.json(new AppFail("todo not found"));
    return;
  }
  res.json(new AppSuccess(todo));
}

async function updateTodo(req, res, next) {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  if(!updatedTodo){
    return res.json(new AppFail("fail to update"))
  }
  res.json(new AppSuccess(updateTodo));
}

async function deleteTodo(req, res, next) {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  if(!deletedTodo){
    return res.json(new AppFail("fail to delete todo"))
  }
  res.json(new AppSuccess(deleteTodo));
}
module.exports = {
  getAllTodos,
  addTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
  getUserTodos
};
