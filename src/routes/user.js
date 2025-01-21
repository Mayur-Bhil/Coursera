const express = require("express");
const bcrypt = require("bcrypt");
const { Router } = require("express");
const userRouter = Router();
const { User } = require("./db");

const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../utils");

userRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  try {

    const hashedPAssword = await bcrypt.hash(password, 10);
  console.log(hashedPAssword);

  const user = await User.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: hashedPAssword,
  });
  const userId = user._id;
  const token = jwt.sign(
    {
      userId,
    },
    jwtSecret
  )

  res.json({
    message: "User Created SUcessFully",
    token: token,
  });

  } catch (error) {
    res.send({
      message: "User Already Exist..!",
    });
  }
  
});

userRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const responce = await User.findOne({
    email: email,
  });

  if (!responce) {
    res.status(403).json({
      message: "USer Does Not Exist",
    });
    return;
  }

  const validpassWord = await bcrypt.compare(password, responce.password);
  if (validpassWord) {
    const Token = jwt.sign(
      {
        id: responce._id.toString(),
      },
      jwtSecret
    )
    res.send({
        Token :Token  
    })
  } else {
   res.status(403).send({
      message: "Incorect Credentials",
    });
  }
});

//user Will hit this port When He wants To purchase The Course
userRouter.post("/purchase", (req, res) => {
  return res.josn({
    message: "purchese Endpoint",
  });
});

module.exports = {
  userRouter,
};
