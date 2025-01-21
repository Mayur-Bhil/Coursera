
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const UserSchema =new Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,   
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    firstName:{
        type:String,
        required:true,
        minLength:2,    
        maxLength:8
    },
    lastName:{
        type:String,
        required:true,
        minLength:2,    
        maxLength:8
    }
})


const AdminSchema =new Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,   
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    firstName:{
        type:String,
        required:true,
        minLength:4,    
        maxLength:8
    },
    lastName:{
        type:String,
        required:true,
        minLength:4,    
        maxLength:8
    }
})


const CourseSchema =new Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
        
    },
    price:{
        type:Number,
        required:true,
        minLength:5,
        maxLength:6
    },
    imageUrl :{
        type:String,
        required : true
    },
    creatorId:ObjectId
       
})

const PurchaseSchema = new Schema({
    userId:ObjectId,
    courseId:ObjectId
})


const User = mongoose.model("User",UserSchema);
const Admin = mongoose.model("Admin",AdminSchema);
const Course = mongoose.model("Course",CourseSchema);
const Purchase = mongoose.model("Purchase",PurchaseSchema); 

module.exports = {
    User,Admin,Course,Purchase
}