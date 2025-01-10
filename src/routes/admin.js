const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message:"Signup Enpoint"
    })
})

adminRouter.post("/signin",(req,res)=>{
        res,josn({
            message:"Signin Endpoint"
        })
})


adminRouter.post("/course",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})

adminRouter.put("/course",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})
adminRouter.put("/courses/bulk",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})


module.exports = {
    adminRouter:adminRouter
}