const express = require("express");
const app = express();
const port  = 3000;

app.post("/user/signup",(req,res)=>{
    res.json({
        message:"Signpu Enpoint"
    })
})

app.post("/user/signin",(req,res)=>{
        res,josn({
            message:"Signin Endpoint"
        })
})

//user Will hit this port When He wants To purchase The Course
app.post("/user/signin",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})

//User ke current Courses
app.get("/user/purchases",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})

//for all the Current Courses
app.get("/learn/courses",(req,res)=>{
    res,josn({
        message:"Signin Endpoint"
    })
})


app.listen(port,()=>{
    console.log(`app lis Listening on ${port}`);
} )