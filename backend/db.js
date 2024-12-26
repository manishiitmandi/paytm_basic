const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercasw:true,
        minLength:3,
        maxLenght:30

    },
    password:{
        type:String,
        required:true,
        minLenght:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLenght:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLenght:50
    }
});
const User=mongoose.model('User',userSchema);
module.exports={
    User
};

// const accoutSchema =new mongoose.Schema({

// })

