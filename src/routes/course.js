const {Router} = require("express")
const courseRouter = Router();

//User ke current Courses
 courseRouter.get("/courses/purchases",(req,res)=>{
        res,josn({
            message:"Signin Endpoint"
        })
    })

    //for all the Current Courses
    courseRouter.get("/courses",(req,res)=>{
        res,josn({
            message:"Signin Endpoint"
        })
    })


module.exports = {
    courseRouter:courseRouter
}    