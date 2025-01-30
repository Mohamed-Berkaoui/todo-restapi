const bcrypt=require('bcrypt');
const User = require('../models/user');
const AppFail = require('../utils/appFail');
const AppSuccess = require('../utils/appSuccess');
const generateToken = require('../utils/generateToken');

async function register(req, res, next) {
    const user = new User(req.body);
    user.password = bcrypt.hashSync(user.password, 10);
    await user.save();
    res.json({ status: "success", data: user });
  }

  async function login(req, res, next) {
    const existUser = await User.findOne({ email: req.body.email });
    if (!existUser) {
      return res.json(new AppFail("somthing went wrong 1"));
    }
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      existUser.password
    );
    if (!isValidPassword) {
      return res.json(new AppFail("somthing went wrong 2"));
    }
    const token = generateToken(existUser._id);
    res.json(new AppSuccess(token));
  }

  module.exports={login,register}