require("../db/conn");
const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const { response } = require("express");

router.post('/register', async (req, res) => {
    console.log("here in backend");
    const {name, password, rollno, fathername, dateofbirth, branch, bloodgroup, validtill,
    mobileno, email, parentmobilenumber, parentemail, currentaddress, district, pincode} = req.body;

    console.log(name); console.log(password); console.log(rollno); console.log(fathername);
    console.log(dateofbirth); console.log(branch); console.log(bloodgroup); console.log(validtill);
    console.log(mobileno); console.log(email); console.log(parentmobilenumber); console.log(parentemail);
    console.log(currentaddress); console.log(district); console.log(pincode);

    if(!name || !password || !rollno || !fathername || !dateofbirth || !branch ||
        !bloodgroup || !validtill || !mobileno || !email || !parentmobilenumber || 
        !parentemail || !currentaddress || !district || !pincode){
        return res.status(422).json({error : "Please Fill the fields properlyyy"});
    }
    User.findOne({RollNumber : rollno}).then((userExist) => {
        if(userExist){
            return res.status(422).json({error : "RollNumber Already Exists"});
        }
        const user = new User({
            Name : name,
            Password : password,
            RollNumber : rollno,
            FatherName : fathername,
            DateOfBirth : dateofbirth,
            Branch : branch,
            BloodGroup : bloodgroup,
            ValidTill : validtill,
            MobileNo : mobileno,
            Email : email,
            ParentMobileNumber : parentmobilenumber,
            ParentEmail : parentemail,
            CurrentAddress : currentaddress,
            District : district,
            PinCode : pincode
        });

        user.save().then(() => {
            res.status(201).json({message : "User Registerd Successfully"});
        }).catch((err) => {
            console.log(err);
            res.status(422).json({err : "Failed to Register"});
        })
    }).catch((err) => {
        console.log(err);
    })
});

router.post("/login", async (req, res) => {
    try{
        const {rollno, password} = req.body;
        console.log(rollno);
        console.log(password);
        if(!rollno || !password){
            return res.status(422).json({err : "Fill all the fields"});
        }
        const userLogin = await User.findOne({RollNumber : rollno});
        if(!userLogin) return res.status(422).json({err : "Invalid Credentials"});
        const isMatch = await bcrypt.compare(password, userLogin.Password);
        const token = await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token, {
            expires : new Date(Date.now() + 25892000000),
            httpOnly : true
        });

        if(!isMatch){   
            return res.status(422).json({err : "Invalid credentials"});
        }else{
            return res.status(200).json({msg : "User Signed in successfully"});
        }
    }catch(err){
        console.log(err);
    }
});

router.get("/home", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get("/register", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get("/personal", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get("/payment", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get("/ContactUs", (req,res) => {
    res.cookie("Test", 'harsh');
    res.send("This is the contact us page");
})

router.get("/logout", (req, res) => { 
    res.clearCookie('jwtoken', {path : "/"});
    res.status(200).send("User Logout");    
});

module.exports = router;