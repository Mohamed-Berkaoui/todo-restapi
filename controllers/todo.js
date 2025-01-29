const Todo = require("../models/todo");



async function getAllTodos(req, res, next) {

    const todos = await Todo.find();
    res.json({ status: "success", data: todos });

}

async function addTodo(req, res, next) {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json({ status: "success", data: newTodo });
  } catch (error) {
    next(error);
  }
}

async function getSingleTodo(req, res, next) {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.json({ status: "fail", message: "no todo finded" });
      return;
    }
    res.json({ status: "success", data: todo });
  } catch (error) {
    next(error);
  }
}

async function updateTodo(req, res, next) {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.json({ status: "success", data: updatedTodo });
  } catch (error) {
    next(error);
  }
}

async function deleteTodo(req, res, next) {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json({ status: "success", data: deletedTodo });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getAllTodos,
  addTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
