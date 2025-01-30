const asyncHandler = require("../utils/asyncHandler");
const userCotrollers = require("../controllers/user");
const userRouter = require("express").Router();

userRouter.post("/register", asyncHandler(userCotrollers.register));

userRouter.post("/login", asyncHandler(userCotrollers.login));

module.exports = userRouter;
