const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
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
        email: user.email, 
        token: generateToken(user._id)
    }
        )
} else {
    res.status(400)
    throw new Error("Wrong User data")
}
})

// POST - login user - /api/users/login - public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email})
    const comparePswd = await bcrypt.compare(password, user.password)

    // check user and pswd match
    if(user && comparePswd){
        res.status(200).json({
            _id: user._id, 
            name: user.name, 
            email: 
            user.email,
             token: generateToken(user._id)
        }
            )
    } else {
        res.status(401)
        throw new Error("Not Authorized")
    }
})

// generate token
const generateToken = (id) => {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {
        expiresIn: '10d'
    })
}

module.exports = {
    registerUser, loginUser
}