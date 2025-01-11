const {Router} = require("express");
const userRouter = Router();
const {User} = require("../db")

userRouter.post("/signup",(req,res)=>{
    res.json({
        message:"Signup Enpoint"
    })
})

userRouter.post("/signin",(req,res)=>{
        res,josn({
            message:"Signin Endpoint"
        })
})

//user Will hit this port When He wants To purchase The Course
userRouter.post("/purchase",(req,res)=>{
    res,josn({
        message:"purchese Endpoint"
    })
})

module.exports = {
    userRouter:userRouter
}