const express = require("express");
const connectToDb = require("./utils/connectToDb");
const todoRouter = require("./routers/todo");
const AppError = require("./utils/appError");
const userRouter = require("./routers/user");

const app = express();

app.use(express.json());


app.use("/api/auth",userRouter)
app.use("/api/todo", todoRouter);


app.all("*", function (req, res) {
  res.json(new AppError("404 not found"));
});

app.use(function (err, req, res, next) {
  res.json(new AppError(err.message));
});

app.listen(5000, function () {
  connectToDb();
  console.log("server runing on port 5000");
});
