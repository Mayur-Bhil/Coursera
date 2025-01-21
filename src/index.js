const express = require("express");
const app = express();
const port  = 3000;
const mongoose = require("mongoose")
const {userRouter} =require("./routes/user");
const {courseRouter} =require("./routes/course");
const {adminRouter} =require("./routes/admin");
const dotenv = require("dotenv")
dotenv.config({
    path:"./env"
})

app.use(express.json())

app.use("/",userRouter);    
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main(){
   await mongoose.connect("mongodb+srv://Mayur:Lpd2854455@mayur.oe53n.mongodb.net/courseiingApp")
   console.log("DB Connected");
   
        app.listen(port,()=>{
            console.log(`app lis Listening on ${port}`);
    })
}
main()