const express = require("express");
const {
  loginUser,
  signupUser
} = require("../controllers/index.server.controller.user");
const userRouter = express.Router();

//Login Route
userRouter.route("/login").post(loginUser);

//Register Route
userRouter.route("/signup").post(signupUser);

module.exports = userRouter;
