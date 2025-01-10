const express = require("express");
const app = express();
const port  = 3000;
const {userRouter} =require("./routes/user");
const {userRouter} =require("./routes/course");
const {userRouter} =require("./routes/user");


app.use("/user",userRouter);
app.use("/course",courseRouter);


app.listen(port,()=>{
    console.log(`app lis Listening on ${port}`);
})