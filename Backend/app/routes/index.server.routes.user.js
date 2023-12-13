const express = require("express");
const {
  loginUser,
  signupUser,
  getUserInfo
} = require("../controllers/index.server.controller.user");
const userRouter = express.Router();

//Login Route
userRouter.route("/login").post(loginUser);

//Register Route
userRouter.route("/signup").post(signupUser);

//Get User by ID Route
userRouter.route("/info/:id").get(getUserInfo);


module.exports = userRouter;
