const asyncHandler = require("express-async-handler")

// POST - register user - /api/users - public
const registerUser = asyncHandler(async (req,res) => {
    const {name,email,password} = req.body;
    console.log("Register Route");
    // validation
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Fill out all required fields")
    }

})

// POST - login user - /api/users/login - public
const loginUser = asyncHandler(async (req,res) => {
    res.send("Login Route")
})

module.exports = {
    registerUser, loginUser
}