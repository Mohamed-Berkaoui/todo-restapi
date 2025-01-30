const todoRouter = require("express").Router();
const todoControllers = require("../controllers/todo");
const asyncHandler = require("../utils/asyncHandler");
const verifyToken = require("../utils/verifyToken");

todoRouter.use(verifyToken("admin","user"))

todoRouter
  .route("/")
  .get( verifyToken("admin"),asyncHandler(todoControllers.getAllTodos))
  .post( asyncHandler(todoControllers.addTodo));

  todoRouter.get('/usertodos',asyncHandler(todoControllers.getUserTodos))
  
todoRouter
  .route("/:id")
  .get(asyncHandler(todoControllers.getSingleTodo))
  .put( asyncHandler(todoControllers.updateTodo))
  .delete( asyncHandler(todoControllers.deleteTodo));
  
module.exports = todoRouter;
