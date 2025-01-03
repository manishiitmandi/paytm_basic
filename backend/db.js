require('dotenv').config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
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
const accountSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        requird:true
    },
    balance:{
        type:Number,
        requird:true
    }
});


const Account =mongoose.model('Account',accountSchema);

module.exports={
    Account,
    User
}

