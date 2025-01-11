const {Router} = require("express")
const courseRouter = Router();
const {Course} = require("../db");

//User ke current Courses
 courseRouter.get("/purchases",(req,res)=>{
        res,josn({
            message:"Signin Endpoint"
        })
    })

    //for all the Current Courses
    courseRouter.get("/preview",(req,res)=>{
        res,josn({
            message:"course Priview Endpoint"
        })
    })


module.exports = {
    courseRouter:courseRouter
}    