const express = require('express')
const dotenv = require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 7000
const {errorHandler} = require("./middleware/errorMW")

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.get("/", (req,res) => {
   res.status(200)
})

// user routes
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))