const {Router} = require("express");
const adminRouter = Router();
const {Admin} = require("./db")


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


adminRouter.post("/",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})

adminRouter.put("/",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})
adminRouter.put("/bulk",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})


module.exports = {
    adminRouter:adminRouter
}