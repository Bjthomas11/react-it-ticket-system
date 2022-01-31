const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const protected = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // get token from headers
            token = req.headers.authorization.split(" ")[1]
            // verify token
            const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
            // get user from token, minues pswd
            req.user = await User.findById(decodedToken.id).select("-password")
            // call next MW
            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error("Not Authorized")
            
        }
    }

    // check if no token
    if(!token) {
        res.status(401)
            throw new Error("Not Authorized")
    }
})

module.exports = {protected}