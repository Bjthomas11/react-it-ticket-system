const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")

// POST - register user - /api/users - public
const registerUser = asyncHandler(async (req,res) => {
    const {name,email,password} = req.body;
    // validation
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Fill out all required fields")
    }

    // find is user exists
const userExists = await User.findOne({email: email})

if(userExists) {
    res.status(400)
    throw new Error("User already has an account")
}

// hash pswd
const salt = await bcrypt.genSalt(10)
const hashedPswd = await bcrypt.hash(password, salt)

// create user
const user = await User.create({
    name: name,
    email: email,
    password: hashedPswd
})

if(user){
    res.status(201).json({
        _id: user._id, 
        name: user.name, 
        email: 
        user.email}
        )
} else {
    res.status(400)
    throw new Error("Wrong User data")
}
})

// POST - login user - /api/users/login - public
const loginUser = asyncHandler(async (req,res) => {
    res.send("Login Route")
})

module.exports = {
    registerUser, loginUser
}