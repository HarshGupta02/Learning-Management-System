const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config({path : './config.env'});

const userSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    RollNumber : {
        type : String,
        required : true
    },
    FatherName : {
        type : String,
        required : true
    },
    DateOfBirth : {
        type : Date,
        required : true
    },
    Branch : {
        type : String,
        required : true
    },
    BloodGroup : {
        type : String,
        required : true
    },
    ValidTill : {
        type : Date,
        required : true
    },
    MobileNo : {
        type : Number,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    ParentMobileNumber : {
        type : Number,
        required : true
    },
    ParentEmail : {
        type : String,
        required : true
    },
    CurrentAddress : {
        type : String,
        required : true
    },
    District : {
        type : String,
        required : true
    },
    PinCode : {
        type : Number,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})

userSchema.pre('save', async function(next){
    if(this.isModified('Password')){
        this.Password = await bcrypt.hash(this.Password, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function (){
    try{
        let token = jwt.sign({_id : this.id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        console.log(token);
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);
module.exports = User;
