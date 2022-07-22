const express = require("express");
const usersRoute = express.Router();
const User = require("../models/librarian");
const asyncHandler = require("express-async-handler");
const authorisation = require("../middlewares/authorisation");
const {body, validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require('dotenv/config');



usersRoute.post("/login",[
    body("email", "Enter a valid email address").isEmail(),
    body("password", "Password cannot be blank").exists(),
],async(req, res) => {
    let success = false ;
    // return errors if any :
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    // yahan destructuring kra
    const {email, password} = req.body ;
    try {
        let user = await User.findOne({email}) ;
        if(!user) {
            return res.status(400).json({success, error : "Please try to login with correct credentials"}) ;
        } 

        const passwordCompare = await bcrypt.compare(password , user.password) ;
        if(!passwordCompare) {
            return res.status(400).json({success, error : "Please try to login with correct credentials"}) ;
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY

        );
        success = true ;
        res.json({success, authToken})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


});

//---------------------------------------------------------------------------------------------------------->>>>>>>>>>

usersRoute.get("/alluser", async (req, res)=>{
    try{const book_list = await User.find({});
    res.json(book_list);
    } catch (err){
        res.json({message: err});
    }
})

usersRoute.get("/one/:ID", async (req, res)=>{
    try{const book_list = await User.findById({"_id": req.params.ID});
    res.json(book_list);
    } catch (err){
        res.json({message: err});
    }
})

//update user
usersRoute.put("/update", authorisation, (req, res) => {
    res.send("Update User");
});

//delete user
usersRoute.delete("/delete/:ID", authorisation, (req, res) => {
    res.send("Delete User");
});

//signup/register new user
usersRoute.post("/register", asyncHandler(async (req, res) => {
    const userData = req.body;
    // console.log(userData.name);
    const userExist = await User.findOne({ email: userData.email });
    if (userExist) {
        throw new Error("User Already Exists");
    } else {
        const createUser = await User.create(userData);
        createUser.token = generateToken(createUser._id);
        console.log(createUser);
        res.send(createUser);
        console.log(createUser.token);
    }
})
);
module.exports = usersRoute;